// ============================================================
// MEDICAMENTOS DISPONIBLES (vacío - solo navegación)
// ============================================================
const medicamentosDisponibles = [];

// ============================================================
// INICIALIZACIÓN
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('medicamento');
    const lista = document.getElementById('listaMedicamentos');
    const btnDesplegar = document.getElementById('btnDesplegar');
    if (!input || !lista) return;

    let medicamentoSeleccionado = null;

    // ============================================================
    // RENDERIZAR LISTA
    // ============================================================
    function renderizarLista(filtro = '') {
        lista.innerHTML = '';
        const texto = filtro.toLowerCase().trim();

        const filtrados = medicamentosDisponibles.filter(m => {
            if (!texto) return true;
            return m.nombre.toLowerCase().includes(texto) ||
                   m.presentacion.toLowerCase().includes(texto) ||
                   m.concentracion.toLowerCase().includes(texto);
        });

        // Estado vacío
        if (filtrados.length === 0) {
            lista.innerHTML = `
                <div class="dropdown-item empty">
                    <div style="font-size:32px; opacity:0.4; margin-bottom:8px;">
                        <i class="fa-solid fa-pills"></i>
                    </div>
                    <div style="font-weight:600; color:#6c757d; margin-bottom:5px;">Aún no hay medicamentos</div>
                    <div style="font-size:12px;">Registre medicamentos primero en el módulo <strong>Medicamentos</strong>.</div>
                </div>
            `;
            return;
        }

        filtrados.slice(0, 50).forEach(m => {
            const item = document.createElement('div');
            item.className = 'dropdown-item';
            item.innerHTML = `
                <div class="dropdown-item-title">${m.nombre} <span class="dropdown-item-presentacion">${m.presentacion}</span></div>
                <div class="dropdown-item-concentracion">${m.concentracion}</div>
            `;
            item.addEventListener('click', () => {
                input.value = `${m.nombre} — ${m.presentacion} ${m.concentracion}`;
                medicamentoSeleccionado = m;
                lista.classList.remove('show');
            });
            lista.appendChild(item);
        });
    }

    function mostrarLista() {
        lista.classList.add('show');
    }
    function ocultarLista() {
        setTimeout(() => lista.classList.remove('show'), 200);
    }

    input.addEventListener('focus', () => { renderizarLista(input.value); mostrarLista(); });
    input.addEventListener('input', () => { medicamentoSeleccionado = null; renderizarLista(input.value); mostrarLista(); });
    input.addEventListener('blur', ocultarLista);

    btnDesplegar.addEventListener('click', (e) => {
        e.preventDefault();
        renderizarLista('');
        mostrarLista();
        input.focus();
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.input-dropdown')) {
            lista.classList.remove('show');
        }
    });

    // ============================================================
    // ENVÍO DEL FORMULARIO
    // ============================================================
    const form = document.getElementById('formEntrada');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const textoEscrito = input.value.trim();
        const med = medicamentoSeleccionado || medicamentosDisponibles.find(m =>
            `${m.nombre} — ${m.presentacion} ${m.concentracion}` === textoEscrito
        );

        const cantidad = parseInt(document.getElementById('cantidad').value);
        const fechaVencimiento = document.getElementById('fechaVencimiento').value;

        if (!med) {
            alert('⚠️ Por favor seleccione un medicamento de la lista.');
            input.focus();
            return;
        }
        if (cantidad <= 0) { alert('La cantidad debe ser mayor a 0.'); return; }
        if (!fechaVencimiento) { alert('Debe ingresar la fecha de vencimiento.'); return; }

        mostrarToast(`Se registraron ${cantidad} unidades de ${med.nombre}`);
        form.reset();
        document.getElementById('cantidad').value = 0;
        medicamentoSeleccionado = null;
        input.focus();
    });
});

// ============================================================
// TOAST
// ============================================================
function mostrarToast(mensaje) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    document.getElementById('toastMessage').textContent = mensaje;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 4000);
}