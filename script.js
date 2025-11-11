// Funcionalidad para el filtro de galería
document.addEventListener('DOMContentLoaded', function() {
    // Filtro de galería
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if(filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remover clase active de todos los botones
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Agregar clase active al botón clickeado
                this.classList.add('active');
                
                const filterValue = this.getAttribute('data-filter');
                
                // Filtrar elementos de la galería
                galleryItems.forEach(item => {
                    if(filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
    
    // Formulario de contacto
    const contactForm = document.getElementById('contact-form');
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validación básica
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if(name && email && message) {
                // Aquí normalmente enviarías el formulario a un servidor
                alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
                contactForm.reset();
            } else {
                alert('Por favor completa todos los campos obligatorios.');
            }
        });
    }
    
    // Formulario de cotización
    const quoteForm = document.querySelector('.quote');
    if(quoteForm) {
        quoteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('¡Hemos recibido tu solicitud! Te contactaremos para confirmar los detalles.');
            quoteForm.reset();
        });
    }
    
    // Botones de compra en productos
    const buyButtons = document.querySelectorAll('.product-card .button_1, .kit .button_1');
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Producto agregado al carrito. Próximamente implementaremos el proceso de pago.');
        });
    });
    
    // Botones de solicitud en precios
    const requestButtons = document.querySelectorAll('.pricing-card .button_1');
    requestButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('¡Servicio solicitado! Te contactaremos para coordinar la fecha y hora.');
        });
    });
    
    // Formulario de newsletter
    const newsletterForm = document.querySelector('#newsletter form');
    if(newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            if(email) {
                alert('¡Gracias por suscribirte! Recibirás nuestras ofertas en tu correo.');
                this.reset();
            }
        });
    }
    
    // Navegación suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Efecto de scroll en el header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if(window.scrollY > 100) {
            header.style.padding = '10px 0';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            header.style.padding = '30px 0 0';
            header.style.boxShadow = 'none';
        }
    });
});