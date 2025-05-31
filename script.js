document.addEventListener('DOMContentLoaded', () => {
  // Configuración de administración
  const ADMIN_CREDENTIALS = {
    username: 'admin',
    password: 'luar2025'
  };

  // Datos iniciales
  let treatments = [
    // Masajes
    {
      id: 1,
      category: "masajes",
      name: "Masaje Relajante",
      description: "Ideal para liberar estrés y tensiones.",
      price: 40,
      image: "https://i.ibb.co/RGtQMS0B/3.jpg",
    },
    {
      id: 2,
      category: "masajes",
      name: "Masaje Descontracturante",
      description: "Alivia contracturas musculares.",
      price: 50,
      image: "https://i.ibb.co/0R3Ypzrg/4.jpg",
    },
    {
      id: 3,
      category: "masajes",
      name: "Masaje Deportivo",
      description: "Mejora el rendimiento físico.",
      price: 55,
      image: "https://i.ibb.co/V0D0v79r/5.jpg",
    },
    {
      id: 4,
      category: "masajes",
      name: "Masaje Podal",
      description: "Relajación a través de los pies.",
      price: 35,
      image: "https://i.ibb.co/7x4yT4YM/6.jpg",
    },
    {
      id: 5,
      category: "masajes",
      name: "Masaje Trapecio",
      description: "Alivia tensiones en hombros y cuello.",
      price: 45,
      image: "https://i.ibb.co/krtBTYG/7.jpg",
    },
    {
      id: 6,
      category: "masajes",
      name: "Masaje con Piedras Calientes",
      description: "Relajación profunda con piedras volcánicas.",
      price: 70,
      image: "https://i.ibb.co/0jzTNHtG/10.jpg",
    },

    // Terapias Corporales
    {
      id: 7,
      category: "corporales",
      name: "Terapia de Magnesio",
      description: "Alivia dolores y mejora la circulación.",
      price: 50,
      image: "https://i.ibb.co/hxBHWBMY/13.jpg",
    },
    {
      id: 8,
      category: "corporales",
      name: "Lipoescultura sin Cirugía",
      description: "Modela tu cuerpo con galvánica.",
      price: 50,
      image: "https://i.ibb.co/kskfsGwQ/14.jpg",
    },
    {
      id: 9,
      category: "corporales",
      name: "Glúteos Perfectos",
      description: "Levanta y tonifica con cintas kinesiológicas.",
      price: 60,
      image: "https://i.ibb.co/xKrfPvMN/15.jpg",
    },

    // Tratamientos Faciales
    {
      id: 10,
      category: "faciales",
      name: "Limpieza Facial Profunda",
      description: "Renueva tu piel completamente.",
      price: 35,
      image: "https://i.ibb.co/jvmdNnCm/17.jpg",
    },
    {
      id: 11,
      category: "faciales",
      name: "BB Glow",
      description: "Efecto piel de porcelana radiante.",
      price: 60,
      image: "https://i.ibb.co/YBtGLcdr/20.jpg",
    },
    {
      id: 12,
      category: "faciales",
      name: "Dermapen con Ácido Hialurónico",
      description: "Regenera e hidrata el rostro.",
      price: 70,
      image: "https://i.ibb.co/sJ9XbMNV/22.jpg",
    },

    // Rehabilitación
    {
      id: 13,
      category: "rehabilitacion",
      name: "Terapia para Embarazadas",
      description: "Alivio y bienestar para futuras mamás.",
      price: 60,
      image: "https://i.ibb.co/VWsDYyRs/27.jpg",
    },
    {
      id: 14,
      category: "rehabilitacion",
      name: "Acupuntura",
      description: "Equilibra el cuerpo y alivia dolores.",
      price: 45,
      image: "https://i.ibb.co/FbwJnFTg/29.jpg",
    },
    {
      id: 15,
      category: "rehabilitacion",
      name: "Terapia para Dolor de Espalda",
      description: "Alivia molestias crónicas y ciática.",
      price: 55,
      image: "https://i.ibb.co/gF6qSB9N/30.jpg",
    },

    // Terapias Energéticas
    {
      id: 16,
      category: "energeticas",
      name: "Registros Akáshicos",
      description: "Conexión espiritual y sanación.",
      price: 70,
      image: "https://i.ibb.co/nqmyWd3x/18.jpg",
    },
    {
      id: 17,
      category: "energeticas",
      name: "Constelación Familiar",
      description: "Sana dinámicas familiares profundas.",
      price: 80,
      image: "https://i.ibb.co/cSpTPC5s/19.jpg",
    },
    {
      id: 18,
      category: "energeticas",
      name: "Gemoterapia",
      description: "Equilibrio energético con cristales.",
      price: 50,
      image: "https://i.ibb.co/YBtGLcdr/20.jpg",
    },
  ];

  const initialTestimonials = [
    {
      id: "1",
      name: "Ana G.",
      message: "Luar transformó mi bienestar con sus terapias personalizadas. ¡Altamente recomendado!",
      rating: 5,
      date: "2024-01-15",
    },
    {
      id: "2",
      name: "María P.",
      message: "La limpieza facial profunda dejó mi piel increíble. Volveré pronto.",
      rating: 5,
      date: "2024-01-10",
    },
    {
      id: "3",
      name: "Carlos M.",
      message: "El reiki me ayudó a encontrar paz interior. Un lugar maravilloso.",
      rating: 5,
      date: "2024-01-05",
    },
    {
      id: "4",
      name: "Sofía R.",
      message: "La acupuntura alivió mi dolor crónico. ¡Gran equipo profesional!",
      rating: 5,
      date: "2024-01-01",
    },
  ];

  // Variables globales
  let testimonials = JSON.parse(localStorage.getItem('testimonials')) || initialTestimonials;
  let currentTestimonialIndex = 0;
  let currentCategory = 'masajes';
  let isLoggedIn = false;
  let testimonialRating = 5;
  let carouselInterval;

  // Cargar tratamientos desde localStorage
  const savedTreatments = localStorage.getItem('treatments');
  if (savedTreatments) {
    treatments = JSON.parse(savedTreatments);
  } else {
    localStorage.setItem('treatments', JSON.stringify(treatments));
  }

  // Elementos del DOM
  const elements = {
    preloader: document.getElementById('preloader'),
    header: document.getElementById('header'),
    menuToggle: document.querySelector('.menu-toggle'),
    navLinks: document.querySelector('.nav-links'),
    treatmentsGrid: document.querySelector('.treatments-grid'),
    filterButtons: document.querySelectorAll('.filter-btn'),
    testimonialsCarousel: document.querySelector('.testimonials-carousel'),
    carouselPrev: document.querySelector('.carousel-prev'),
    carouselNext: document.querySelector('.carousel-next'),
    carouselDots: document.querySelector('.carousel-dots'),
    contactForm: document.getElementById('contact-form'),
    testimonialForm: document.getElementById('testimonial-form'),
    showTestimonialForm: document.getElementById('show-testimonial-form'),
    testimonialFormContainer: document.getElementById('testimonial-form-container'),
    cancelTestimonial: document.getElementById('cancel-testimonial'),
    starRating: document.querySelector('.star-rating'),
    toastContainer: document.getElementById('toast-container'),
    
    // Admin elements
    adminLogin: document.getElementById('admin-login'),
    adminDashboard: document.getElementById('admin-dashboard'),
    loginForm: document.getElementById('login-form'),
    adminLogout: document.getElementById('admin-logout'),
    tabButtons: document.querySelectorAll('.tab-btn'),
    tabContents: document.querySelectorAll('.tab-content'),
    adminTestimonialsList: document.querySelector('.admin-testimonials-list'),
    adminTreatmentsList: document.querySelector('.admin-treatments-list'),
    addTreatmentBtn: document.getElementById('add-treatment-btn'),
    treatmentFormContainer: document.getElementById('treatment-form-container'),
    treatmentForm: document.getElementById('treatment-form'),
    cancelTreatment: document.getElementById('cancel-treatment'),
    
    // Modal
    confirmModal: document.getElementById('confirm-modal'),
    confirmMessage: document.getElementById('confirm-message'),
    confirmYes: document.getElementById('confirm-yes'),
    confirmNo: document.getElementById('confirm-no')
  };

  // Utilidades
  const utils = {
    // Mostrar toast notification
    showToast(title, message, type = 'success') {
      const toast = document.createElement('div');
      toast.className = `toast toast-${type}`;
      
      const icons = {
        success: '✓',
        error: '✗',
        warning: '⚠',
        info: 'ℹ'
      };
      
      toast.innerHTML = `
        <div class="toast-icon">${icons[type] || icons.success}</div>
        <div class="toast-content">
          <div class="toast-title">${title}</div>
          <div class="toast-message">${message}</div>
        </div>
        <button class="toast-close">×</button>
      `;
      
      elements.toastContainer.appendChild(toast);
      
      // Auto remove after 5 seconds
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 5000);
      
      // Close button
      toast.querySelector('.toast-close').addEventListener('click', () => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      });
    },

    // Mostrar modal de confirmación
    showConfirmModal(message, onConfirm) {
      elements.confirmMessage.textContent = message;
      elements.confirmModal.classList.remove('hidden');
      
      const handleConfirm = () => {
        elements.confirmModal.classList.add('hidden');
        onConfirm();
        elements.confirmYes.removeEventListener('click', handleConfirm);
        elements.confirmNo.removeEventListener('click', handleCancel);
      };
      
      const handleCancel = () => {
        elements.confirmModal.classList.add('hidden');
        elements.confirmYes.removeEventListener('click', handleConfirm);
        elements.confirmNo.removeEventListener('click', handleCancel);
      };
      
      elements.confirmYes.addEventListener('click', handleConfirm);
      elements.confirmNo.addEventListener('click', handleCancel);
    },

    // Generar enlace de WhatsApp
    generateWhatsAppLink(treatmentName) {
      return `https://wa.me/51961014245?text=Hola,%20quiero%20registrar%20una%20cita%20para%20${encodeURIComponent(treatmentName)}`;
    },

    // Formatear fecha
    formatDate(dateString) {
      return new Date(dateString).toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    },

    // Validar URL de imagen
    isValidImageUrl(url) {
      return /^https?:\/\/.+\.(jpg|jpeg|png|gif|webp)$/i.test(url);
    },

    // Generar ID único
    generateId() {
      return Date.now().toString() + Math.random().toString(36).substr(2, 9);
    }
  };

  // Inicialización
  function init() {
    setupEventListeners();
    renderTreatments(currentCategory);
    renderTestimonials();
    startCarousel();
    
    // Ocultar preloader
    window.addEventListener('load', () => {
      setTimeout(() => {
        elements.preloader.style.display = 'none';
      }, 500);
    });
  }

  // Event Listeners
  function setupEventListeners() {
    // Header scroll effect
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        elements.header.classList.add('scrolled');
      } else {
        elements.header.classList.remove('scrolled');
      }
    });

    // Mobile menu
    elements.menuToggle.addEventListener('click', () => {
      elements.navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking on links
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        elements.navLinks.classList.remove('active');
      });
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Treatment filters
    elements.filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        
        elements.filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        currentCategory = category;
        renderTreatments(category);
      });
    });

    // Carousel controls
    elements.carouselPrev.addEventListener('click', () => {
      previousTestimonial();
    });

    elements.carouselNext.addEventListener('click', () => {
      nextTestimonial();
    });

    // Contact form
    elements.contactForm.addEventListener('submit', handleContactForm);

    // Testimonial form
    elements.showTestimonialForm.addEventListener('click', () => {
      elements.testimonialFormContainer.classList.remove('hidden');
      elements.showTestimonialForm.style.display = 'none';
    });

    elements.cancelTestimonial.addEventListener('click', () => {
      elements.testimonialFormContainer.classList.add('hidden');
      elements.showTestimonialForm.style.display = 'block';
      elements.testimonialForm.reset();
      updateStarRating(5);
    });

    elements.testimonialForm.addEventListener('submit', handleTestimonialForm);

    // Star rating
    if (elements.starRating) {
      elements.starRating.addEventListener('click', handleStarRating);
    }

    // Admin login
    elements.loginForm.addEventListener('submit', handleAdminLogin);
    elements.adminLogout.addEventListener('click', handleAdminLogout);

    // Admin tabs
    elements.tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        const tabName = button.getAttribute('data-tab');
        switchTab(tabName);
      });
    });

    // Treatment management
    elements.addTreatmentBtn.addEventListener('click', () => {
      elements.treatmentFormContainer.classList.remove('hidden');
    });

    elements.cancelTreatment.addEventListener('click', () => {
      elements.treatmentFormContainer.classList.add('hidden');
      elements.treatmentForm.reset();
    });

    elements.treatmentForm.addEventListener('submit', handleAddTreatment);

    // Close modal when clicking outside
    elements.confirmModal.addEventListener('click', (e) => {
      if (e.target === elements.confirmModal) {
        elements.confirmModal.classList.add('hidden');
      }
    });
  }

  // Tratamientos
  function renderTreatments(category) {
    const filteredTreatments = treatments.filter(treatment => treatment.category === category);
    
    elements.treatmentsGrid.innerHTML = '';
    
    filteredTreatments.forEach(treatment => {
      const treatmentCard = document.createElement('div');
      treatmentCard.className = 'treatment-card';
      
      const deleteButton = isLoggedIn ? 
        `<button class="btn-delete" onclick="deleteTreatment('${treatment.id}')" title="Eliminar tratamiento">🗑️</button>` : '';
      
      treatmentCard.innerHTML = `
        <div class="treatment-image">
          <img src="${treatment.image}" alt="${treatment.name}" loading="lazy">
          <div class="treatment-price">$${treatment.price}.00</div>
        </div>
        <div class="treatment-content">
          <h3 class="treatment-title">${treatment.name}</h3>
          <p class="treatment-description">${treatment.description}</p>
          <div class="treatment-actions">
            <a href="${utils.generateWhatsAppLink(treatment.name)}" class="btn btn-primary" target="_blank" style="flex: 1;">Reservar Cita</a>
            ${deleteButton}
          </div>
        </div>
      `;
      
      elements.treatmentsGrid.appendChild(treatmentCard);
    });
  }

  // Testimonios
  function renderTestimonials() {
    elements.testimonialsCarousel.innerHTML = '';
    elements.carouselDots.innerHTML = '';
    
    testimonials.forEach((testimonial, index) => {
      // Slide
      const slide = document.createElement('div');
      slide.className = 'testimonial-slide';
      
      const stars = '★'.repeat(testimonial.rating) + '☆'.repeat(5 - testimonial.rating);
      
      slide.innerHTML = `
        <div class="testimonial-header">
          <div class="quote-icon">"</div>
          <div class="star-rating">
            ${stars.split('').map(star => `<span class="star">${star}</span>`).join('')}
          </div>
        </div>
        <p class="testimonial-text">${testimonial.message}</p>
        <div class="testimonial-footer">
          <p class="testimonial-author">— ${testimonial.name}</p>
          <span class="testimonial-date">${utils.formatDate(testimonial.date)}</span>
        </div>
      `;
      
      elements.testimonialsCarousel.appendChild(slide);
      
      // Dot
      const dot = document.createElement('div');
      dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
      dot.addEventListener('click', () => goToTestimonial(index));
      elements.carouselDots.appendChild(dot);
    });
    
    updateCarousel();
  }

  function updateCarousel() {
    const translateX = -currentTestimonialIndex * 100;
    elements.testimonialsCarousel.style.transform = `translateX(${translateX}%)`;
    
    // Update dots
    document.querySelectorAll('.carousel-dot').forEach((dot, index) => {
      dot.classList.toggle('active', index === currentTestimonialIndex);
    });
  }

  function nextTestimonial() {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
    updateCarousel();
  }

  function previousTestimonial() {
    currentTestimonialIndex = currentTestimonialIndex === 0 ? testimonials.length - 1 : currentTestimonialIndex - 1;
    updateCarousel();
  }

  function goToTestimonial(index) {
    currentTestimonialIndex = index;
    updateCarousel();
  }

  function startCarousel() {
    carouselInterval = setInterval(nextTestimonial, 5000);
    
    // Pause on hover
    elements.testimonialsCarousel.addEventListener('mouseenter', () => {
      clearInterval(carouselInterval);
    });
    
    elements.testimonialsCarousel.addEventListener('mouseleave', () => {
      carouselInterval = setInterval(nextTestimonial, 5000);
    });
  }

  // Formularios
  function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const name = formData.get('name') || document.getElementById('contact-name').value;
    const email = formData.get('email') || document.getElementById('contact-email').value;
    const message = formData.get('message') || document.getElementById('contact-message').value;

    if (!name || !email || !message) {
      utils.showToast('Error', 'Por favor completa todos los campos', 'error');
      return;
    }

    // Simular envío
    utils.showToast('¡Mensaje enviado!', 'Nos pondremos en contacto contigo pronto', 'success');
    e.target.reset();
  }

  function handleTestimonialForm(e) {
    e.preventDefault();
    
    const name = document.getElementById('testimonial-name').value;
    const message = document.getElementById('testimonial-message').value;

    if (!name.trim() || !message.trim()) {
      utils.showToast('Error', 'Por favor completa todos los campos', 'error');
      return;
    }

    const newTestimonial = {
      id: utils.generateId(),
      name: name.trim(),
      message: message.trim(),
      rating: testimonialRating,
      date: new Date().toISOString().split('T')[0]
    };

    testimonials.unshift(newTestimonial);
    localStorage.setItem('testimonials', JSON.stringify(testimonials));
    
    renderTestimonials();
    renderAdminTestimonials();
    
    elements.testimonialFormContainer.classList.add('hidden');
    elements.showTestimonialForm.style.display = 'block';
    elements.testimonialForm.reset();
    updateStarRating(5);
    
    utils.showToast('¡Testimonio agregado!', 'Gracias por compartir tu experiencia', 'success');
  }

  function handleStarRating(e) {
    if (e.target.classList.contains('star')) {
      testimonialRating = parseInt(e.target.getAttribute('data-rating'));
      updateStarRating(testimonialRating);
    }
  }

  function updateStarRating(rating) {
    const stars = elements.starRating.querySelectorAll('.star');
    stars.forEach((star, index) => {
      star.classList.toggle('active', index < rating);
    });
  }

  // Administración
  function handleAdminLogin(e) {
    e.preventDefault();
    
    const username = document.getElementById('admin-username').value;
    const password = document.getElementById('admin-password').value;

    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
      isLoggedIn = true;
      elements.adminLogin.classList.add('hidden');
      elements.adminDashboard.classList.remove('hidden');
      
      renderAdminTestimonials();
      renderAdminTreatments();
      renderTreatments(currentCategory); // Re-render to show delete buttons
      
      utils.showToast('¡Bienvenido!', 'Has iniciado sesión correctamente', 'success');
    } else {
      utils.showToast('Error', 'Usuario o contraseña incorrectos', 'error');
    }
  }

  function handleAdminLogout() {
    isLoggedIn = false;
    elements.adminLogin.classList.remove('hidden');
    elements.adminDashboard.classList.add('hidden');
    elements.loginForm.reset();
    
    renderTreatments(currentCategory); // Re-render to hide delete buttons
    
    utils.showToast('Sesión cerrada', 'Has cerrado sesión correctamente', 'info');
  }

  function switchTab(tabName) {
    elements.tabButtons.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-tab') === tabName);
    });
    
    elements.tabContents.forEach(content => {
      content.classList.toggle('active', content.id === `${tabName}-tab`);
    });
  }

  function renderAdminTestimonials() {
    elements.adminTestimonialsList.innerHTML = '';
    
    testimonials.forEach(testimonial => {
      const item = document.createElement('div');
      item.className = 'admin-item';
      
      const stars = '★'.repeat(testimonial.rating);
      
      item.innerHTML = `
        <div class="admin-item-content">
          <div class="admin-item-title">${testimonial.name}</div>
          <div class="admin-item-meta">
            ${stars} • ${utils.formatDate(testimonial.date)}
          </div>
          <p style="margin-top: 0.5rem; font-size: 0.875rem; color: var(--color-text-light);">
            "${testimonial.message}"
          </p>
        </div>
        <div class="admin-item-actions">
          <button class="btn btn-danger btn-sm" onclick="deleteTestimonial('${testimonial.id}')">
            Eliminar
          </button>
        </div>
      `;
      
      elements.adminTestimonialsList.appendChild(item);
    });
  }

  function renderAdminTreatments() {
    elements.adminTreatmentsList.innerHTML = '';
    
    treatments.forEach(treatment => {
      const item = document.createElement('div');
      item.className = 'admin-item';
      
      item.innerHTML = `
        <div class="admin-item-content">
          <div class="admin-item-title">${treatment.name}</div>
          <div class="admin-item-meta">
            ${treatment.category} • $${treatment.price}.00
          </div>
          <p style="margin-top: 0.5rem; font-size: 0.875rem; color: var(--color-text-light);">
            ${treatment.description}
          </p>
        </div>
        <div class="admin-item-actions">
          <button class="btn btn-danger btn-sm" onclick="deleteTreatment('${treatment.id}')">
            Eliminar
          </button>
        </div>
      `;
      
      elements.adminTreatmentsList.appendChild(item);
    });
  }

  function handleAddTreatment(e) {
    e.preventDefault();
    
    const name = document.getElementById('treatment-name').value.trim();
    const category = document.getElementById('treatment-category').value;
    const price = parseFloat(document.getElementById('treatment-price').value);
    const image = document.getElementById('treatment-image').value.trim();
    const description = document.getElementById('treatment-description').value.trim();

    if (!name || !category || !price || !image || !description) {
      utils.showToast('Error', 'Por favor completa todos los campos', 'error');
      return;
    }

    if (!utils.isValidImageUrl(image)) {
      utils.showToast('Error', 'Por favor ingresa una URL de imagen válida', 'error');
      return;
    }

    const newTreatment = {
      id: utils.generateId(),
      name,
      category,
      price,
      image,
      description
    };

    treatments.push(newTreatment);
    localStorage.setItem('treatments', JSON.stringify(treatments));
    
    renderAdminTreatments();
    if (currentCategory === category) {
      renderTreatments(category);
    }
    
    elements.treatmentFormContainer.classList.add('hidden');
    elements.treatmentForm.reset();
    
    utils.showToast('¡Tratamiento agregado!', 'El nuevo tratamiento ha sido agregado correctamente', 'success');
  }

  // Funciones globales para eliminar (llamadas desde HTML)
  window.deleteTestimonial = function(id) {
    utils.showConfirmModal('¿Estás seguro de que quieres eliminar este testimonio?', () => {
      testimonials = testimonials.filter(t => t.id !== id);
      localStorage.setItem('testimonials', JSON.stringify(testimonials));
      
      renderTestimonials();
      renderAdminTestimonials();
      
      // Ajustar índice del carrusel si es necesario
      if (currentTestimonialIndex >= testimonials.length) {
        currentTestimonialIndex = Math.max(0, testimonials.length - 1);
      }
      
      utils.showToast('Testimonio eliminado', 'El testimonio ha sido eliminado correctamente', 'success');
    });
  };

  window.deleteTreatment = function(id) {
    utils.showConfirmModal('¿Estás seguro de que quieres eliminar este tratamiento?', () => {
      treatments = treatments.filter(t => t.id != id);
      localStorage.setItem('treatments', JSON.stringify(treatments));
      
      renderTreatments(currentCategory);
      renderAdminTreatments();
      
      utils.showToast('Tratamiento eliminado', 'El tratamiento ha sido eliminado correctamente', 'success');
    });
  };

  // Inicializar aplicación
  init();
});