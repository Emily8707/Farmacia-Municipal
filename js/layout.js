document.addEventListener('DOMContentLoaded', () => {
    // Obtener el correo que escribió el usuario en el login
    // Si no hay nada, usar el correo de administrador por defecto
    const usuario = localStorage.getItem('usuarioLogueado') || 'admin@farmacia.gob.gt';

    const path = window.location.pathname;
    const page = path.split("/").pop().replace('.html', '') || 'dashboard';

    // Íconos SVG del sidebar (Lucide)
    const iconos = {
        dashboard: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
            <rect width="7" height="7" x="3" y="3" rx="1"/>
            <rect width="7" height="7" x="14" y="3" rx="1"/>
            <rect width="7" height="7" x="14" y="14" rx="1"/>
            <rect width="7" height="7" x="3" y="14" rx="1"/>
        </svg>`,

        medicamentos: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
            <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/>
            <path d="m8.5 8.5 7 7"/>
        </svg>`,

        entradas: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
            <path d="M16 16h6"/>
            <path d="M19 13v6"/>
            <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"/>
            <path d="m7.5 4.27 9 5.15"/>
            <polyline points="3.29 7 12 12 20.71 7"/>
            <line x1="12" y1="22" x2="12" y2="12"/>
        </svg>`,

        salidas: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
            <path d="M16 16h6"/>
            <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"/>
            <path d="m7.5 4.27 9 5.15"/>
            <polyline points="3.29 7 12 12 20.71 7"/>
            <line x1="12" y1="22" x2="12" y2="12"/>
        </svg>`,

        existencias: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.3-4.3"/>
        </svg>`,

        alertas: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
            <path d="M12 9v4"/>
            <path d="M12 17h.01"/>
        </svg>`,

        movimientos: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
            <path d="M8 3 4 7l4 4"/>
            <path d="M4 7h16"/>
            <path d="m16 21 4-4-4-4"/>
            <path d="M20 17H4"/>
        </svg>`,

        reportes: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
            <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
            <path d="M16 13H8"/>
            <path d="M16 17H8"/>
            <path d="M10 9H8"/>
        </svg>`
    };

    const modulos = [
        { id: 'dashboard',    nombre: 'Dashboard',    icono: 'dashboard' },
        { id: 'medicamentos', nombre: 'Medicamentos', icono: 'medicamentos' },
        { id: 'entradas',     nombre: 'Entradas',     icono: 'entradas' },
        { id: 'salidas',      nombre: 'Salidas',      icono: 'salidas' },
        { id: 'existencias',  nombre: 'Existencias',  icono: 'existencias' },
        { id: 'alertas',      nombre: 'Alertas',      icono: 'alertas' },
        { id: 'movimientos',  nombre: 'Movimientos',  icono: 'movimientos' },
        { id: 'reportes',     nombre: 'Reportes',     icono: 'reportes' }
    ];

    let menuHTML = `
        <div class="sidebar-header">
            <img src="img/escudo.png" alt="Escudo Municipal">
            <div>
                <h3>Farmacia Municipal</h3>
                <p>San Juan Sacatepéquez</p>
            </div>
        </div>
        <nav class="menu">
    `;

    modulos.forEach(mod => {
        const activeClass = (mod.id === page) ? 'active' : '';
        menuHTML += `
            <a href="${mod.id}.html" class="menu-item ${activeClass}">
                ${iconos[mod.icono]} ${mod.nombre}
            </a>
        `;
    });

    // Extraer nombre y correo del usuario logueado
    const inicial = usuario.charAt(0).toUpperCase();
    const nombreUsuario = usuario.split('@')[0];

    menuHTML += `
        </nav>
        <div class="user-section">
            <div class="user-info">
                <div class="avatar">${inicial}</div>
                <div>
                    <p class="user-name">${nombreUsuario}</p>
                    <p class="user-email">${usuario}</p>
                </div>
            </div>
            <a href="login.html" class="logout-btn" onclick="cerrarSesion()">
                <i class="fa-solid fa-arrow-right-from-bracket"></i> Cerrar sesión
            </a>
        </div>
    `;

    const sidebarContainer = document.getElementById('sidebar-container');
    if (sidebarContainer) {
        sidebarContainer.innerHTML = menuHTML;
    }
});

// ============================================================
// CERRAR SESIÓN
// ============================================================
function cerrarSesion() {
    localStorage.removeItem('usuarioLogueado');
}