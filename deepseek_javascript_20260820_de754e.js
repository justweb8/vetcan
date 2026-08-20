// ===== MENÚ HAMBURGUESA =====
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navList = document.querySelector('.nav-list');

    if (menuToggle && navList) {
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            navList.classList.toggle('open');
        });

        // Cerrar menú al hacer clic en un enlace
        navList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('open');
            });
        });

        // Cerrar menú al hacer clic fuera
        document.addEventListener('click', function(e) {
            if (!navList.contains(e.target) && !menuToggle.contains(e.target)) {
                navList.classList.remove('open');
            }
        });
    }

    // ===== VALIDACIÓN DEL FORMULARIO =====
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Validación simple
            const nombre = this.querySelector('input[name="nombre_dueno"]');
            const telefono = this.querySelector('input[name="telefono"]');
            const correo = this.querySelector('input[name="correo"]');
            const servicio = this.querySelector('select[name="servicio_interes"]');

            let isValid = true;

            // Resetear estilos de error
            this.querySelectorAll('input, select, textarea').forEach(el => {
                el.style.borderColor = '#ddd';
            });

            if (!nombre.value.trim()) {
                nombre.style.borderColor = '#e74c3c';
                isValid = false;
            }

            if (!telefono.value.trim()) {
                telefono.style.borderColor = '#e74c3c';
                isValid = false;
            }

            if (!correo.value.trim() || !correo.value.includes('@')) {
                correo.style.borderColor = '#e74c3c';
                isValid = false;
            }

            if (!servicio.value) {
                servicio.style.borderColor = '#e74c3c';
                isValid = false;
            }

            if (isValid) {
                alert('✅ Mensaje enviado correctamente. Nos pondremos en contacto pronto.');
                this.reset();
            } else {
                alert('⚠️ Por favor, completa todos los campos obligatorios correctamente.');
            }
        });
    }

    // ===== SCROLL SUAVE PARA ENLACES INTERNOS (si los hubiera) =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});