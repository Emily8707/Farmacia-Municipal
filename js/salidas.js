// ============================================================
// CATÁLOGO PARA VENTAS (vacío - solo navegación)
// ============================================================
const catalogo = [];

let tipoVenta = 'unidad';
let medicamentoActual = null;
let loteActual = null;

// ============================================================
// INICIALIZACIÓN
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('medicamento');
    if (!select) return;

    // Estado vacío en el select
    select.innerHTML = '<option value="">Aún no hay medicamentos registrados</option>';

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
    if (!medicamentoActual) {
        alert('⚠️ Aún no hay medicamentos registrados. Vaya al módulo de Medicamentos para agregar el primero.');
        return;
    }
    // ... resto del código sin cambios
}