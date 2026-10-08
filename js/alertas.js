// ============================================================
// ALERTAS DE VENCIMIENTO
// ============================================================
const lotes = [
    // === CRÍTICO (menos de 30 días) ===
    { medicamento: 'Naproxeno',       lote: 'L0071-TAB', vence: '2026-10-10', cantidad: 363, proveedor: 'Farmaguate' },
    { medicamento: 'Montelukast',     lote: 'L0531-TAB', vence: '2026-10-15', cantidad: 644, proveedor: 'BioFarma' },
    { medicamento: 'Carvedilol',      lote: 'L0331-TAB', vence: '2026-10-22', cantidad: 288, proveedor: 'Distribuidora Farmacéutica S.A.' },
    { medicamento: 'Ramipril',        lote: 'L0291-TAB', vence: '2026-10-29', cantidad: 644, proveedor: 'BioFarma' },
    { medicamento: 'Acetaminofén',    lote: 'L0203-JAR', vence: '2026-10-30', cantidad: 162, proveedor: 'Farmaguate' },
    { medicamento: 'Claritromicina',  lote: 'L0161-TAB', vence: '2026-11-06', cantidad: 705, proveedor: 'Farmaguate' },
    { medicamento: 'Morfina',         lote: 'L0041-TAB', vence: '2026-11-13', cantidad: 799, proveedor: 'Farmaguate' },
    { medicamento: 'Acetaminofén',    lote: 'L0201-SUS', vence: '2026-11-15', cantidad: 277, proveedor: 'Farmaguate' },
    { medicamento: 'Cloranfenicol',   lote: 'L0241-TAB', vence: '2026-11-19', cantidad: 347, proveedor: 'Distribuidora Farmacéutica S.A.' },
    { medicamento: 'Bromhexina',      lote: 'L0521-TAB', vence: '2026-11-26', cantidad: 583, proveedor: 'Farmaguate' },

    // === PRÓXIMO (30-60 días) ===
    { medicamento: 'Nifedipino',      lote: 'L0301-TAB', vence: '2026-12-02', cantidad: 689, proveedor: 'Distribuidora Farmacéutica S.A.' },
    { medicamento: 'Esomeprazol',     lote: 'L0421-TAB', vence: '2026-12-05', cantidad: 143, proveedor: 'Distribuidora Farmacéutica S.A.' },
    { medicamento: 'Acarbosa',        lote: 'L0083-JAR', vence: '2026-12-05', cantidad: 631, proveedor: 'Farmaguate' },
    { medicamento: 'Famotidina',      lote: 'L0440-SUS', vence: '2026-12-07', cantidad: 315, proveedor: 'MediSupply GT' },
    { medicamento: 'Lisinopril',      lote: 'L0287-CÁP', vence: '2026-12-08', cantidad: 700, proveedor: 'Farmaguate' },
    { medicamento: 'Bismuto',         lote: 'L0465-SUS', vence: '2026-12-09', cantidad: 388, proveedor: 'BioFarma' },
    { medicamento: 'Amlodipino',      lote: 'L0297-CAP', vence: '2026-12-11', cantidad: 664, proveedor: 'BioFarma' },
    { medicamento: 'Celecoxib',       lote: 'L0108-JAR', vence: '2026-12-13', cantidad: 383, proveedor: 'Medicamentos del Caribe' },
    { medicamento: 'Ketamina',        lote: 'L0047-CÁP', vence: '2026-12-13', cantidad: 458, proveedor: 'Farmaguate' },
    { medicamento: 'Naproxeno',       lote: 'L0072-SUS', vence: '2026-12-15', cantidad: 198, proveedor: 'Farmaguate' },
    { medicamento: 'Levofloxacino',   lote: 'L0146-TAB', vence: '2026-12-17', cantidad: 74,  proveedor: 'MediSupply GT' },
    { medicamento: 'Fluconazol',      lote: 'L0255-SUS', vence: '2026-12-18', cantidad: 445, proveedor: 'BioFarma' },
    { medicamento: 'Ondansetrón',     lote: 'L0453-JAR', vence: '2026-12-20', cantidad: 424, proveedor: 'BioFarma' },
    { medicamento: 'Cetirizina',      lote: 'L0501-TAB', vence: '2026-12-20', cantidad: 35,  proveedor: 'BioFarma' },
    { medicamento: 'Valsartán',       lote: 'L0270-SUS', vence: '2026-12-21', cantidad: 859, proveedor: 'Medicamentos del Caribe' },

    // === VIGENTE (más de 60 días) ===
    { medicamento: 'Acarbosa',        lote: 'L0081-INY', vence: '2027-01-20', cantidad: 87,  proveedor: 'BioFarma' },
    { medicamento: 'Acetaminofén',    lote: 'L0202-INY', vence: '2027-02-28', cantidad: 256, proveedor: 'Farmaguate' },
    { medicamento: 'Aciclovir',       lote: 'L0300-TAB', vence: '2027-03-10', cantidad: 237, proveedor: 'Farmaguate' },
    { medicamento: 'Tetraclicina',    lote: 'L0178-CAP', vence: '2027-04-15', cantidad: 267, proveedor: 'Distribuidora Farmacéutica S.A.' },
    { medicamento: 'Ciprofloxacino',  lote: 'L0661-INY', vence: '2027-04-18', cantidad: 125, proveedor: 'MediSupply GT' },
    { medicamento: 'Azitromicina',    lote: 'L0620-TAB', vence: '2027-04-25', cantidad: 385, proveedor: 'Farmaguate' },
    { medicamento: 'Amoxicilina',     lote: 'L0190-CAP', vence: '2027-07-05', cantidad: 450, proveedor: 'BioFarma' },
    { medicamento: 'Paracetamol',     lote: 'LPAR-2024-001', vence: '2027-06-05', cantidad: 920, proveedor: 'Distribuidora Farmacéutica S.A.' },
    { medicamento: 'Ibuprofeno',      lote: 'LIBU-2024-005', vence: '2027-06-18', cantidad: 780, proveedor: 'MediSupply GT' },
    { medicamento: 'Omeprazol',       lote: 'L0500-CAP', vence: '2027-07-10', cantidad: 520, proveedor: 'BioFarma' },
    { medicamento: 'Losartán',        lote: 'L0510-TAB', vence: '2027-08-15', cantidad: 415, proveedor: 'MediSupply GT' },
    { medicamento: 'Metformina',      lote: 'L0520-TAB', vence: '2027-09-20', cantidad: 680, proveedor: 'BioFarma' },
    { medicamento: 'Tetraclicina',    lote: 'L0180-SUS', vence: '2027-09-30', cantidad: 921, proveedor: 'BioFarma' },
    { medicamento: 'Salbutamol',      lote: 'L0830-INH', vence: '2027-08-20', cantidad: 280, proveedor: 'MediSupply GT' },
    { medicamento: 'Valsartán',       lote: 'L0271-TAB', vence: '2027-08-30', cantidad: 620, proveedor: 'Medicamentos del Caribe' }
];

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
                <thead><tr><th>Medicamento</th><th>Lote</th><th>Vencimiento</th><th>Días restantes</th><th>Cantidad</th><th>Proveedor</th></tr></thead>
                <tbody>
                    ${lista.map(l => `<tr><td>${l.medicamento}</td><td>${l.lote}</td><td>${formatearFecha(l.vence)}</td><td><strong>${l.diasRestantes}</strong></td><td>${l.cantidad}</td><td>${l.proveedor}</td></tr>`).join('')}
                </tbody>
            </table>`;
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