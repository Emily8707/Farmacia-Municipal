// ============================================================
// MOVIMIENTOS (vacío - solo navegación)
// ============================================================
const movimientos = [];

const MOVS_POR_PAGINA = 10;
let paginaActual = 1;
let movimientosFiltrados = [];

// ============================================================
// INICIALIZACIÓN
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    if (!document.getElementById('tablaMovimientos')) return;
    movimientosFiltrados = [...movimientos];

    document.getElementById('filtroTipo').addEventListener('change', aplicarFiltros);
    document.getElementById('filtroMedicamento').addEventListener('input', aplicarFiltros);
    document.getElementById('filtroDesde').addEventListener('change', aplicarFiltros);
    document.getElementById('filtroHasta').addEventListener('change', aplicarFiltros);
    renderTabla();
});

// ============================================================
// APLICAR FILTROS
// ============================================================
function aplicarFiltros() {
    const tipo = document.getElementById('filtroTipo').value;
    const medicamento = document.getElementById('filtroMedicamento').value.toLowerCase().trim();
    const desde = document.getElementById('filtroDesde').value;
    const hasta = document.getElementById('filtroHasta').value;

    movimientosFiltrados = movimientos.filter(m => {
        if (tipo !== 'todos' && m.tipo !== tipo) return false;
        if (medicamento && !m.medicamento.toLowerCase().includes(medicamento)) return false;
        if (desde && new Date(m.fecha) < new Date(desde)) return false;
        if (hasta && new Date(m.fecha) > new Date(hasta)) return false;
        return true;
    });
    movimientosFiltrados.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
    paginaActual = 1;
    renderTabla();
}

// ============================================================
// RENDERIZAR TABLA
// ============================================================
function renderTabla() {
    const tbody = document.getElementById('tablaMovimientos');
    tbody.innerHTML = '';

    // Estado vacío
    if (movimientosFiltrados.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="7" style="text-align:center; padding:60px 20px; color:#9ca3af;">
                    <div style="font-size:48px; margin-bottom:15px; opacity:0.4;">
                        <i class="fa-solid fa-arrows-rotate"></i>
                    </div>
                    <div style="font-size:16px; font-weight:600; color:#6c757d; margin-bottom:8px;">
                        Aún no hay movimientos registrados
                    </div>
                    <div style="font-size:13px;">
                        Los movimientos aparecerán aquí cuando se registren entradas o salidas.
                    </div>
                </td>
            </tr>
        `;
        document.getElementById('infoRango').textContent = '0';
        document.getElementById('infoTotal').textContent = '0';
        document.getElementById('paginaActual').textContent = '1';
        document.getElementById('paginaTotal').textContent = '1';
        document.getElementById('btnPrev').disabled = true;
        document.getElementById('btnNext').disabled = true;
        return;
    }

    const totalPaginas = Math.ceil(movimientosFiltrados.length / MOVS_POR_PAGINA);
    const inicio = (paginaActual - 1) * MOVS_POR_PAGINA;
    const fin = Math.min(inicio + MOVS_POR_PAGINA, movimientosFiltrados.length);
    const paginaActualMovs = movimientosFiltrados.slice(inicio, fin);

    paginaActualMovs.forEach(m => {
        const tipoBadge = m.tipo === 'Entrada'
            ? `<span class="badge-tipo entrada"><i class="fa-solid fa-arrow-down"></i> Entrada</span>`
            : `<span class="badge-tipo salida"><i class="fa-solid fa-arrow-up"></i> Salida</span>`;
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${formatearFecha(m.fecha)}</td><td>${tipoBadge}</td><td><strong>${m.medicamento}</strong></td><td>${m.lote}</td><td>${m.cantidad}</td><td>${m.persona}</td><td>${m.receta}</td>`;
        tbody.appendChild(tr);
    });

    document.getElementById('infoRango').textContent = `${inicio + 1}-${fin}`;
    document.getElementById('infoTotal').textContent = movimientosFiltrados.length;
    document.getElementById('paginaActual').textContent = paginaActual;
    document.getElementById('paginaTotal').textContent = totalPaginas;
    document.getElementById('btnPrev').disabled = paginaActual === 1;
    document.getElementById('btnNext').disabled = paginaActual === totalPaginas;
}

function cambiarPagina(direccion) {
    const totalPaginas = Math.ceil(movimientosFiltrados.length / MOVS_POR_PAGINA);
    paginaActual += direccion;
    if (paginaActual < 1) paginaActual = 1;
    if (paginaActual > totalPaginas) paginaActual = totalPaginas;
    renderTabla();
}

function formatearFecha(fechaStr) {
    const fecha = new Date(fechaStr + 'T00:00:00');
    return `${String(fecha.getDate()).padStart(2, '0')}/${String(fecha.getMonth() + 1).padStart(2, '0')}/${fecha.getFullYear()}`;
}