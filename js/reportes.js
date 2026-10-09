// ============================================================
// REPORTES (vacío - solo navegación)
// ============================================================
const datosExistencias = [];
const datosMovimientos = [];
const datosVencimientos = [];

// ============================================================
// INICIALIZACIÓN
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('reportForm');
    if (!form) return;

    const hoy = new Date();
    const haceUnMes = new Date();
    haceUnMes.setDate(haceUnMes.getDate() - 30);

    document.getElementById('fechaHasta').value = hoy.toISOString().split('T')[0];
    document.getElementById('fechaDesde').value = haceUnMes.toISOString().split('T')[0];

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        generarReporte();
    });
});

function generarReporte() {
    const tipo = document.getElementById('tipoReporte').value;
    const formato = document.querySelector('input[name="formato"]:checked').value;

    let datos, titulo;
    switch (tipo) {
        case 'existencias': datos = datosExistencias; titulo = 'Reporte de Existencias'; break;
        case 'movimientos': datos = datosMovimientos; titulo = 'Reporte de Movimientos'; break;
        case 'vencimientos': datos = datosVencimientos; titulo = 'Reporte de Vencimientos'; break;
        case 'entradas': datos = datosMovimientos.filter(m => m.tipo === 'Entrada'); titulo = 'Reporte de Entradas'; break;
        case 'salidas': datos = datosMovimientos.filter(m => m.tipo === 'Salida'); titulo = 'Reporte de Salidas'; break;
        default: datos = datosExistencias; titulo = 'Reporte';
    }

    // Estado vacío
    if (datos.length === 0) {
        alert('⚠️ No hay datos para generar el reporte.\n\nEl sistema aún no tiene medicamentos ni movimientos registrados.');
        return;
    }

    if (formato === 'pdf') generarPDF(tipo, titulo, datos);
    else if (formato === 'excel') generarCSV(tipo, titulo, datos);
    else if (formato === 'imprimir') generarImpresion(tipo, titulo, datos);
}

// ============================================================
// GENERAR PDF
// ============================================================
function generarPDF(tipo, titulo, datos) {
    if (typeof window.jspdf === 'undefined') {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
        script.onload = () => generarPDF(tipo, titulo, datos);
        document.head.appendChild(script);
        return;
    }
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF('p', 'mm', 'a4');
    const pw = doc.internal.pageSize.width;

    doc.setFillColor(0, 51, 153);
    doc.rect(0, 0, pw, 25, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(14);
    doc.text('Farmacia Municipal', 15, 12);
    doc.setFontSize(9);
    doc.text('Municipalidad de San Juan Sacatepéquez', 15, 18);

    doc.setTextColor(0, 0, 0);
    doc.setFontSize(14);
    doc.text(titulo, 15, 40);
    doc.setFontSize(9);
    doc.text(`Generado: ${new Date().toLocaleString('es-GT')}`, 15, 47);
    doc.text(`Total: ${datos.length} registros`, 15, 52);

    let y = 65;
    datos.forEach((d) => {
        if (y > 270) { doc.addPage(); y = 20; }
        doc.setFontSize(9);
        const linea = Object.values(d).join(' | ');
        doc.text(linea, 15, y);
        y += 7;
    });
    doc.save(`reporte_${tipo}_${new Date().toISOString().split('T')[0]}.pdf`);
    mostrarToast(`✅ PDF generado`);
}

// ============================================================
// GENERAR CSV
// ============================================================
function generarCSV(tipo, titulo, datos) {
    let csv = `"${titulo}"\n"Generado: ${new Date().toLocaleString('es-GT')}"\n\n`;
    if (datos.length > 0) {
        csv += Object.keys(datos[0]).map(k => `"${k}"`).join(',') + '\n';
        datos.forEach(d => {
            csv += Object.values(d).map(v => `"${v}"`).join(',') + '\n';
        });
    }
    const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `reporte_${tipo}_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
    mostrarToast(`✅ Excel/CSV generado`);
}

// ============================================================
// GENERAR IMPRESIÓN
// ============================================================
function generarImpresion(tipo, titulo, datos) {
    const ventana = window.open('', '_blank');
    const encabezados = Object.keys(datos[0] || {}).map(k => `<th>${k}</th>`).join('');
    const filas = datos.map(d => `<tr>${Object.values(d).map(v => `<td>${v}</td>`).join('')}</tr>`).join('');
    ventana.document.write(`
        <!DOCTYPE html>
        <html><head><meta charset="UTF-8"><title>${titulo}</title>
        <style>
            body { font-family: 'Segoe UI', Arial, sans-serif; padding: 30px; }
            .header { text-align: center; border-bottom: 2px solid #003399; padding-bottom: 15px; margin-bottom: 25px; }
            .header h1 { color: #003399; font-size: 22px; margin: 5px 0; }
            .header h2 { color: #003399; font-size: 14px; font-weight: normal; margin: 0; }
            .titulo { font-size: 18px; font-weight: bold; margin-bottom: 15px; }
            table { width: 100%; border-collapse: collapse; font-size: 12px; }
            th { background: #2e86c1; color: white; padding: 10px; text-align: left; }
            td { padding: 8px 10px; border-bottom: 1px solid #eaeaea; }
            tr:nth-child(even) { background: #f8fafc; }
            .footer { margin-top: 30px; text-align: center; font-size: 11px; color: #999; }
        </style></head>
        <body>
            <div class="header">
                <h1>Farmacia Municipal</h1>
                <h2>Municipalidad de San Juan Sacatepéquez</h2>
            </div>
            <div class="titulo">${titulo}</div>
            <table><thead><tr>${encabezados}</tr></thead><tbody>${filas}</tbody></table>
            <div class="footer">Documento generado automáticamente</div>
            <script>window.onload = () => setTimeout(() => window.print(), 300);</script>
        </body></html>`);
    ventana.document.close();
    mostrarToast('🖨️ Preparando impresión...');
}

function mostrarToast(mensaje) {
    let toast = document.getElementById('toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'toast';
        toast.id = 'toast';
        toast.innerHTML = `<div class="toast-title">Reporte generado</div><div class="toast-message" id="toastMessage"></div>`;
        document.body.appendChild(toast);
    }
    document.getElementById('toastMessage').textContent = mensaje;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 4000);
}