// ============================================================
// ALERTAS DE VENCIMIENTO (vacío - solo navegación)
// ============================================================
const lotes = [];
const HOY = new Date();

// ============================================================
// INICIALIZACIÓN
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    clasificarYRenderizar();
});

function clasificarYRenderizar() {
    const criticos = [], proximos = [], vigentes = [];

    lotes.forEach(lote => {
        const dias = calcularDiasRestantes(lote.vence);
        lote.diasRestantes = dias;
        if (dias <= 30) criticos.push(lote);
        else if (dias <= 60) proximos.push(lote);
        else vigentes.push(lote);
    });

    criticos.sort((a, b) => a.diasRestantes - b.diasRestantes);
    proximos.sort((a, b) => a.diasRestantes - b.diasRestantes);
    vigentes.sort((a, b) => a.diasRestantes - b.diasRestantes);

    const contenedor = document.getElementById('contenedorAlertas');
    if (!contenedor) return;
    contenedor.innerHTML = '';

    // Estado vacío general
    if (lotes.length === 0) {
        contenedor.innerHTML = `
            <div style="text-align:center; padding:80px 20px; background:#ffffff; border-radius:12px; box-shadow:0 2px 15px rgba(0,0,0,0.03);">
                <div style="font-size:56px; margin-bottom:20px; opacity:0.4; color:#9ca3af;">
                    <i class="fa-solid fa-circle-check"></i>
                </div>
                <div style="font-size:18px; font-weight:700; color:#1f2937; margin-bottom:10px;">
                    No hay alertas de vencimiento
                </div>
                <div style="font-size:14px; color:#6c757d;">
                    Todos los medicamentos están vigentes por ahora.
                </div>
            </div>
        `;
        return;
    }

    contenedor.appendChild(crearSeccion('critico', 'fa-circle-exclamation', 'Crítico — vence en menos de 30 días', criticos));
    contenedor.appendChild(crearSeccion('proximo', 'fa-clock', 'Próximo — vence entre 30 y 60 días', proximos));
    contenedor.appendChild(crearSeccion('vigente', 'fa-circle-check', 'Vigente — vence en más de 60 días', vigentes));
}

function crearSeccion(tipo, icono, titulo, lista) {
    const seccion = document.createElement('div');
    seccion.className = `alerta-seccion alerta-${tipo}`;

    let tablaHTML = '';
    if (lista.length === 0) {
        tablaHTML = `<div style="text-align:center; padding:30px; color:#9ca3af; font-size:13px;">No hay medicamentos en esta categoría.</div>`;
    } else {
        tablaHTML = `
            <table class="alerta-tabla">
                <thead>
                    <tr>
                        <th>Medicamento</th>
                        <th>Lote</th>
                        <th>Vencimiento</th>
                        <th>Días restantes</th>
                        <th>Cantidad</th>
                        <th>Proveedor</th>
                    </tr>
                </thead>
                <tbody>
                    ${lista.map(l => `<tr><td>${l.medicamento}</td><td>${l.lote}</td><td>${formatearFecha(l.vence)}</td><td><strong>${l.diasRestantes}</strong></td><td>${l.cantidad}</td><td>${l.proveedor}</td></tr>`).join('')}
                </tbody>
            </table>
        `;
    }

    seccion.innerHTML = `
        <div class="alerta-header">
            <div class="alerta-titulo"><i class="fa-solid ${icono}"></i><span>${titulo}</span></div>
            <div class="alerta-contador">${lista.length}</div>
        </div>
        ${tablaHTML}`;
    return seccion;
}

function calcularDiasRestantes(fechaStr) {
    const fecha = new Date(fechaStr);
    const hoySinHora = new Date(HOY.getFullYear(), HOY.getMonth(), HOY.getDate());
    return Math.ceil((fecha - hoySinHora) / (1000 * 60 * 60 * 24));
}

function formatearFecha(fechaStr) {
    const fecha = new Date(fechaStr);
    return `${String(fecha.getDate()).padStart(2, '0')}/${String(fecha.getMonth() + 1).padStart(2, '0')}/${fecha.getFullYear()}`;
}

// ============================================================
// EXPORTAR ALERTAS
// ============================================================
function exportarAlertas() {
    if (lotes.length === 0) {
        alert('No hay alertas para exportar.');
        return;
    }
    let csv = 'Categoría,Medicamento,Lote,Vencimiento,Días restantes,Cantidad,Proveedor\n';
    lotes.forEach(l => {
        let cat = 'Vigente';
        if (l.diasRestantes <= 30) cat = 'Crítico';
        else if (l.diasRestantes <= 60) cat = 'Próximo';
        csv += `"${cat}","${l.medicamento}","${l.lote}","${formatearFecha(l.vence)}",${l.diasRestantes},${l.cantidad},"${l.proveedor}"\n`;
    });
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `alertas_vencimiento_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
}