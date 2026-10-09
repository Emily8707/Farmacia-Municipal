// ============================================================
// DATOS DE EXISTENCIAS (vacío - solo navegación 5.3)
// ============================================================
const catalogo = [];

let medicamentoSeleccionado = null;

// ============================================================
// INICIALIZACIÓN
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    const buscador = document.getElementById('buscador');
    if (!buscador) return;
    renderLista();
    buscador.addEventListener('input', (e) => renderLista(e.target.value));
});

// ============================================================
// RENDERIZAR LISTA
// ============================================================
function renderLista(filtro = '') {
    const contenedor = document.getElementById('listaMedicamentos');
    contenedor.innerHTML = '';

    const texto = filtro.toLowerCase().trim();
    const filtrados = catalogo.filter(m =>
        m.nombre.toLowerCase().includes(texto) ||
        m.presentacion.toLowerCase().includes(texto) ||
        m.concentracion.toLowerCase().includes(texto) ||
        m.categoria.toLowerCase().includes(texto)
    );

    // ============================================================
    // ESTADO VACÍO EN EL PANEL IZQUIERDO
    // ============================================================
    if (filtrados.length === 0) {
        contenedor.innerHTML = `
            <div style="text-align:center; padding:50px 20px; color:#9ca3af;">
                <div style="font-size:44px; margin-bottom:15px; opacity:0.4;">
                    <i class="fa-solid fa-box-open"></i>
                </div>
                <div style="font-size:15px; font-weight:600; color:#6c757d; margin-bottom:8px;">
                    Aún no hay existencias
                </div>
                <div style="font-size:12.5px; line-height:1.5;">
                    Los medicamentos registrados aparecerán aquí con el detalle de sus lotes.
                </div>
            </div>
        `;

        // Estado vacío del panel derecho
        const emptyState = document.getElementById('emptyState');
        const detalleContent = document.getElementById('detalleContent');
        if (emptyState) {
            emptyState.style.display = 'flex';
            emptyState.innerHTML = `
                <i class="fa-solid fa-hand-pointer"></i>
                <p>Selecciona un medicamento para ver el detalle de sus lotes</p>
            `;
        }
        if (detalleContent) detalleContent.style.display = 'none';
        return;
    }

    // ============================================================
    // RENDERIZAR MEDICAMENTOS
    // ============================================================
    filtrados.forEach(m => {
        const stockTotal = m.lotes.reduce((s, l) => s + l.stock, 0);
        let estado = 'disponible', textoEstado = 'Disponible';
        if (stockTotal === 0) { estado = 'agotado'; textoEstado = 'Agotado'; }
        else if (stockTotal <= m.stockMin) { estado = 'stock-bajo'; textoEstado = 'Stock bajo'; }

        const activo = medicamentoSeleccionado && medicamentoSeleccionado.id === m.id ? 'active' : '';
        const card = document.createElement('div');
        card.className = `item-medicamento ${activo}`;
        card.innerHTML = `
            <img src="${m.imagen || 'img/escudo.png'}" alt="${m.presentacion}" onerror="this.src='img/escudo.png'">
            <div class="item-info">
                <div class="item-nombre">${m.nombre}</div>
                <div class="item-presentacion">${m.presentacion} · ${m.concentracion}</div>
                <div class="item-estado-row">
                    <span class="badge-status ${estado}">${textoEstado}</span>
                    <span class="item-stock">${stockTotal} unidades</span>
                </div>
            </div>
        `;
        card.addEventListener('click', () => seleccionarMedicamento(m.id));
        contenedor.appendChild(card);
    });
}

// ============================================================
// SELECCIONAR MEDICAMENTO (panel derecho)
// ============================================================
function seleccionarMedicamento(id) {
    medicamentoSeleccionado = catalogo.find(m => m.id === id);
    if (!medicamentoSeleccionado) return;

    renderLista(document.getElementById('buscador').value);
    document.getElementById('emptyState').style.display = 'none';
    document.getElementById('detalleContent').style.display = 'block';

    const m = medicamentoSeleccionado;
    const stockTotal = m.lotes.reduce((s, l) => s + l.stock, 0);

    document.getElementById('detalleImg').src = m.imagen || 'img/escudo.png';
    document.getElementById('detalleImg').onerror = function() { this.src = 'img/escudo.png'; };
    document.getElementById('detalleNombre').textContent = m.nombre;
    document.getElementById('detalleCategoria').textContent = m.categoria;
    document.getElementById('detallePresentacion').textContent = m.presentacion;
    document.getElementById('detalleConcentracion').textContent = m.concentracion;
    document.getElementById('detalleStockTotal').textContent = stockTotal;

    const estadoBadge = document.getElementById('detalleEstado');
    if (stockTotal === 0) { estadoBadge.className = 'badge-status agotado'; estadoBadge.textContent = 'Agotado'; }
    else if (stockTotal <= m.stockMin) { estadoBadge.className = 'badge-status stock-bajo'; estadoBadge.textContent = 'Stock bajo'; }
    else { estadoBadge.className = 'badge-status disponible'; estadoBadge.textContent = 'Disponible'; }

    // ============================================================
    // TABLA DE LOTES
    // ============================================================
    const tbody = document.getElementById('tablaLotes');
    tbody.innerHTML = '';

    // Estado vacío si no hay lotes
    if (!m.lotes || m.lotes.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="5" style="text-align:center; padding:30px; color:#9ca3af;">
                    <div style="font-size:32px; margin-bottom:10px; opacity:0.4;">
                        <i class="fa-solid fa-box"></i>
                    </div>
                    <div style="font-size:13px; font-weight:600; color:#6c757d;">
                        No hay lotes disponibles para este medicamento
                    </div>
                </td>
            </tr>
        `;
        return;
    }

    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    m.lotes.forEach(lote => {
        const fechaVence = new Date(lote.vence);
        const diasRestantes = Math.ceil((fechaVence - hoy) / (1000 * 60 * 60 * 24));
        const fechaStr = fechaVence.toLocaleDateString('es-GT');
        let badgeClase = 'vigente', badgeTexto = 'Vigente';
        if (diasRestantes < 0) { badgeClase = 'vencido'; badgeTexto = 'Vencido'; }
        else if (diasRestantes <= 90) { badgeClase = 'por-vencer'; badgeTexto = 'Por vencer'; }

        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${lote.lote}</td><td>${fechaStr}</td><td>${diasRestantes}</td><td>${lote.stock}</td><td><span class="badge-status ${badgeClase}">${badgeTexto}</span></td>`;
        tbody.appendChild(tr);
    });
}