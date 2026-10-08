// ============================================================
// MEDICAMENTOS DISPONIBLES
// ============================================================
const medicamentosDisponibles = [
    { id: 'MED-001', nombre: 'Acarbosa', presentacion: 'Suspensión', concentracion: '200mg/5ml' },
    { id: 'MED-002', nombre: 'Acarbosa', presentacion: 'Inyección', concentracion: '50mg/ml' },
    { id: 'MED-003', nombre: 'Acarbosa', presentacion: 'Jarabe', concentracion: '100mg/5ml' },
    { id: 'MED-004', nombre: 'Acarbosa', presentacion: 'Cápsula', concentracion: '250mg' },
    { id: 'MED-005', nombre: 'Acarbosa', presentacion: 'Tableta', concentracion: '500mg' },
    { id: 'MED-006', nombre: 'Acetaminofén', presentacion: 'Suspensión', concentracion: '200mg/5ml' },
    { id: 'MED-007', nombre: 'Acetaminofén', presentacion: 'Inyección', concentracion: '50mg/ml' },
    { id: 'MED-008', nombre: 'Acetaminofén', presentacion: 'Jarabe', concentracion: '100mg/5ml' },
    { id: 'MED-009', nombre: 'Acetaminofén', presentacion: 'Cápsula', concentracion: '250mg' },
    { id: 'MED-010', nombre: 'Acetaminofén', presentacion: 'Tableta', concentracion: '500mg' },
    { id: 'MED-011', nombre: 'Aciclovir', presentacion: 'Tableta', concentracion: '500mg' },
    { id: 'MED-012', nombre: 'Aciclovir', presentacion: 'Suspensión', concentracion: '200mg/5ml' },
    { id: 'MED-013', nombre: 'Ambroxol', presentacion: 'Jarabe', concentracion: '15mg/5ml' },
    { id: 'MED-014', nombre: 'Ambroxol', presentacion: 'Tableta', concentracion: '30mg' },
    { id: 'MED-015', nombre: 'Amlodipino', presentacion: 'Cápsula', concentracion: '5mg' },
    { id: 'MED-016', nombre: 'Amlodipino', presentacion: 'Tableta', concentracion: '10mg' },
    { id: 'MED-017', nombre: 'Amoxicilina', presentacion: 'Cápsula', concentracion: '500mg' },
    { id: 'MED-018', nombre: 'Amoxicilina', presentacion: 'Suspensión', concentracion: '250mg/5ml' },
    { id: 'MED-019', nombre: 'Amoxicilina', presentacion: 'Jarabe', concentracion: '125mg/5ml' },
    { id: 'MED-020', nombre: 'Aspirina', presentacion: 'Tableta', concentracion: '500mg' },
    { id: 'MED-021', nombre: 'Aspirina', presentacion: 'Tableta', concentracion: '100mg' },
    { id: 'MED-022', nombre: 'Atenolol', presentacion: 'Tableta', concentracion: '50mg' },
    { id: 'MED-023', nombre: 'Azitromicina', presentacion: 'Tableta', concentracion: '500mg' },
    { id: 'MED-024', nombre: 'Azitromicina', presentacion: 'Suspensión', concentracion: '200mg/5ml' },
    { id: 'MED-025', nombre: 'Bismuto', presentacion: 'Suspensión', concentracion: '200mg/5ml' },
    { id: 'MED-026', nombre: 'Bromhexina', presentacion: 'Jarabe', concentracion: '4mg/5ml' },
    { id: 'MED-027', nombre: 'Bromhexina', presentacion: 'Tableta', concentracion: '8mg' },
    { id: 'MED-028', nombre: 'Budesonida', presentacion: 'Inhalador', concentracion: '200mcg' },
    { id: 'MED-029', nombre: 'Captopril', presentacion: 'Tableta', concentracion: '25mg' },
    { id: 'MED-030', nombre: 'Carvedilol', presentacion: 'Tableta', concentracion: '12.5mg' },
    { id: 'MED-031', nombre: 'Cefalexina', presentacion: 'Cápsula', concentracion: '500mg' },
    { id: 'MED-032', nombre: 'Cefalexina', presentacion: 'Suspensión', concentracion: '250mg/5ml' },
    { id: 'MED-033', nombre: 'Celecoxib', presentacion: 'Jarabe', concentracion: '100mg/5ml' },
    { id: 'MED-034', nombre: 'Celecoxib', presentacion: 'Cápsula', concentracion: '200mg' },
    { id: 'MED-035', nombre: 'Cetirizina', presentacion: 'Tableta', concentracion: '10mg' },
    { id: 'MED-036', nombre: 'Cetirizina', presentacion: 'Jarabe', concentracion: '5mg/5ml' },
    { id: 'MED-037', nombre: 'Ciprofloxacino', presentacion: 'Tableta', concentracion: '500mg' },
    { id: 'MED-038', nombre: 'Ciprofloxacino', presentacion: 'Inyección', concentracion: '200mg/100ml' },
    { id: 'MED-039', nombre: 'Claritromicina', presentacion: 'Tableta', concentracion: '500mg' },
    { id: 'MED-040', nombre: 'Claritromicina', presentacion: 'Suspensión', concentracion: '250mg/5ml' },
    { id: 'MED-041', nombre: 'Cloranfenicol', presentacion: 'Tableta', concentracion: '500mg' },
    { id: 'MED-042', nombre: 'Cloranfenicol', presentacion: 'Cápsula', concentracion: '250mg' },
    { id: 'MED-043', nombre: 'Clonazepam', presentacion: 'Tableta', concentracion: '2mg' },
    { id: 'MED-044', nombre: 'Dexametasona', presentacion: 'Inyección', concentracion: '4mg/ml' },
    { id: 'MED-045', nombre: 'Dexametasona', presentacion: 'Tableta', concentracion: '4mg' },
    { id: 'MED-046', nombre: 'Diclofenaco', presentacion: 'Tableta', concentracion: '50mg' },
    { id: 'MED-047', nombre: 'Diclofenaco', presentacion: 'Gel', concentracion: '1%' },
    { id: 'MED-048', nombre: 'Diclofenaco', presentacion: 'Inyección', concentracion: '75mg/3ml' },
    { id: 'MED-049', nombre: 'Enalapril', presentacion: 'Tableta', concentracion: '10mg' },
    { id: 'MED-050', nombre: 'Esomeprazol', presentacion: 'Tableta', concentracion: '40mg' },
    { id: 'MED-051', nombre: 'Famotidina', presentacion: 'Suspensión', concentracion: '40mg/5ml' },
    { id: 'MED-052', nombre: 'Famotidina', presentacion: 'Tableta', concentracion: '20mg' },
    { id: 'MED-053', nombre: 'Fluconazol', presentacion: 'Suspensión', concentracion: '50mg/5ml' },
    { id: 'MED-054', nombre: 'Fluconazol', presentacion: 'Cápsula', concentracion: '150mg' },
    { id: 'MED-055', nombre: 'Furosemida', presentacion: 'Tableta', concentracion: '40mg' },
    { id: 'MED-056', nombre: 'Gentamicina', presentacion: 'Inyección', concentracion: '80mg/2ml' },
    { id: 'MED-057', nombre: 'Glibenclamida', presentacion: 'Tableta', concentracion: '5mg' },
    { id: 'MED-058', nombre: 'Hidroclorotiazida', presentacion: 'Tableta', concentracion: '25mg' },
    { id: 'MED-059', nombre: 'Ibuprofeno', presentacion: 'Tableta', concentracion: '400mg' },
    { id: 'MED-060', nombre: 'Ibuprofeno', presentacion: 'Suspensión', concentracion: '100mg/5ml' },
    { id: 'MED-061', nombre: 'Ibuprofeno', presentacion: 'Cápsula', concentracion: '600mg' },
    { id: 'MED-062', nombre: 'Ketamina', presentacion: 'Cápsula', concentracion: '50mg' },
    { id: 'MED-063', nombre: 'Ketorolaco', presentacion: 'Tableta', concentracion: '10mg' },
    { id: 'MED-064', nombre: 'Ketorolaco', presentacion: 'Inyección', concentracion: '30mg/ml' },
    { id: 'MED-065', nombre: 'Levofloxacino', presentacion: 'Tableta', concentracion: '500mg' },
    { id: 'MED-066', nombre: 'Lidocaína', presentacion: 'Inyección', concentracion: '2%' },
    { id: 'MED-067', nombre: 'Lisinopril', presentacion: 'Cápsula', concentracion: '10mg' },
    { id: 'MED-068', nombre: 'Lisinopril', presentacion: 'Tableta', concentracion: '20mg' },
    { id: 'MED-069', nombre: 'Loratadina', presentacion: 'Tableta', concentracion: '10mg' },
    { id: 'MED-070', nombre: 'Loratadina', presentacion: 'Jarabe', concentracion: '5mg/5ml' },
    { id: 'MED-071', nombre: 'Losartán', presentacion: 'Tableta', concentracion: '50mg' },
    { id: 'MED-072', nombre: 'Metformina', presentacion: 'Tableta', concentracion: '850mg' },
    { id: 'MED-073', nombre: 'Metformina', presentacion: 'Tableta', concentracion: '500mg' },
    { id: 'MED-074', nombre: 'Metronidazol', presentacion: 'Tableta', concentracion: '500mg' },
    { id: 'MED-075', nombre: 'Metronidazol', presentacion: 'Suspensión', concentracion: '250mg/5ml' },
    { id: 'MED-076', nombre: 'Montelukast', presentacion: 'Tableta', concentracion: '10mg' },
    { id: 'MED-077', nombre: 'Montelukast', presentacion: 'Tableta', concentracion: '5mg' },
    { id: 'MED-078', nombre: 'Morfina', presentacion: 'Inyección', concentracion: '10mg/ml' },
    { id: 'MED-079', nombre: 'Morfina', presentacion: 'Tableta', concentracion: '30mg' },
    { id: 'MED-080', nombre: 'Naproxeno', presentacion: 'Tableta', concentracion: '500mg' },
    { id: 'MED-081', nombre: 'Naproxeno', presentacion: 'Suspensión', concentracion: '125mg/5ml' },
    { id: 'MED-082', nombre: 'Nifedipino', presentacion: 'Tableta', concentracion: '10mg' },
    { id: 'MED-083', nombre: 'Nifedipino', presentacion: 'Cápsula', concentracion: '30mg' },
    { id: 'MED-084', nombre: 'Omeprazol', presentacion: 'Cápsula', concentracion: '20mg' },
    { id: 'MED-085', nombre: 'Omeprazol', presentacion: 'Cápsula', concentracion: '40mg' },
    { id: 'MED-086', nombre: 'Ondansetrón', presentacion: 'Jarabe', concentracion: '4mg/5ml' },
    { id: 'MED-087', nombre: 'Ondansetrón', presentacion: 'Tableta', concentracion: '8mg' },
    { id: 'MED-088', nombre: 'Paracetamol', presentacion: 'Tableta', concentracion: '500mg' },
    { id: 'MED-089', nombre: 'Paracetamol', presentacion: 'Suspensión', concentracion: '120mg/5ml' },
    { id: 'MED-090', nombre: 'Penicilina', presentacion: 'Inyección', concentracion: '1,000,000 UI' },
    { id: 'MED-091', nombre: 'Prednisona', presentacion: 'Tableta', concentracion: '20mg' },
    { id: 'MED-092', nombre: 'Ranitidina', presentacion: 'Tableta', concentracion: '150mg' },
    { id: 'MED-093', nombre: 'Salbutamol', presentacion: 'Inhalador', concentracion: '100mcg' },
    { id: 'MED-094', nombre: 'Salbutamol', presentacion: 'Jarabe', concentracion: '2mg/5ml' },
    { id: 'MED-095', nombre: 'Sulfametoxazol', presentacion: 'Tableta', concentracion: '800/160mg' },
    { id: 'MED-096', nombre: 'Tetraclicina', presentacion: 'Cápsula', concentracion: '250mg' },
    { id: 'MED-097', nombre: 'Tetraclicina', presentacion: 'Jarabe', concentracion: '100mg/5ml' },
    { id: 'MED-098', nombre: 'Tetraclicina', presentacion: 'Inyección', concentracion: '50mg/ml' },
    { id: 'MED-099', nombre: 'Tetraclicina', presentacion: 'Suspensión', concentracion: '200mg/5ml' },
    { id: 'MED-100', nombre: 'Tetraclicina', presentacion: 'Tableta', concentracion: '500mg' },
    { id: 'MED-101', nombre: 'Valsartán', presentacion: 'Suspensión', concentracion: '80mg/5ml' },
    { id: 'MED-102', nombre: 'Valsartán', presentacion: 'Tableta', concentracion: '160mg' },
    { id: 'MED-103', nombre: 'Warfarina', presentacion: 'Tableta', concentracion: '5mg' },
    { id: 'MED-104', nombre: 'Zolpidem', presentacion: 'Tableta', concentracion: '10mg' }
];

// ============================================================
// INICIALIZACIÓN
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('medicamento');
    const lista = document.getElementById('listaMedicamentos');
    const btnDesplegar = document.getElementById('btnDesplegar');
    if (!input || !lista) return;

    // Variables para el medicamento seleccionado
    let medicamentoSeleccionado = null;

    // ============================================================
    // RENDERIZAR LISTA DE OPCIONES
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

        if (filtrados.length === 0) {
            lista.innerHTML = `<div class="dropdown-item empty">No se encontraron medicamentos</div>`;
            return;
        }

        // Limitar a los primeros 50 resultados para rendimiento
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

    // ============================================================
    // MOSTRAR / OCULTAR LISTA
    // ============================================================
    function mostrarLista() {
        lista.classList.add('show');
    }
    function ocultarLista() {
        setTimeout(() => lista.classList.remove('show'), 200);
    }

    // ============================================================
    // EVENTOS
    // ============================================================
    
    // Al escribir → filtrar y mostrar
    input.addEventListener('focus', () => {
        renderizarLista(input.value);
        mostrarLista();
    });

    input.addEventListener('input', () => {
        medicamentoSeleccionado = null;
        renderizarLista(input.value);
        mostrarLista();
    });

    // Al perder el foco → ocultar (con delay para permitir click)
    input.addEventListener('blur', ocultarLista);

    // Al hacer clic en la flechita → mostrar todos
    btnDesplegar.addEventListener('click', (e) => {
        e.preventDefault();
        renderizarLista('');
        mostrarLista();
        input.focus();
    });

    // Ocultar al hacer clic fuera
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
        // Buscar el medicamento por texto exacto
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
        if (cantidad <= 0) {
            alert('La cantidad debe ser mayor a 0.');
            return;
        }
        if (!fechaVencimiento) {
            alert('Debe ingresar la fecha de vencimiento.');
            return;
        }

        const hoy = new Date();
        hoy.setHours(0, 0, 0, 0);
        if (new Date(fechaVencimiento) <= hoy) {
            alert('La fecha de vencimiento debe ser posterior a hoy.');
            return;
        }

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