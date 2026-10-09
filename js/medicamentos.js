// ============================================================
// DATOS DE MEDICAMENTOS (vacío - solo navegación)
// ============================================================
let medicamentos = [];

// ============================================================
// RENDERIZAR TABLA
// ============================================================
function renderTabla(filtro = '') {
    const tbody = document.getElementById('tablaMedicamentos');
    if (!tbody) return;
    tbody.innerHTML = '';

    const texto = filtro.toLowerCase().trim();
    const listaFiltrada = medicamentos.filter(m =>
        m.nombre.toLowerCase().includes(texto) ||
        m.presentacion.toLowerCase().includes(texto) ||
        m.concentracion.toLowerCase().includes(texto) ||
        m.categoria.toLowerCase().includes(texto)
    );

    // Estado vacío
    if (listaFiltrada.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="9" style="text-align:center; padding:60px 20px; color:#9ca3af;">
                    <div style="font-size:48px; margin-bottom:15px; opacity:0.4;">
                        <i class="fa-solid fa-pills"></i>
                    </div>
                    <div style="font-size:16px; font-weight:600; color:#6c757d; margin-bottom:8px;">
                        Aún no hay medicamentos registrados
                    </div>
                    <div style="font-size:13px;">
                        Haga clic en <strong>"+ Nuevo medicamento"</strong> para agregar el primero.
                    </div>
                </td>
            </tr>
        `;
        return;
    }

    listaFiltrada.forEach(m => {
        let estadoClase = 'disponible';
        let estadoTexto = 'Disponible';
        if (m.stock === 0) { estadoClase = 'agotado'; estadoTexto = 'Agotado'; }
        else if (m.stock <= m.stockMin) { estadoClase = 'stock-bajo'; estadoTexto = 'Stock bajo'; }

        const precioCajaTexto = m.unidadesCaja > 1
            ? `Caja: <strong>Q ${m.precioCaja.toFixed(2)}</strong>`
            : `Caja: <strong>Q ${m.precioCaja.toFixed(2)}</strong>`;

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="id-cell">${m.id}</td>
            <td>
                <div class="name-cell">
                    <img src="${m.imagen || 'img/escudo.png'}" alt="${m.nombre}" onerror="this.src='img/escudo.png'">
                    <span>${m.nombre}</span>
                </div>
            </td>
            <td>${m.presentacion}</td>
            <td>${m.concentracion}</td>
            <td>${m.categoria}</td>
            <td>${m.stock}</td>
            <td class="precios-cell">Unid: <strong>Q ${m.precioUnidad.toFixed(2)}</strong><br>${precioCajaTexto}</td>
            <td><span class="badge-status ${estadoClase}">${estadoTexto}</span></td>
            <td>
                <div class="action-buttons">
                    <button class="btn-edit" title="Editar" onclick="editarMedicamento('${m.id}')"><i class="fa-solid fa-pen"></i></button>
                    <button class="btn-delete" title="Eliminar" onclick="eliminarMedicamento('${m.id}')"><i class="fa-regular fa-trash-can"></i></button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// ============================================================
// MODAL
// ============================================================
function abrirModal() {
    document.getElementById('modalOverlay').classList.add('active');
    document.getElementById('nombre').focus();
}

function cerrarModal() {
    document.getElementById('modalOverlay').classList.remove('active');
    document.getElementById('formMedicamento').reset();
}

// ============================================================
// INICIALIZACIÓN
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    renderTabla();
    const buscador = document.getElementById('buscador');
    if (buscador) buscador.addEventListener('input', (e) => renderTabla(e.target.value));

    const form = document.getElementById('formMedicamento');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const nuevo = {
                id: String(medicamentos.length + 1).padStart(3, '0'),
                nombre: document.getElementById('nombre').value,
                presentacion: document.getElementById('presentacion').value,
                concentracion: document.getElementById('concentracion').value,
                categoria: document.getElementById('categoria').value || 'Analgésico',
                stock: parseInt(document.getElementById('stock').value) || 0,
                stockMin: parseInt(document.getElementById('stockMin').value) || 50,
                precioUnidad: parseFloat(document.getElementById('precioUnidad').value) || 0,
                precioCaja: parseFloat(document.getElementById('precioCaja').value) || 0,
                unidadesCaja: parseInt(document.getElementById('unidadesCaja').value) || 1,
                imagen: document.getElementById('imagen').value
            };
            medicamentos.push(nuevo);
            renderTabla();
            cerrarModal();
            alert(`✅ Medicamento "${nuevo.nombre}" agregado correctamente.`);
        });
    }

    const overlay = document.getElementById('modalOverlay');
    if (overlay) overlay.addEventListener('click', (e) => { if (e.target === overlay) cerrarModal(); });
});

// ============================================================
// EDITAR / ELIMINAR
// ============================================================
function editarMedicamento(id) {
    const med = medicamentos.find(m => m.id === id);
    if (med) alert(`✏️ Editar: ${med.nombre}\n(Simulación - prototipo)`);
}

function eliminarMedicamento(id) {
    const med = medicamentos.find(m => m.id === id);
    if (med && confirm(`¿Eliminar "${med.nombre}" (${med.presentacion} ${med.concentracion})?`)) {
        medicamentos = medicamentos.filter(m => m.id !== id);
        renderTabla();
        alert('✅ Medicamento eliminado.');
    }
}