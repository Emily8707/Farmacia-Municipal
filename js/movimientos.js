const movimientos = [
    { fecha: '2026-10-06', tipo: 'Salida',  medicamento: 'Amoxicilina', lote: 'L0129-INY', cantidad: 1, persona: 'María Salmón', receta: '8989888' },
    { fecha: '2026-10-06', tipo: 'Salida',  medicamento: 'Bismuto', lote: 'L0465-SUS', cantidad: 2, persona: 'Naria Nandez', receta: '23444555' },
    { fecha: '2026-10-06', tipo: 'Entrada', medicamento: 'Acarbosa', lote: '3456', cantidad: 2, persona: 'Farma 2', receta: '—' },
    { fecha: '2026-08-25', tipo: 'Salida',  medicamento: 'Calcio', lote: 'L0592-CÁP', cantidad: 1, persona: 'Juana Martínez', receta: 'REC-2026-5675' },
    { fecha: '2026-08-25', tipo: 'Salida',  medicamento: 'Calcio', lote: 'L0592-CÁP', cantidad: 1, persona: 'Juana Martínez', receta: 'REC-2026-5675' },
    { fecha: '2026-08-17', tipo: 'Entrada', medicamento: 'Ambroxol', lote: 'LOT-4545-709', cantidad: 9, persona: 'FarmaVida Distribuidora', receta: '—' },
    { fecha: '2026-08-10', tipo: 'Entrada', medicamento: 'Paracetamol', lote: 'PAR-2024-001', cantidad: 500, persona: 'Distribuidora Farmacéutica S.A.', receta: '—' },
    { fecha: '2026-08-10', tipo: 'Entrada', medicamento: 'Ibuprofeno', lote: 'IBU-2024-005', cantidad: 300, persona: 'MediSupply GT', receta: '—' },
    { fecha: '2026-08-10', tipo: 'Salida',  medicamento: 'Paracetamol', lote: 'PAR-2024-002', cantidad: 20, persona: 'María González', receta: 'REC-2024-0451' },
    { fecha: '2026-08-10', tipo: 'Salida',  medicamento: 'Amoxicilina', lote: 'AMX-2024-010', cantidad: 15, persona: 'Carlos Ramírez', receta: 'REC-2024-0452' },
    { fecha: '2026-08-05', tipo: 'Salida',  medicamento: 'Naproxeno', lote: 'L0071-TAB', cantidad: 30, persona: 'Ana Martínez', receta: 'REC-2024-0453' },
    { fecha: '2026-08-05', tipo: 'Entrada', medicamento: 'Naproxeno', lote: 'L0072-TAB', cantidad: 200, persona: 'Farmaguate', receta: '—' },
    { fecha: '2026-08-01', tipo: 'Salida',  medicamento: 'Montelukast', lote: 'L0531-TAB', cantidad: 15, persona: 'Pedro López', receta: 'REC-2024-0454' },
    { fecha: '2026-07-28', tipo: 'Entrada', medicamento: 'Carvedilol', lote: 'L0332-TAB', cantidad: 150, persona: 'BioFarma', receta: '—' },
    { fecha: '2026-07-28', tipo: 'Salida',  medicamento: 'Ramipril', lote: 'L0291-TAB', cantidad: 45, persona: 'Lucía Fernández', receta: 'REC-2024-0455' },
    { fecha: '2026-07-20', tipo: 'Entrada', medicamento: 'Claritromicina', lote: 'L0162-TAB', cantidad: 400, persona: 'Distribuidora Farmacéutica S.A.', receta: '—' }
];

const MOVS_POR_PAGINA = 10;
let paginaActual = 1;
let movimientosFiltrados = [...movimientos];

document.addEventListener('DOMContentLoaded', () => {
    if (!document.getElementById('tablaMovimientos')) return;
    movimientosFiltrados.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
    document.getElementById('filtroTipo').addEventListener('change', aplicarFiltros);
    document.getElementById('filtroMedicamento').addEventListener('input', aplicarFiltros);
    document.getElementById('filtroDesde').addEventListener('change', aplicarFiltros);
    document.getElementById('filtroHasta').addEventListener('change', aplicarFiltros);
    renderTabla();
});

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

function renderTabla() {
    const tbody = document.getElementById('tablaMovimientos');
    tbody.innerHTML = '';

    if (movimientosFiltrados.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding:40px; color:#9ca3af;">No se encontraron movimientos.</td></tr>`;
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