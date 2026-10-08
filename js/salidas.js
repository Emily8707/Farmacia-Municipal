const catalogo = [
    { id: 'MED-001', nombre: 'Acarbosa', presentacion: 'Suspensión', concentracion: '200mg/5ml', precioUnidad: 5.59, precioCaja: 5.59, unidadesCaja: 1, imagen: '', lotes: [{ lote: 'L0071-TAB', vence: '2026-10-10', stock: 200 }, { lote: 'L0072-TAB', vence: '2027-03-15', stock: 168 }] },
    { id: 'MED-002', nombre: 'Acarbosa', presentacion: 'Inyección', concentracion: '50mg/ml', precioUnidad: 2.04, precioCaja: 2.04, unidadesCaja: 1, imagen: '', lotes: [{ lote: 'L0081-INY', vence: '2027-01-20', stock: 87 }] },
    { id: 'MED-003', nombre: 'Acarbosa', presentacion: 'Jarabe', concentracion: '100mg/5ml', precioUnidad: 5.91, precioCaja: 5.91, unidadesCaja: 1, imagen: '', lotes: [{ lote: 'L0083-JAR', vence: '2026-12-05', stock: 631 }] },
    { id: 'MED-004', nombre: 'Acarbosa', presentacion: 'Cápsula', concentracion: '250mg', precioUnidad: 3.74, precioCaja: 112.20, unidadesCaja: 30, imagen: '', lotes: [{ lote: 'L0091-CAP', vence: '2027-06-10', stock: 863 }] },
    { id: 'MED-005', nombre: 'Acarbosa', presentacion: 'Tableta', concentracion: '500mg', precioUnidad: 2.33, precioCaja: 69.90, unidadesCaja: 30, imagen: '', lotes: [{ lote: 'L0101-TAB', vence: '2027-08-22', stock: 296 }] },
    { id: 'MED-006', nombre: 'Acetaminofén', presentacion: 'Suspensión', concentracion: '200mg/5ml', precioUnidad: 5.17, precioCaja: 5.17, unidadesCaja: 1, imagen: '', lotes: [{ lote: 'L0201-SUS', vence: '2026-11-15', stock: 277 }] },
    { id: 'MED-007', nombre: 'Acetaminofén', presentacion: 'Inyección', concentracion: '50mg/ml', precioUnidad: 7.39, precioCaja: 7.39, unidadesCaja: 1, imagen: '', lotes: [{ lote: 'L0202-INY', vence: '2027-02-28', stock: 256 }] },
    { id: 'MED-008', nombre: 'Acetaminofén', presentacion: 'Jarabe', concentracion: '100mg/5ml', precioUnidad: 6.80, precioCaja: 6.80, unidadesCaja: 1, imagen: '', lotes: [{ lote: 'L0203-JAR', vence: '2026-10-30', stock: 162 }] },
    { id: 'MED-009', nombre: 'Acetaminofén', presentacion: 'Cápsula', concentracion: '250mg', precioUnidad: 6.80, precioCaja: 204.00, unidadesCaja: 30, imagen: '', lotes: [{ lote: 'L0204-CAP', vence: '2027-05-12', stock: 724 }] },
    { id: 'MED-010', nombre: 'Acetaminofén', presentacion: 'Tableta', concentracion: '500mg', precioUnidad: 4.50, precioCaja: 135.00, unidadesCaja: 30, imagen: '', lotes: [{ lote: 'L0205-TAB', vence: '2027-09-01', stock: 323 }] },
    { id: 'MED-011', nombre: 'Bismuto', presentacion: 'Suspensión', concentracion: '200mg/5ml', precioUnidad: 5.65, precioCaja: 5.65, unidadesCaja: 1, imagen: '', lotes: [{ lote: 'L0465-SUS', vence: '2027-12-09', stock: 388 }] }
];

let tipoVenta = 'unidad';
let medicamentoActual = null;
let loteActual = null;

document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('medicamento');
    if (!select) return;

    catalogo.forEach(med => {
        const stockTotal = med.lotes.reduce((s, l) => s + l.stock, 0);
        const option = document.createElement('option');
        option.value = med.id;
        option.textContent = `${med.nombre} — ${med.presentacion} ${med.concentracion} (Stock: ${stockTotal})`;
        select.appendChild(option);
    });

    select.addEventListener('change', () => {
        const id = select.value;
        medicamentoActual = catalogo.find(m => m.id === id) || null;
        loteActual = null;
        if (!medicamentoActual) {
            document.getElementById('medInfoBox').style.display = 'none';
            document.getElementById('stockBanner').style.display = 'none';
            document.getElementById('lote').disabled = true;
            document.getElementById('lote').innerHTML = '<option value="">Seleccione primero un medicamento</option>';
            actualizarTotales();
            return;
        }
        document.getElementById('medInfoBox').style.display = 'flex';
        document.getElementById('medNombre').textContent = `${medicamentoActual.nombre} — ${medicamentoActual.presentacion} ${medicamentoActual.concentracion}`;
        const stockTotal = medicamentoActual.lotes.reduce((s, l) => s + l.stock, 0);
        document.getElementById('medStock').textContent = stockTotal;
        document.getElementById('medPU').textContent = medicamentoActual.precioUnidad.toFixed(2);
        document.getElementById('medPC').textContent = medicamentoActual.precioCaja.toFixed(2);
        document.getElementById('medUC').textContent = medicamentoActual.unidadesCaja;
        const selectLote = document.getElementById('lote');
        selectLote.innerHTML = '';
        selectLote.disabled = false;
        medicamentoActual.lotes.forEach(l => {
            const opt = document.createElement('option');
            opt.value = l.lote;
            const fecha = new Date(l.vence).toLocaleDateString('es-GT');
            opt.textContent = `Lote ${l.lote} — Vence ${fecha} — Disp. ${l.stock}`;
            selectLote.appendChild(opt);
        });
        selectLote.dispatchEvent(new Event('change'));
    });

    document.getElementById('lote').addEventListener('change', (e) => {
        if (!medicamentoActual) return;
        loteActual = medicamentoActual.lotes.find(l => l.lote === e.target.value) || null;
        if (loteActual) {
            document.getElementById('stockBanner').style.display = 'block';
            document.getElementById('stockLote').textContent = loteActual.stock;
        } else {
            document.getElementById('stockBanner').style.display = 'none';
        }
        actualizarTotales();
    });

    document.getElementById('btnUnidad').addEventListener('click', () => setTipoVenta('unidad'));
    document.getElementById('btnCaja').addEventListener('click', () => setTipoVenta('caja'));
    document.getElementById('cantidad').addEventListener('input', actualizarTotales);
    document.getElementById('efectivo').addEventListener('input', actualizarTotales);

    document.getElementById('formVenta').addEventListener('submit', (e) => {
        e.preventDefault();
        procesarVenta();
    });
});

function setTipoVenta(tipo) {
    tipoVenta = tipo;
    document.getElementById('btnUnidad').classList.toggle('active', tipo === 'unidad');
    document.getElementById('btnCaja').classList.toggle('active', tipo === 'caja');
    document.getElementById('labelCantidad').textContent = tipo === 'unidad' ? 'Cantidad (unidades)' : 'Cantidad (cajas)';
    document.getElementById('labelPrecio').textContent = tipo === 'unidad' ? 'Precio unitario' : 'Precio por caja';
    actualizarTotales();
}

function actualizarTotales() {
    const cantidad = parseInt(document.getElementById('cantidad').value) || 0;
    const efectivo = parseFloat(document.getElementById('efectivo').value) || 0;
    let total = 0, detalle = '', precioMostrar = 0;

    if (medicamentoActual && loteActual && cantidad > 0) {
        if (tipoVenta === 'unidad') {
            precioMostrar = medicamentoActual.precioUnidad;
            total = precioMostrar * cantidad;
            detalle = `${cantidad} unidad(es)`;
        } else {
            precioMostrar = medicamentoActual.precioCaja;
            total = precioMostrar * cantidad;
            const unidadesDesc = cantidad * medicamentoActual.unidadesCaja;
            detalle = `${cantidad} caja(s) × ${medicamentoActual.unidadesCaja} und. = ${unidadesDesc} unidades descontadas`;
        }
    }
    document.getElementById('precio').value = `Q ${precioMostrar.toFixed(2)}`;
    const maxCantidad = loteActual ? (tipoVenta === 'unidad' ? loteActual.stock : Math.floor(loteActual.stock / medicamentoActual.unidadesCaja)) : 0;
    document.getElementById('hintCantidad').textContent = `Máx: ${maxCantidad} ${tipoVenta === 'unidad' ? 'unidades' : 'cajas'}`;
    document.getElementById('totalDetalle').textContent = detalle || '0 unidad(es)';
    document.getElementById('totalMonto').textContent = `Q ${total.toFixed(2)}`;
    const vuelto = efectivo - total;
    document.getElementById('vuelto').value = `Q ${(vuelto >= 0 ? vuelto : 0).toFixed(2)}`;
}

function procesarVenta() {
    const cantidad = parseInt(document.getElementById('cantidad').value) || 0;
    const efectivo = parseFloat(document.getElementById('efectivo').value) || 0;
    const paciente = document.getElementById('paciente').value.trim();
    const receta = document.getElementById('receta').value.trim();

    if (!medicamentoActual) { alert('Seleccione un medicamento.'); return; }
    if (!loteActual) { alert('Seleccione un lote.'); return; }
    if (cantidad <= 0) { alert('La cantidad debe ser mayor a 0.'); return; }
    if (!paciente) { alert('Ingrese el nombre del paciente.'); return; }
    if (!receta) { alert('Ingrese el número de receta.'); return; }

    const precioUnit = tipoVenta === 'unidad' ? medicamentoActual.precioUnidad : medicamentoActual.precioCaja;
    const total = precioUnit * cantidad;
    if (efectivo < total) { alert('El efectivo recibido es menor al total a pagar.'); return; }

    const ahora = new Date();
    const factNum = `FAC-${ahora.getFullYear()}${String(ahora.getMonth()+1).padStart(2,'0')}${String(ahora.getDate()).padStart(2,'0')}-${String(Math.floor(Math.random()*999999)).padStart(6,'0')}`;
    const fechaStr = ahora.toLocaleDateString('es-GT');
    const vuelto = efectivo - total;

    document.getElementById('factNum').textContent = factNum;
    document.getElementById('factNum2').textContent = factNum;
    document.getElementById('factFecha').textContent = fechaStr;
    document.getElementById('factFecha2').textContent = fechaStr;
    document.getElementById('factPaciente').textContent = paciente;
    document.getElementById('factReceta').textContent = receta;
    document.getElementById('factDescripcion').textContent = `${medicamentoActual.nombre} ${medicamentoActual.presentacion} ${medicamentoActual.concentracion}`;
    document.getElementById('factCantidad').textContent = `${cantidad} ${tipoVenta === 'unidad' ? 'unidad(es)' : 'caja(s)'}`;
    document.getElementById('factPrecio').textContent = `Q ${precioUnit.toFixed(2)}`;
    document.getElementById('factTotal').textContent = `Q ${total.toFixed(2)}`;
    document.getElementById('factTotalFinal').textContent = `Q ${total.toFixed(2)}`;
    document.getElementById('factRecibido').textContent = `Q ${efectivo.toFixed(2)}`;
    document.getElementById('factVuelto').textContent = `Q ${vuelto.toFixed(2)}`;

    mostrarToast(`Factura ${factNum} generada. Total: Q ${total.toFixed(2)}`);
    setTimeout(() => window.print(), 500);
    setTimeout(() => {
        document.getElementById('formVenta').reset();
        document.getElementById('medInfoBox').style.display = 'none';
        document.getElementById('stockBanner').style.display = 'none';
        document.getElementById('lote').disabled = true;
        medicamentoActual = null;
        loteActual = null;
        setTipoVenta('unidad');
        actualizarTotales();
    }, 1500);
}

function mostrarToast(mensaje) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    document.getElementById('toastMessage').textContent = mensaje;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 4000);
}