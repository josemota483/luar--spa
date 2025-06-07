document.addEventListener('DOMContentLoaded', () => {
  // Configuración de administración
  const ADMIN_CREDENTIALS = {
    username: 'admin',
    password: 'luar2025'
  };

  // Configuración de horarios por defecto
  const DEFAULT_SCHEDULE = {
    monday: { enabled: true, start: '08:00', end: '18:00' },
    tuesday: { enabled: true, start: '08:00', end: '18:00' },
    wednesday: { enabled: true, start: '08:00', end: '18:00' },
    thursday: { enabled: true, start: '08:00', end: '18:00' },
    friday: { enabled: true, start: '08:00', end: '18:00' },
    saturday: { enabled: true, start: '09:00', end: '15:00' },
    sunday: { enabled: true, start: '10:00', end: '14:00' }
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
      duration: 60,
      image: "https://i.ibb.co/RGtQMS0B/3.jpg",
    },
    {
      id: 2,
      category: "masajes",
      name: "Masaje Descontracturante",
      description: "Alivia contracturas musculares.",
      price: 50,
      duration: 75,
      image: "https://i.ibb.co/0R3Ypzrg/4.jpg",
    },
    {
      id: 3,
      category: "masajes",
      name: "Masaje Deportivo",
      description: "Mejora el rendimiento físico.",
      price: 55,
      duration: 60,
      image: "https://i.ibb.co/V0D0v79r/5.jpg",
    },
    {
      id: 4,
      category: "masajes",
      name: "Masaje Podal",
      description: "Relajación a través de los pies.",
      price: 35,
      duration: 45,
      image: "https://i.ibb.co/7x4yT4YM/6.jpg",
    },
    {
      id: 5,
      category: "masajes",
      name: "Masaje Trapecio",
      description: "Alivia tensiones en hombros y cuello.",
      price: 45,
      duration: 30,
      image: "https://i.ibb.co/krtBTYG/7.jpg",
    },
    {
      id: 6,
      category: "masajes",
      name: "Masaje con Piedras Calientes",
      description: "Relajación profunda con piedras volcánicas.",
      price: 70,
      duration: 90,
      image: "https://i.ibb.co/0jzTNHtG/10.jpg",
    },

    // Terapias Corporales
    {
      id: 7,
      category: "corporales",
      name: "Terapia de Magnesio",
      description: "Alivia dolores y mejora la circulación.",
      price: 50,
      duration: 60,
      image: "https://i.ibb.co/hxBHWBMY/13.jpg",
    },
    {
      id: 8,
      category: "corporales",
      name: "Lipoescultura sin Cirugía",
      description: "Modela tu cuerpo con galvánica.",
      price: 50,
      duration: 90,
      image: "https://i.ibb.co/kskfsGwQ/14.jpg",
    },
    {
      id: 9,
      category: "corporales",
      name: "Glúteos Perfectos",
      description: "Levanta y tonifica con cintas kinesiológicas.",
      price: 60,
      duration: 75,
      image: "https://i.ibb.co/xKrfPvMN/15.jpg",
    },

    // Tratamientos Faciales
    {
      id: 10,
      category: "faciales",
      name: "Limpieza Facial Profunda",
      description: "Renueva tu piel completamente.",
      price: 35,
      duration: 60,
      image: "https://i.ibb.co/jvmdNnCm/17.jpg",
    },
    {
      id: 11,
      category: "faciales",
      name: "BB Glow",
      description: "Efecto piel de porcelana radiante.",
      price: 60,
      duration: 90,
      image: "https://i.ibb.co/YBtGLcdr/20.jpg",
    },
    {
      id: 12,
      category: "faciales",
      name: "Dermapen con Ácido Hialurónico",
      description: "Regenera e hidrata el rostro.",
      price: 70,
      duration: 75,
      image: "https://i.ibb.co/sJ9XbMNV/22.jpg",
    },

    // Rehabilitación
    {
      id: 13,
      category: "rehabilitacion",
      name: "Terapia para Embarazadas",
      description: "Alivio y bienestar para futuras mamás.",
      price: 60,
      duration: 60,
      image: "https://i.ibb.co/VWsDYyRs/27.jpg",
    },
    {
      id: 14,
      category: "rehabilitacion",
      name: "Acupuntura",
      description: "Equilibra el cuerpo y alivia dolores.",
      price: 45,
      duration: 45,
      image: "https://i.ibb.co/FbwJnFTg/29.jpg",
    },
    {
      id: 15,
      category: "rehabilitacion",
      name: "Terapia para Dolor de Espalda",
      description: "Alivia molestias crónicas y ciática.",
      price: 55,
      duration: 60,
      image: "https://i.ibb.co/gF6qSB9N/30.jpg",
    },

    // Terapias Energéticas
    {
      id: 16,
      category: "energeticas",
      name: "Registros Akáshicos",
      description: "Conexión espiritual y sanación.",
      price: 70,
      duration: 90,
      image: "https://i.ibb.co/nqmyWd3x/18.jpg",
    },
    {
      id: 17,
      category: "energeticas",
      name: "Constelación Familiar",
      description: "Sana dinámicas familiares profundas.",
      price: 80,
      duration: 120,
      image: "https://i.ibb.co/cSpTPC5s/19.jpg",
    },
    {
      id: 18,
      category: "energeticas",
      name: "Gemoterapia",
      description: "Equilibrio energético con cristales.",
      price: 50,
      duration: 60,
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

  // Configuración de fondos predeterminados
  const DEFAULT_BACKGROUNDS = {
    hero: 'https://i.ibb.co/Jwc1WKFn/image.jpg',
    about: 'https://i.ibb.co/qFDfFxgB/33.jpg',
    vision: 'https://i.ibb.co/Csh2s292/34.jpg',
    events: 'https://i.ibb.co/7xSDvt0D/23.jpg',
    contact: 'https://i.ibb.co/9H48qDHR/24.jpg'
  };

  // Datos iniciales de la galería
  const initialGalleryItems = [
    {
      id: "g1",
      title: "Masaje Relajante",
      description: "Ideal para liberar estrés y tensiones",
      category: "masajes",
      imageUrl: "https://i.ibb.co/RGtQMS0B/3.jpg"
    },
    {
      id: "g2",
      title: "Masaje Descontracturante",
      description: "Alivia contracturas musculares",
      category: "masajes",
      imageUrl: "https://i.ibb.co/0R3Ypzrg/4.jpg"
    },
    {
      id: "g3",
      title: "Masaje Deportivo",
      description: "Mejora el rendimiento físico",
      category: "masajes",
      imageUrl: "https://i.ibb.co/V0D0v79r/5.jpg"
    },
    {
      id: "g4",
      title: "Limpieza Facial",
      description: "Renueva tu piel completamente",
      category: "faciales",
      imageUrl: "https://i.ibb.co/jvmdNnCm/17.jpg"
    },
    {
      id: "g5",
      title: "BB Glow",
      description: "Efecto piel de porcelana radiante",
      category: "faciales",
      imageUrl: "https://i.ibb.co/YBtGLcdr/20.jpg"
    },
    {
      id: "g6",
      title: "Terapia de Magnesio",
      description: "Alivia dolores y mejora la circulación",
      category: "corporales",
      imageUrl: "https://i.ibb.co/hxBHWBMY/13.jpg"
    },
    {
      id: "g7",
      title: "Lipoescultura sin Cirugía",
      description: "Modela tu cuerpo con galvánica",
      category: "corporales",
      imageUrl: "https://i.ibb.co/kskfsGwQ/14.jpg"
    },
    {
      id: "g8",
      title: "Recepción",
      description: "Ambiente acogedor y relajante",
      category: "instalaciones",
      imageUrl: "https://i.ibb.co/Jwc1WKFn/image.jpg"
    },
    {
      id: "g9",
      title: "Sala de Masajes",
      description: "Espacio diseñado para tu confort",
      category: "instalaciones",
      imageUrl: "https://i.ibb.co/qFDfFxgB/33.jpg"
    }
  ];

  // Variables globales
  let testimonials = JSON.parse(localStorage.getItem('testimonials')) || initialTestimonials;
  let reservations = JSON.parse(localStorage.getItem('reservations')) || [];
  let galleryItems = JSON.parse(localStorage.getItem('galleryItems')) || initialGalleryItems;
  let backgrounds = JSON.parse(localStorage.getItem('backgrounds')) || DEFAULT_BACKGROUNDS;
  // Forzar el uso de la configuración por defecto para solucionar el problema de horarios
  let schedule = DEFAULT_SCHEDULE;
  let currentTestimonialIndex = 0;
  let currentCategory = 'masajes';
  let isLoggedIn = false;
  let testimonialRating = 5;
  let carouselInterval;

  // Variables del sistema de reservas
  let currentReservationStep = 1;
  let selectedTreatment = null;
  let selectedDate = null;
  let selectedTime = null;
  let currentCalendarDate = new Date();
  let reservationData = {};

  // Cargar tratamientos desde caché o localStorage
  const cachedTreatments = CacheSystem.get('treatments');
  if (cachedTreatments) {
    treatments = cachedTreatments;
    console.log('Tratamientos cargados desde caché');
  } else {
    const savedTreatments = localStorage.getItem('treatments');
    if (savedTreatments) {
      treatments = JSON.parse(savedTreatments);
      // Guardar en caché para acceso más rápido (30 días)
      CacheSystem.set('treatments', treatments, 43200);
    } else {
      localStorage.setItem('treatments', JSON.stringify(treatments));
      CacheSystem.set('treatments', treatments, 43200);
    }
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
    
    // Elementos de reservas
    reservationSteps: document.querySelectorAll('.reservation-step'),
    treatmentCategories: document.querySelectorAll('.category-btn'),
    treatmentsSelectionGrid: document.querySelector('.treatments-selection-grid'),
    nextToCalendar: document.getElementById('next-to-calendar'),
    backToTreatment: document.getElementById('back-to-treatment'),
    nextToDetails: document.getElementById('next-to-details'),
    backToCalendar: document.getElementById('back-to-calendar'),
    confirmReservation: document.getElementById('confirm-reservation'),
    newReservation: document.getElementById('new-reservation'),
    
    // Calendario
    calendarMonthYear: document.getElementById('calendar-month-year'),
    prevMonth: document.getElementById('prev-month'),
    nextMonth: document.getElementById('next-month'),
    calendarDays: document.getElementById('calendar-days'),
    selectedDateDisplay: document.getElementById('selected-date-display'),
    timeSlots: document.getElementById('time-slots'),
    
    // Resumen y confirmación
    summaryTreatment: document.getElementById('summary-treatment'),
    summaryDate: document.getElementById('summary-date'),
    summaryTime: document.getElementById('summary-time'),
    summaryPrice: document.getElementById('summary-price'),
    confirmationSummary: document.getElementById('confirmation-summary'),
    whatsappConfirmation: document.getElementById('whatsapp-confirmation'),
    
    // Formulario de cliente
    reservationForm: document.getElementById('reservation-form'),
    clientName: document.getElementById('client-name'),
    clientPhone: document.getElementById('client-phone'),
    clientEmail: document.getElementById('client-email'),
    clientAge: document.getElementById('client-age'),
    clientNotes: document.getElementById('client-notes'),
    termsAccepted: document.getElementById('terms-accepted'),
    whatsappNotifications: document.getElementById('whatsapp-notifications'),
    
    // Admin elements
    adminLogin: document.getElementById('admin-login'),
    adminDashboard: document.getElementById('admin-dashboard'),
    loginForm: document.getElementById('login-form'),
    adminLogout: document.getElementById('admin-logout'),
    tabButtons: document.querySelectorAll('.tab-btn'),
    tabContents: document.querySelectorAll('.tab-content'),
    adminReservationsList: document.querySelector('.admin-reservations-list'),
    adminTestimonialsList: document.querySelector('.admin-testimonials-list'),
    adminTreatmentsList: document.querySelector('.admin-treatments-list'),
    adminGalleryList: document.querySelector('.admin-gallery-list'),
    addTreatmentBtn: document.getElementById('add-treatment-btn'),
    treatmentFormContainer: document.getElementById('treatment-form-container'),
    treatmentForm: document.getElementById('treatment-form'),
    cancelTreatment: document.getElementById('cancel-treatment'),
    addGalleryItemBtn: document.getElementById('add-gallery-item-btn'),
    galleryFormContainer: document.getElementById('gallery-form-container'),
    galleryForm: document.getElementById('gallery-form'),
    cancelGalleryItem: document.getElementById('cancel-gallery-item'),
    
    // Backgrounds elements
    heroBgUrl: document.getElementById('hero-bg-url'),
    aboutBgUrl: document.getElementById('about-bg-url'),
    visionBgUrl: document.getElementById('vision-bg-url'),
    eventsBgUrl: document.getElementById('events-bg-url'),
    contactBgUrl: document.getElementById('contact-bg-url'),
    heroBgPreview: document.getElementById('hero-bg-preview'),
    aboutBgPreview: document.getElementById('about-bg-preview'),
    visionBgPreview: document.getElementById('vision-bg-preview'),
    eventsBgPreview: document.getElementById('events-bg-preview'),
    contactBgPreview: document.getElementById('contact-bg-preview'),
    previewBgButtons: document.querySelectorAll('.preview-bg'),
    saveBgButtons: document.querySelectorAll('.save-bg'),
    resetBackgrounds: document.getElementById('reset-backgrounds'),
    
    // Filtros de reservas
    reservationFilterDate: document.getElementById('reservation-filter-date'),
    reservationFilterStatus: document.getElementById('reservation-filter-status'),
    
    // Configuración de horarios
    saveSchedule: document.getElementById('save-schedule'),
    resetSchedule: document.getElementById('reset-schedule'),
    
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
    
    // Guardar imagen localmente con compresión
    saveLocalImage(file, callback) {
      // Verificar que el archivo sea una imagen
      if (!file.type.match('image.*')) {
        this.showToast('Error', 'Por favor selecciona un archivo de imagen válido', 'error');
        return;
      }
      
      // Verificar tamaño del archivo (máximo 2MB)
      if (file.size > 2 * 1024 * 1024) {
        this.showToast('Error', 'La imagen es demasiado grande. El tamaño máximo es 2MB', 'error');
        return;
      }
      
      const self = this;
      
      // Comprimir la imagen usando canvas
      const img = new Image();
      const reader = new FileReader();
      
      reader.onload = function(e) {
        img.onload = function() {
          // Crear canvas para comprimir la imagen
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          
          // Calcular dimensiones reducidas (máximo 800px)
          const maxWidth = 800;
          const maxHeight = 800;
          let width = img.width;
          let height = img.height;
          
          if (width > height) {
            if (width > maxWidth) {
              height = Math.round(height * maxWidth / width);
              width = maxWidth;
            }
          } else {
            if (height > maxHeight) {
              width = Math.round(width * maxHeight / height);
              height = maxHeight;
            }
          }
          
          // Establecer dimensiones del canvas
          canvas.width = width;
          canvas.height = height;
          
          // Dibujar imagen en el canvas con las nuevas dimensiones
          ctx.drawImage(img, 0, 0, width, height);
          
          // Convertir a data URL con calidad reducida
          const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.6);
          
          // Llamar al callback con la imagen comprimida
          callback(compressedDataUrl);
          self.showToast('Imagen guardada', 'La imagen se ha guardado correctamente', 'success');
        };
        
        img.onerror = function() {
          self.showToast('Error', 'No se pudo procesar la imagen', 'error');
        };
        
        img.src = e.target.result;
      };
      
      reader.onerror = function() {
        self.showToast('Error', 'No se pudo leer el archivo de imagen', 'error');
      };
      
      reader.readAsDataURL(file);
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

    // Generar enlace de WhatsApp para reserva
    generateReservationWhatsAppLink(reservation) {
      const message = `Hola! Reserva para ${reservation.treatmentName} - ${utils.formatDate(reservation.date)} - ${reservation.time}`;
      return `https://wa.me/51961014245?text=${encodeURIComponent(message)}`;
    },

    // Formatear fecha
    formatDate(dateString) {
      return new Date(dateString).toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    },

    // Formatear fecha corta
    formatDateShort(dateString) {
      return new Date(dateString).toLocaleDateString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });
    },

    // Validar URL de imagen
    isValidImageUrl(url) {
      return /^https?:\/\/.+\.(jpg|jpeg|png|gif|webp)$/i.test(url);
    },

    // Generar ID único
    generateId() {
      return Date.now().toString() + Math.random().toString(36).substr(2, 9);
    },

    // Obtener nombre del día de la semana
    getDayName(dayIndex) {
      const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
      return days[dayIndex];
    },

    // Verificar si una fecha está disponible
    isDateAvailable(date) {
      const dayName = utils.getDayName(date.getDay());
      const daySchedule = schedule[dayName];
      
      // Forzar que todos los días estén habilitados
      if (!daySchedule) {
        return false;
      }
      
      // No permitir fechas pasadas
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      const dateToCheck = new Date(date);
      dateToCheck.setHours(0, 0, 0, 0);
      
      if (dateToCheck < today) {
        return false;
      }
      
      return true;
    },

    // Generar horarios disponibles para una fecha
    generateTimeSlots(date, treatmentDuration) {
      // Generar horarios fijos para cualquier fecha
      const slots = [];
      
      // Horarios fijos de 8:00 a 18:00 cada 30 minutos
      const startHour = 8;
      const endHour = 18;
      
      for (let hour = startHour; hour < endHour; hour++) {
        for (let minute = 0; minute < 60; minute += 30) {
          const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
          
          // Verificar si el slot está ocupado
          const isOccupied = reservations.some(reservation => {
            const reservationDate = new Date(reservation.date);
            return reservationDate.toDateString() === date.toDateString() && 
                   reservation.time === timeString &&
                   reservation.status !== 'cancelled';
          });
          
          slots.push({
            time: timeString,
            available: !isOccupied
          });
        }
      }
      
      return slots;
    }
  };

  // Inicialización
  function init() {
    try {
      setupEventListeners();
      renderTreatments(currentCategory);
      renderTestimonials();
      startCarousel();
      loadScheduleConfig();
      loadBackgrounds();
      
      // Ocultar preloader
      window.addEventListener('load', () => {
        setTimeout(() => {
          if (elements.preloader) {
            elements.preloader.style.display = 'none';
          }
        }, 500);
      });
    } catch (error) {
      console.error('Error en la inicialización:', error);
      // Intentar ocultar el preloader incluso si hay errores
      if (elements.preloader) {
        elements.preloader.style.display = 'none';
      }
    }
  }

  // Event Listeners para categorías personalizadas
  function setupCustomCategoryListeners() {
    // Para tratamientos
    const treatmentCategorySelect = document.getElementById('treatment-category');
    const customTreatmentCategoryGroup = document.querySelector('.custom-category-group');
    
    if (treatmentCategorySelect && customTreatmentCategoryGroup) {
      treatmentCategorySelect.addEventListener('change', function() {
        if (this.value === 'custom') {
          customTreatmentCategoryGroup.style.display = 'block';
        } else {
          customTreatmentCategoryGroup.style.display = 'none';
        }
      });
    }
    
    // Para galería
    const galleryCategorySelect = document.getElementById('gallery-category');
    const customGalleryCategoryGroup = document.querySelector('.custom-gallery-category-group');
    
    if (galleryCategorySelect && customGalleryCategoryGroup) {
      galleryCategorySelect.addEventListener('change', function() {
        if (this.value === 'custom') {
          customGalleryCategoryGroup.style.display = 'block';
        } else {
          customGalleryCategoryGroup.style.display = 'none';
        }
      });
    }
  }
  
  // Event Listeners
  function setupEventListeners() {
    // Configurar listeners para categorías personalizadas
    setupCustomCategoryListeners();
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

    // Navegación normal con scroll
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
    
    // Gallery management
    if (elements.addGalleryItemBtn) {
      elements.addGalleryItemBtn.addEventListener('click', () => {
        elements.galleryFormContainer.classList.remove('hidden');
      });
    }
    
    if (elements.cancelGalleryItem) {
      elements.cancelGalleryItem.addEventListener('click', () => {
        elements.galleryFormContainer.classList.add('hidden');
        elements.galleryForm.reset();
      });
    }
    
    if (elements.galleryForm) {
      elements.galleryForm.addEventListener('submit', handleAddGalleryItem);
    }

    // Reservation system event listeners
    setupReservationEventListeners();

    // Schedule configuration
    elements.saveSchedule.addEventListener('click', saveScheduleConfig);
    elements.resetSchedule.addEventListener('click', resetScheduleConfig);
    
    // Backgrounds configuration
    if (elements.previewBgButtons) {
      elements.previewBgButtons.forEach(button => {
        button.addEventListener('click', handlePreviewBackground);
      });
    }
    
    if (elements.saveBgButtons) {
      elements.saveBgButtons.forEach(button => {
        button.addEventListener('click', handleSaveBackground);
      });
    }
    
    if (elements.resetBackgrounds) {
      elements.resetBackgrounds.addEventListener('click', resetBackgrounds);
    }

    // Reservation filters
    if (elements.reservationFilterDate) {
      elements.reservationFilterDate.addEventListener('change', filterReservations);
    }
    if (elements.reservationFilterStatus) {
      elements.reservationFilterStatus.addEventListener('change', filterReservations);
    }

    // Close modal when clicking outside
    elements.confirmModal.addEventListener('click', (e) => {
      if (e.target === elements.confirmModal) {
        elements.confirmModal.classList.add('hidden');
      }
    });
  }

  // Event Listeners del Sistema de Reservas
  function setupReservationEventListeners() {
    // Categorías de tratamientos en reservas
    elements.treatmentCategories.forEach(button => {
      button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        
        elements.treatmentCategories.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        renderTreatmentSelection(category);
      });
    });

    // Navegación entre pasos
    elements.nextToCalendar.addEventListener('click', () => {
      if (selectedTreatment) {
        goToStep(2);
        renderCalendar();
      }
    });

    elements.backToTreatment.addEventListener('click', () => {
      goToStep(1);
    });

    elements.nextToDetails.addEventListener('click', () => {
      if (selectedDate && selectedTime) {
        updateReservationSummary();
        goToStep(3);
      }
    });

    elements.backToCalendar.addEventListener('click', () => {
      goToStep(2);
    });

    elements.confirmReservation.addEventListener('click', handleReservationSubmit);

    elements.newReservation.addEventListener('click', () => {
      resetReservationForm();
      goToStep(1);
    });

    // Navegación del calendario
    elements.prevMonth.addEventListener('click', () => {
      currentCalendarDate.setMonth(currentCalendarDate.getMonth() - 1);
      renderCalendar();
    });

    elements.nextMonth.addEventListener('click', () => {
      currentCalendarDate.setMonth(currentCalendarDate.getMonth() + 1);
      renderCalendar();
    });
  }

  // Sistema de Reservas
  function renderTreatmentSelection(category) {
    const filteredTreatments = treatments.filter(treatment => treatment.category === category);
    
    elements.treatmentsSelectionGrid.innerHTML = '';
    
    filteredTreatments.forEach(treatment => {
      const card = document.createElement('div');
      card.className = 'treatment-selection-card';
      card.dataset.treatmentId = treatment.id;
      
      card.innerHTML = `
        <h4>${treatment.name}</h4>
        <p>${treatment.description}</p>
        <div class="treatment-selection-meta">
          <span class="treatment-duration">${treatment.duration} min</span>
          <span class="treatment-selection-price">$${treatment.price}.00</span>
        </div>
      `;
      
      card.addEventListener('click', () => {
        // Remover selección anterior
        document.querySelectorAll('.treatment-selection-card').forEach(c => {
          c.classList.remove('selected');
        });
        
        // Seleccionar nuevo tratamiento
        card.classList.add('selected');
        selectedTreatment = treatment;
        elements.nextToCalendar.disabled = false;
      });
      
      elements.treatmentsSelectionGrid.appendChild(card);
    });
  }

  function renderCalendar() {
    const year = currentCalendarDate.getFullYear();
    const month = currentCalendarDate.getMonth();
    
    // Actualizar título
    elements.calendarMonthYear.textContent = new Date(year, month).toLocaleDateString('es-ES', {
      month: 'long',
      year: 'numeric'
    });
    
    // Limpiar días
    elements.calendarDays.innerHTML = '';
    
    // Primer día del mes y último día
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    // Generar 42 días (6 semanas)
    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      
      const dayElement = document.createElement('div');
      dayElement.className = 'calendar-day';
      dayElement.textContent = date.getDate();
      
      // Clases CSS
      if (date.getMonth() !== month) {
        dayElement.classList.add('other-month');
      }
      
      if (date.toDateString() === new Date().toDateString()) {
        dayElement.classList.add('today');
      }
      
      if (!utils.isDateAvailable(date)) {
        dayElement.classList.add('disabled');
      } else {
        dayElement.addEventListener('click', () => {
          // Remover selección anterior
          document.querySelectorAll('.calendar-day').forEach(d => {
            d.classList.remove('selected');
          });
          
          // Seleccionar nueva fecha
          dayElement.classList.add('selected');
          selectedDate = new Date(date);
          
          // Actualizar display de fecha
          elements.selectedDateDisplay.textContent = utils.formatDate(selectedDate);
          
          // Habilitar el botón de siguiente
          elements.nextToDetails.disabled = true;
          
          // Generar horarios
          renderTimeSlots();
        });
      }
      
      elements.calendarDays.appendChild(dayElement);
    }
  }

  function renderTimeSlots() {
    if (!selectedDate || !selectedTreatment) {
      elements.timeSlots.innerHTML = '<p>Selecciona una fecha válida</p>';
      return;
    }
    
    // Generar horarios fijos directamente aquí
    elements.timeSlots.innerHTML = '';
    const horarios = [
      "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", 
      "11:00", "11:30", "12:00", "12:30", "13:00", "13:30",
      "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", 
      "17:00", "17:30"
    ];
    
    horarios.forEach(time => {
      const slotElement = document.createElement('div');
      slotElement.className = 'time-slot';
      
      // Agregar formato AM/PM
      const hour = parseInt(time.split(':')[0]);
      const minutes = time.split(':')[1];
      const ampm = hour < 12 ? 'AM' : 'PM';
      const displayHour = hour > 12 ? hour - 12 : (hour === 0 ? 12 : hour);
      
      slotElement.innerHTML = `
        <span class="time-value">${displayHour}:${minutes}</span>
        <span class="time-ampm">${ampm}</span>
      `;
      
      slotElement.addEventListener('click', () => {
        // Remover selección anterior
        document.querySelectorAll('.time-slot').forEach(s => {
          s.classList.remove('selected');
        });
        
        // Seleccionar nuevo horario
        slotElement.classList.add('selected');
        selectedTime = time;
        elements.nextToDetails.disabled = false;
      });
      
      elements.timeSlots.appendChild(slotElement);
    });
  }

  function updateReservationSummary() {
    if (selectedTreatment && selectedDate && selectedTime) {
      elements.summaryTreatment.textContent = selectedTreatment.name;
      elements.summaryDate.textContent = utils.formatDate(selectedDate);
      elements.summaryTime.textContent = selectedTime;
      elements.summaryPrice.textContent = `$${selectedTreatment.price}.00`;
    }
  }

  function handleReservationSubmit(e) {
    e.preventDefault();
    
    // Validar formulario
    if (!elements.clientName.value.trim() || !elements.clientPhone.value.trim()) {
      utils.showToast('Error', 'Por favor completa los campos obligatorios', 'error');
      return;
    }
    
    if (!elements.termsAccepted.checked) {
      utils.showToast('Error', 'Debes aceptar los términos y condiciones', 'error');
      return;
    }
    
    // Crear reserva
    const reservation = {
      id: utils.generateId(),
      treatmentId: selectedTreatment.id,
      treatmentName: selectedTreatment.name,
      price: selectedTreatment.price,
      duration: selectedTreatment.duration,
      date: selectedDate.toISOString().split('T')[0],
      time: selectedTime,
      clientName: elements.clientName.value.trim(),
      clientPhone: elements.clientPhone.value.trim(),
      clientEmail: elements.clientEmail.value.trim(),
      clientAge: elements.clientAge.value,
      clientNotes: elements.clientNotes.value.trim(),
      whatsappNotifications: elements.whatsappNotifications.checked,
      status: 'confirmed',
      createdAt: new Date().toISOString()
    };
    
    // Guardar reserva
    reservations.push(reservation);
    localStorage.setItem('reservations', JSON.stringify(reservations));
    
    // Mostrar confirmación
    showReservationConfirmation(reservation);
    goToStep(4);
    
    utils.showToast('¡Reserva confirmada!', 'Tu cita ha sido registrada exitosamente', 'success');
  }

  function showReservationConfirmation(reservation) {
    elements.confirmationSummary.innerHTML = `
      <div class="summary-item">
        <span class="summary-label">Tratamiento:</span>
        <span>${reservation.treatmentName}</span>
      </div>
      <div class="summary-item">
        <span class="summary-label">Fecha:</span>
        <span>${utils.formatDate(reservation.date)}</span>
      </div>
      <div class="summary-item">
        <span class="summary-label">Hora:</span>
        <span>${reservation.time}</span>
      </div>
      <div class="summary-item">
        <span class="summary-label">Cliente:</span>
        <span>${reservation.clientName}</span>
      </div>
      <div class="summary-item">
        <span class="summary-label">Teléfono:</span>
        <span>${reservation.clientPhone}</span>
      </div>
      <div class="summary-item">
        <span class="summary-label">Precio:</span>
        <span>${reservation.price}.00</span>
      </div>
    `;
    
    // Configurar enlace de WhatsApp de manera segura
    if (elements.whatsappConfirmation) {
      const whatsappUrl = utils.generateReservationWhatsAppLink(reservation);
      elements.whatsappConfirmation.setAttribute('href', whatsappUrl);
      elements.whatsappConfirmation.setAttribute('target', '_blank');
    }
  }

  function goToStep(stepNumber) {
    currentReservationStep = stepNumber;
    
    elements.reservationSteps.forEach((step, index) => {
      step.classList.toggle('active', index + 1 === stepNumber);
    });
  }

  function resetReservationForm() {
    selectedTreatment = null;
    selectedDate = null;
    selectedTime = null;
    currentReservationStep = 1;
    
    // Reset form
    elements.reservationForm.reset();
    
    // Reset buttons
    elements.nextToCalendar.disabled = true;
    elements.nextToDetails.disabled = true;
    
    // Reset selections
    document.querySelectorAll('.treatment-selection-card').forEach(card => {
      card.classList.remove('selected');
    });
    
    document.querySelectorAll('.calendar-day').forEach(day => {
      day.classList.remove('selected');
    });
    
    document.querySelectorAll('.time-slot').forEach(slot => {
      slot.classList.remove('selected');
    });
    
    // Reset displays
    elements.selectedDateDisplay.textContent = 'Selecciona una fecha';
    elements.timeSlots.innerHTML = '';
    
    // Render initial treatment selection
    renderTreatmentSelection('masajes');
  }

  // Tratamientos
  function renderTreatments(category) {
    // Intentar obtener de caché primero
    const cacheKey = `filtered_treatments_${category}`;
    let filteredTreatments = CacheSystem.get(cacheKey);
    
    if (!filteredTreatments) {
      // Si no está en caché, filtrar y guardar en caché
      filteredTreatments = treatments.filter(treatment => treatment.category === category);
      // Guardar en caché por 1 hora
      CacheSystem.set(cacheKey, filteredTreatments, 60);
    }
    
    elements.treatmentsGrid.innerHTML = '';
    
    filteredTreatments.forEach(treatment => {
      const treatmentCard = document.createElement('div');
      treatmentCard.className = 'treatment-card';
      
      const deleteButton = isLoggedIn ? 
        `<button class="btn-delete" onclick="deleteTreatment('${treatment.id}')" title="Eliminar tratamiento">🗑️</button>` : '';
      
      const editButton = isLoggedIn ? 
        `<button class="btn-edit" onclick="editTreatment('${treatment.id}')" title="Editar tratamiento">✏️</button>` : '';
      
      treatmentCard.innerHTML = `
        <div class="treatment-image">
          <img src="${treatment.image}" alt="${treatment.name}" loading="lazy">
          <div class="treatment-price">${treatment.price}.00</div>
        </div>
        <div class="treatment-content">
          <h3 class="treatment-title">${treatment.name}</h3>
          <p class="treatment-description">${treatment.description}</p>
          <div class="booking-options">
            <p class="booking-label">Reservar por:</p>
            <div class="treatment-actions">
              <a href="#reservas" class="btn btn-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                Web
              </a>
              <a href="https://wa.me/51961014245?text=Hola,%20quiero%20reservar%20una%20cita%20para%20${encodeURIComponent(treatment.name)}" target="_blank" class="btn btn-whatsapp">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" style="width: 16px; height: 16px;">
                WhatsApp
              </a>
            </div>
            <div class="admin-buttons">
              ${editButton}
              ${deleteButton}
            </div>
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
      
      renderAdminReservations();
      renderAdminTestimonials();
      renderAdminTreatments();
      renderAdminGallery();
      loadBackgroundInputs();
      renderTreatments(currentCategory); // Re-render to show delete buttons
      renderGallery(); // Re-render gallery
      
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
    
    // Cargar datos específicos del tab
    if (tabName === 'reservations') {
      renderAdminReservations();
    } else if (tabName === 'gallery') {
      renderAdminGallery();
    } else if (tabName === 'backgrounds') {
      loadBackgroundInputs();
    }
  }

  function renderAdminReservations() {
    if (!elements.adminReservationsList) return;
    
    elements.adminReservationsList.innerHTML = '';
    
    // Filtrar reservas según filtros seleccionados
    let filteredReservations = [...reservations];
    
    if (elements.reservationFilterDate && elements.reservationFilterDate.value !== 'all') {
      const filterValue = elements.reservationFilterDate.value;
      const today = new Date();
      
      filteredReservations = filteredReservations.filter(reservation => {
        const reservationDate = new Date(reservation.date);
        
        switch (filterValue) {
          case 'today':
            return reservationDate.toDateString() === today.toDateString();
          case 'tomorrow':
            const tomorrow = new Date(today);
            tomorrow.setDate(tomorrow.getDate() + 1);
            return reservationDate.toDateString() === tomorrow.toDateString();
          case 'week':
            const weekFromNow = new Date(today);
            weekFromNow.setDate(weekFromNow.getDate() + 7);
            return reservationDate >= today && reservationDate <= weekFromNow;
          default:
            return true;
        }
      });
    }
    
    if (elements.reservationFilterStatus && elements.reservationFilterStatus.value !== 'all') {
      const statusFilter = elements.reservationFilterStatus.value;
      filteredReservations = filteredReservations.filter(reservation => 
        reservation.status === statusFilter
      );
    }
    
    // Ordenar por fecha y hora
    filteredReservations.sort((a, b) => {
      const dateA = new Date(`${a.date} ${a.time}`);
      const dateB = new Date(`${b.date} ${b.time}`);
      return dateA - dateB;
    });
    
    filteredReservations.forEach(reservation => {
      const item = document.createElement('div');
      item.className = `admin-item reservation-item ${reservation.status}`;
      
      item.innerHTML = `
        <div class="admin-item-content">
          <div class="admin-item-title">
            ${reservation.treatmentName} - ${reservation.clientName}
            <span class="status-badge status-${reservation.status}">${reservation.status}</span>
          </div>
          <div class="reservation-details">
            <div class="reservation-detail">
              <strong>Fecha:</strong> ${utils.formatDateShort(reservation.date)}
            </div>
            <div class="reservation-detail">
              <strong>Hora:</strong> ${reservation.time}
            </div>
            <div class="reservation-detail">
              <strong>Teléfono:</strong> ${reservation.clientPhone}
            </div>
            <div class="reservation-detail">
              <strong>Precio:</strong> $${reservation.price}.00
            </div>
            ${reservation.clientEmail ? `
              <div class="reservation-detail">
                <strong>Email:</strong> ${reservation.clientEmail}
              </div>
            ` : ''}
            ${reservation.clientNotes ? `
              <div class="reservation-detail">
                <strong>Notas:</strong> ${reservation.clientNotes}
              </div>
            ` : ''}
          </div>
        </div>
        <div class="admin-item-actions">
          ${reservation.status === 'confirmed' ? `
            <button class="btn btn-success btn-sm" onclick="updateReservationStatus('${reservation.id}', 'completed')">
              Completar
            </button>
          ` : ''}
          ${reservation.status !== 'cancelled' ? `
            <button class="btn btn-warning btn-sm" onclick="updateReservationStatus('${reservation.id}', 'cancelled')">
              Cancelar
            </button>
          ` : ''}
          <button class="btn btn-danger btn-sm" onclick="deleteReservation('${reservation.id}')">
            Eliminar
          </button>
        </div>
      `;
      
      elements.adminReservationsList.appendChild(item);
    });
    
    if (filteredReservations.length === 0) {
      elements.adminReservationsList.innerHTML = '<p class="text-center">No hay reservas que coincidan con los filtros seleccionados.</p>';
    }
  }

  function renderAdminTestimonials() {
    if (!elements.adminTestimonialsList) return;
    
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
    if (!elements.adminTreatmentsList) return;
    
    elements.adminTreatmentsList.innerHTML = '';
    
    treatments.forEach(treatment => {
      const item = document.createElement('div');
      item.className = 'admin-item';
      
      item.innerHTML = `
        <div class="admin-item-content">
          <div class="admin-item-title">${treatment.name}</div>
          <div class="admin-item-meta">
            ${treatment.category} • ${treatment.price}.00 • ${treatment.duration} min
          </div>
          <p style="margin-top: 0.5rem; font-size: 0.875rem; color: var(--color-text-light);">
            ${treatment.description}
          </p>
        </div>
        <div class="admin-item-actions">
          <button class="btn btn-primary btn-sm" onclick="editTreatment('${treatment.id}')">
            Editar
          </button>
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
    
    const form = e.target;
    const isEditMode = form.dataset.mode === 'edit';
    const editId = form.dataset.editId;
    
    const name = document.getElementById('treatment-name').value.trim();
    let category = document.getElementById('treatment-category').value;
    const price = parseFloat(document.getElementById('treatment-price').value);
    const duration = parseInt(document.getElementById('treatment-duration').value);
    const imageUrl = document.getElementById('treatment-image')?.value.trim() || '';
    const imageFile = document.getElementById('treatment-image-file')?.files?.[0];
    const description = document.getElementById('treatment-description').value.trim();
    
    // Verificar si es categoría personalizada
    if (category === 'custom') {
      const customCategory = document.getElementById('custom-treatment-category')?.value.trim();
      if (!customCategory) {
        utils.showToast('Error', 'Por favor ingresa un nombre para la categoría personalizada', 'error');
        return;
      }
      category = customCategory;
    }

    if (!name || !category || !price || !duration || !description) {
      utils.showToast('Error', 'Por favor completa los campos obligatorios', 'error');
      return;
    }
    
    // Si estamos en modo edición y no se proporciona una nueva imagen, usar la imagen existente
    if (isEditMode) {
      const existingTreatment = treatments.find(t => t.id == editId);
      if ((!imageUrl || imageUrl === '') && !imageFile && existingTreatment) {
        updateTreatment(editId, name, category, price, duration, existingTreatment.image, description);
        return;
      }
    }

    // Método 1: URL de imgBB
    if (imageUrl && imageUrl !== '') {
      if (!utils.isValidImageUrl(imageUrl)) {
        utils.showToast('Error', 'Por favor ingresa una URL de imagen válida', 'error');
        return;
      }
      
      if (isEditMode) {
        updateTreatment(editId, name, category, price, duration, imageUrl, description);
      } else {
        saveNewTreatment(name, category, price, duration, imageUrl, description);
      }
      return;
    }
    
    // Método 2: Subir desde el escritorio
    if (imageFile) {
      // Verificar tamaño del archivo
      if (imageFile.size > 5 * 1024 * 1024) { // 5MB
        utils.showToast('Error', 'La imagen es demasiado grande. Máximo 5MB', 'error');
        return;
      }
      
      utils.showToast('Subiendo imagen', 'Comprimiendo y guardando imagen...', 'info');
      try {
        utils.saveLocalImage(imageFile, (dataUrl) => {
          try {
            if (isEditMode) {
              updateTreatment(editId, name, category, price, duration, dataUrl, description);
            } else {
              saveNewTreatment(name, category, price, duration, dataUrl, description);
            }
          } catch (storageError) {
            console.error('Error de almacenamiento:', storageError);
            utils.showToast('Error', 'No hay suficiente espacio. Intente con una imagen más pequeña', 'error');
          }
        });
      } catch (error) {
        console.error('Error al procesar imagen:', error);
        utils.showToast('Error', 'No se pudo procesar la imagen', 'error');
      }
      return;
    }
    
    // Si no hay imagen y no es modo edición
    if (!isEditMode) {
      utils.showToast('Error', 'Por favor proporciona una imagen (URL o archivo)', 'error');
    }
  }
  
  function saveNewTreatment(name, category, price, duration, image, description) {
    try {
      const newTreatment = {
        id: utils.generateId(),
        name,
        category,
        price,
        duration,
        image,
        description
      };

      // Limpiar localStorage si hay demasiados elementos
      if (treatments.length > 30) {
        // Mantener solo los 25 elementos más recientes
        treatments = treatments.slice(-25);
      }

      treatments.push(newTreatment);
      
      try {
        localStorage.setItem('treatments', JSON.stringify(treatments));
        // Actualizar caché
        CacheSystem.set('treatments', treatments, 43200);
      } catch (storageError) {
        // Si falla por cuota excedida, eliminar algunos elementos antiguos
        utils.showToast('Advertencia', 'Espacio de almacenamiento limitado, eliminando elementos antiguos', 'warning');
        treatments = treatments.slice(-20); // Mantener solo los 20 más recientes
        localStorage.setItem('treatments', JSON.stringify(treatments));
        CacheSystem.set('treatments', treatments, 43200);
      }
      
      renderAdminTreatments();
      if (currentCategory === category) {
        renderTreatments(category);
      }
      
      elements.treatmentFormContainer.classList.add('hidden');
      elements.treatmentForm.reset();
      elements.treatmentForm.dataset.mode = 'add';
      elements.treatmentForm.dataset.editId = '';
      
      // Restablecer el texto del botón
      const submitButton = elements.treatmentForm.querySelector('button[type="submit"]');
      if (submitButton) submitButton.textContent = 'Agregar Tratamiento';
      
      utils.showToast('¡Tratamiento agregado!', 'El nuevo tratamiento ha sido agregado correctamente', 'success');
    } catch (error) {
      console.error('Error al guardar tratamiento:', error);
      utils.showToast('Error', 'No se pudo guardar el tratamiento', 'error');
    }
  }
  
  function updateTreatment(id, name, category, price, duration, image, description) {
    const index = treatments.findIndex(t => t.id == id);
    if (index === -1) return;
    
    treatments[index] = {
      ...treatments[index],
      name,
      category,
      price,
      duration,
      image,
      description
    };
    
    // Actualizar localStorage y caché
    localStorage.setItem('treatments', JSON.stringify(treatments));
    CacheSystem.set('treatments', treatments, 43200);
    
    renderAdminTreatments();
    renderTreatments(currentCategory);
    
    elements.treatmentFormContainer.classList.add('hidden');
    elements.treatmentForm.reset();
    elements.treatmentForm.dataset.mode = 'add';
    elements.treatmentForm.dataset.editId = '';
    
    // Restablecer el texto del botón
    const submitButton = elements.treatmentForm.querySelector('button[type="submit"]');
    if (submitButton) submitButton.textContent = 'Agregar Tratamiento';
    
    utils.showToast('¡Tratamiento actualizado!', 'El tratamiento ha sido actualizado correctamente', 'success');
  }

  // Configuración de Horarios
  function loadScheduleConfig() {
    Object.keys(schedule).forEach(day => {
      const enabledCheckbox = document.getElementById(`${day}-enabled`);
      const startInput = document.getElementById(`${day}-start`);
      const endInput = document.getElementById(`${day}-end`);
      const startFormat = document.getElementById(`${day}-start-format`);
      const endFormat = document.getElementById(`${day}-end-format`);
      
      if (enabledCheckbox && startInput && endInput) {
        enabledCheckbox.checked = schedule[day].enabled;
        startInput.value = schedule[day].start;
        endInput.value = schedule[day].end;
        
        // Actualizar indicadores AM/PM
        if (startFormat) {
          const startHour = parseInt(schedule[day].start.split(':')[0]);
          startFormat.textContent = startHour < 12 ? 'AM' : 'PM';
        }
        
        if (endFormat) {
          const endHour = parseInt(schedule[day].end.split(':')[0]);
          endFormat.textContent = endHour < 12 ? 'AM' : 'PM';
        }
      }
    });
    
    // Agregar event listeners para actualizar AM/PM cuando cambian los horarios
    Object.keys(schedule).forEach(day => {
      const startInput = document.getElementById(`${day}-start`);
      const endInput = document.getElementById(`${day}-end`);
      const startFormat = document.getElementById(`${day}-start-format`);
      const endFormat = document.getElementById(`${day}-end-format`);
      
      if (startInput && startFormat) {
        startInput.addEventListener('change', () => {
          const hour = parseInt(startInput.value.split(':')[0]);
          startFormat.textContent = hour < 12 ? 'AM' : 'PM';
        });
      }
      
      if (endInput && endFormat) {
        endInput.addEventListener('change', () => {
          const hour = parseInt(endInput.value.split(':')[0]);
          endFormat.textContent = hour < 12 ? 'AM' : 'PM';
        });
      }
    });
  }

  function saveScheduleConfig() {
    const newSchedule = {};
    
    Object.keys(DEFAULT_SCHEDULE).forEach(day => {
      const enabledCheckbox = document.getElementById(`${day}-enabled`);
      const startInput = document.getElementById(`${day}-start`);
      const endInput = document.getElementById(`${day}-end`);
      
      if (enabledCheckbox && startInput && endInput) {
        newSchedule[day] = {
          enabled: enabledCheckbox.checked,
          start: startInput.value,
          end: endInput.value
        };
      }
    });
    
    schedule = newSchedule;
    localStorage.setItem('schedule', JSON.stringify(schedule));
    
    utils.showToast('¡Horarios guardados!', 'La configuración de horarios ha sido actualizada', 'success');
  }

  function resetScheduleConfig() {
    utils.showConfirmModal('¿Estás seguro de que quieres restaurar los horarios predeterminados?', () => {
      schedule = { ...DEFAULT_SCHEDULE };
      localStorage.setItem('schedule', JSON.stringify(schedule));
      loadScheduleConfig();
      
      utils.showToast('Horarios restaurados', 'Se han restaurado los horarios predeterminados', 'success');
    });
  }

  // Filtros de Reservas
  function filterReservations() {
    renderAdminReservations();
  }

  // Funciones globales para eliminar y actualizar (llamadas desde HTML)
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
      
      // Actualizar localStorage y caché
      localStorage.setItem('treatments', JSON.stringify(treatments));
      CacheSystem.set('treatments', treatments, 43200);
      
      renderTreatments(currentCategory);
      renderAdminTreatments();
      
      utils.showToast('Tratamiento eliminado', 'El tratamiento ha sido eliminado correctamente', 'success');
    });
  };
  
  window.editTreatment = function(id) {
    try {
      const treatment = treatments.find(t => t.id == id);
      if (!treatment) {
        console.error('Tratamiento no encontrado:', id);
        return;
      }
      
      // Mostrar formulario de edición
      elements.treatmentFormContainer.classList.remove('hidden');
      
      // Llenar formulario con datos del tratamiento
      document.getElementById('treatment-name').value = treatment.name;
      
      // Manejar categoría
      const categorySelect = document.getElementById('treatment-category');
      const customCategoryGroup = document.querySelector('.custom-category-group');
      const customCategoryInput = document.getElementById('custom-treatment-category');
      
      // Verificar si es una categoría estándar o personalizada
      const standardCategories = ['masajes', 'corporales', 'faciales', 'rehabilitacion', 'energeticas'];
      if (standardCategories.includes(treatment.category)) {
        categorySelect.value = treatment.category;
        if (customCategoryGroup) customCategoryGroup.style.display = 'none';
      } else {
        categorySelect.value = 'custom';
        if (customCategoryGroup) {
          customCategoryGroup.style.display = 'block';
          if (customCategoryInput) customCategoryInput.value = treatment.category;
        }
      }
      
      // Llenar resto de campos
      document.getElementById('treatment-price').value = treatment.price;
      document.getElementById('treatment-duration').value = treatment.duration;
      document.getElementById('treatment-description').value = treatment.description;
      
      // Cambiar el comportamiento del formulario para editar en lugar de crear
      const form = document.getElementById('treatment-form');
      form.dataset.mode = 'edit';
      form.dataset.editId = treatment.id;
      
      // Cambiar el texto del botón
      const submitButton = form.querySelector('button[type="submit"]');
      if (submitButton) submitButton.textContent = 'Actualizar Tratamiento';
      
      // Desplazarse al formulario
      elements.treatmentFormContainer.scrollIntoView({ behavior: 'smooth' });
    } catch (error) {
      console.error('Error al editar tratamiento:', error);
      utils.showToast('Error', 'No se pudo cargar el tratamiento para editar', 'error');
    }
  };

  window.deleteReservation = function(id) {
    utils.showConfirmModal('¿Estás seguro de que quieres eliminar esta reserva?', () => {
      reservations = reservations.filter(r => r.id !== id);
      localStorage.setItem('reservations', JSON.stringify(reservations));
      
      renderAdminReservations();
      
      utils.showToast('Reserva eliminada', 'La reserva ha sido eliminada correctamente', 'success');
    });
  };

  window.updateReservationStatus = function(id, newStatus) {
    const reservation = reservations.find(r => r.id === id);
    if (reservation) {
      reservation.status = newStatus;
      localStorage.setItem('reservations', JSON.stringify(reservations));
      
      renderAdminReservations();
      
      const statusMessages = {
        completed: 'Reserva marcada como completada',
        cancelled: 'Reserva cancelada',
        confirmed: 'Reserva confirmada'
      };
      
      utils.showToast('Estado actualizado', statusMessages[newStatus] || 'Estado actualizado', 'success');
    }
  };

  // Galería
  renderGallery();
  setupGallery();
  
  // Funciones para administrar la galería
  function renderAdminGallery() {
    if (!elements.adminGalleryList) return;
    
    elements.adminGalleryList.innerHTML = '';
    
    galleryItems.forEach(item => {
      const galleryItem = document.createElement('div');
      galleryItem.className = 'admin-item';
      
      galleryItem.innerHTML = `
        <div class="admin-item-content">
          <div class="admin-item-title">${item.title}</div>
          <div class="admin-item-meta">
            ${item.category} • ${item.description}
          </div>
          <div class="admin-item-image">
            <img src="${item.imageUrl}" alt="${item.title}" style="max-height: 100px; max-width: 150px; object-fit: cover; border-radius: var(--border-radius-sm); margin-top: 0.5rem;">
          </div>
        </div>
        <div class="admin-item-actions">
          <button class="btn btn-danger btn-sm" onclick="deleteGalleryItem('${item.id}')">
            Eliminar
          </button>
        </div>
      `;
      
      elements.adminGalleryList.appendChild(galleryItem);
    });
  }

  function handleAddGalleryItem(e) {
    e.preventDefault();
    
    const title = document.getElementById('gallery-title')?.value.trim() || '';
    let category = document.getElementById('gallery-category')?.value || '';
    const imageUrl = document.getElementById('gallery-image-url')?.value.trim() || '';
    const imageFile = document.getElementById('gallery-image-file')?.files?.[0];
    const description = document.getElementById('gallery-description')?.value.trim() || '';
    
    // Verificar si es categoría personalizada
    if (category === 'custom') {
      const customCategory = document.getElementById('custom-gallery-category')?.value.trim();
      if (!customCategory) {
        utils.showToast('Error', 'Por favor ingresa un nombre para la categoría personalizada', 'error');
        return;
      }
      category = customCategory;
    }

    if (!title || !category || !description) {
      utils.showToast('Error', 'Por favor completa los campos obligatorios', 'error');
      return;
    }

    // Método 1: URL de imgBB
    if (imageUrl && imageUrl !== '') {
      if (!utils.isValidImageUrl(imageUrl)) {
        utils.showToast('Error', 'Por favor ingresa una URL de imagen válida', 'error');
        return;
      }
      saveNewGalleryItem(title, category, imageUrl, description);
      return;
    }
    
    // Método 2: Subir desde el escritorio
    if (imageFile) {
      // Verificar tamaño del archivo
      if (imageFile.size > 5 * 1024 * 1024) { // 5MB
        utils.showToast('Error', 'La imagen es demasiado grande. Máximo 5MB', 'error');
        return;
      }
      
      utils.showToast('Subiendo imagen', 'Comprimiendo y guardando imagen...', 'info');
      try {
        utils.saveLocalImage(imageFile, (dataUrl) => {
          try {
            saveNewGalleryItem(title, category, dataUrl, description);
          } catch (storageError) {
            console.error('Error de almacenamiento:', storageError);
            utils.showToast('Error', 'No hay suficiente espacio. Intente con una imagen más pequeña', 'error');
          }
        });
      } catch (error) {
        console.error('Error al guardar imagen:', error);
        utils.showToast('Error', 'No se pudo procesar la imagen', 'error');
      }
      return;
    }
    
    // Si no hay imagen
    utils.showToast('Error', 'Por favor proporciona una imagen (URL o archivo)', 'error');
  }
  
  function saveNewGalleryItem(title, category, imageUrl, description) {
    try {
      const newGalleryItem = {
        id: utils.generateId(),
        title,
        category,
        imageUrl,
        description
      };

      // Limpiar localStorage si hay demasiados elementos
      if (galleryItems.length > 20) {
        // Mantener solo los 15 elementos más recientes
        galleryItems = galleryItems.slice(-15);
      }

      galleryItems.push(newGalleryItem);
      
      try {
        localStorage.setItem('galleryItems', JSON.stringify(galleryItems));
      } catch (storageError) {
        // Si falla por cuota excedida, eliminar algunos elementos antiguos
        utils.showToast('Advertencia', 'Espacio de almacenamiento limitado, eliminando elementos antiguos', 'warning');
        galleryItems = galleryItems.slice(-10); // Mantener solo los 10 más recientes
        localStorage.setItem('galleryItems', JSON.stringify(galleryItems));
      }
      
      renderAdminGallery();
      renderGallery();
      setupGallery();
      
      elements.galleryFormContainer.classList.add('hidden');
      elements.galleryForm.reset();
      
      utils.showToast('¡Imagen agregada!', 'La nueva imagen ha sido agregada a la galería', 'success');
    } catch (error) {
      console.error('Error al guardar imagen en galería:', error);
      utils.showToast('Error', 'No se pudo guardar la imagen. Intente con una imagen más pequeña', 'error');
    }
  }

  // Función global para eliminar imágenes de la galería
  window.deleteGalleryItem = function(id) {
    utils.showConfirmModal('¿Estás seguro de que quieres eliminar esta imagen?', () => {
      galleryItems = galleryItems.filter(item => item.id !== id);
      localStorage.setItem('galleryItems', JSON.stringify(galleryItems));
      
      renderAdminGallery();
      renderGallery();
      setupGallery();
      
      utils.showToast('Imagen eliminada', 'La imagen ha sido eliminada de la galería', 'success');
    });
  };

  // Funciones para gestionar los fondos
  function loadBackgrounds() {
    try {
      // Aplicar fondos guardados a las secciones directamente
      const heroBg = document.querySelector('.hero-bg');
      const aboutBg = document.querySelector('.about');
      const visionBg = document.querySelector('.vision');
      const eventsBg = document.querySelector('.events');
      const contactBg = document.querySelector('.contact');
      
      if (heroBg && backgrounds.hero) heroBg.style.backgroundImage = `url('${backgrounds.hero}')`;
      if (aboutBg && backgrounds.about) aboutBg.style.backgroundImage = `url('${backgrounds.about}')`;
      if (visionBg && backgrounds.vision) visionBg.style.backgroundImage = `url('${backgrounds.vision}')`;
      if (eventsBg && backgrounds.events) eventsBg.style.backgroundImage = `url('${backgrounds.events}')`;
      if (contactBg && backgrounds.contact) contactBg.style.backgroundImage = `url('${backgrounds.contact}')`;
    } catch (error) {
      console.error('Error al cargar fondos:', error);
    }
  }
  
  function loadBackgroundInputs() {
    try {
      // Cargar URLs en los inputs
      if (elements.heroBgUrl && backgrounds.hero) elements.heroBgUrl.value = backgrounds.hero;
      if (elements.aboutBgUrl && backgrounds.about) elements.aboutBgUrl.value = backgrounds.about;
      if (elements.visionBgUrl && backgrounds.vision) elements.visionBgUrl.value = backgrounds.vision;
      if (elements.eventsBgUrl && backgrounds.events) elements.eventsBgUrl.value = backgrounds.events;
      if (elements.contactBgUrl && backgrounds.contact) elements.contactBgUrl.value = backgrounds.contact;
      
      // Mostrar vistas previas
      if (elements.heroBgPreview && backgrounds.hero) {
        elements.heroBgPreview.src = backgrounds.hero;
        elements.heroBgPreview.style.display = 'block';
      }
      if (elements.aboutBgPreview && backgrounds.about) {
        elements.aboutBgPreview.src = backgrounds.about;
        elements.aboutBgPreview.style.display = 'block';
      }
      if (elements.visionBgPreview && backgrounds.vision) {
        elements.visionBgPreview.src = backgrounds.vision;
        elements.visionBgPreview.style.display = 'block';
      }
      if (elements.eventsBgPreview && backgrounds.events) {
        elements.eventsBgPreview.src = backgrounds.events;
        elements.eventsBgPreview.style.display = 'block';
      }
      if (elements.contactBgPreview && backgrounds.contact) {
        elements.contactBgPreview.src = backgrounds.contact;
        elements.contactBgPreview.style.display = 'block';
      }
    } catch (error) {
      console.error('Error al cargar inputs de fondos:', error);
    }
  }
  
  function handlePreviewBackground(e) {
    try {
      const section = e.target.getAttribute('data-section');
      if (!section) return;
      
      const inputId = `${section}-bg-url`;
      const fileId = `${section}-bg-file`;
      const previewId = `${section}-bg-preview`;
      
      const input = document.getElementById(inputId);
      const fileInput = document.getElementById(fileId);
      const preview = document.getElementById(previewId);
      
      if (preview) {
        // Verificar si hay un archivo seleccionado
        if (fileInput && fileInput.files && fileInput.files[0]) {
          const file = fileInput.files[0];
          
          // Verificar que sea una imagen
          if (!file.type.match('image.*')) {
            utils.showToast('Error', 'Por favor selecciona un archivo de imagen válido', 'error');
            return;
          }
          
          // Crear URL temporal para la vista previa
          const reader = new FileReader();
          reader.onload = function(e) {
            if (e.target && e.target.result) {
              preview.src = e.target.result;
              preview.style.display = 'block';
            }
          };
          reader.readAsDataURL(file);
          return;
        }
      
        // Si no hay archivo, intentar con URL
        if (input) {
          const url = input.value.trim();
          
          if (!url) {
            utils.showToast('Error', 'Por favor ingresa una URL de imagen o selecciona un archivo', 'error');
            return;
          }
          
          if (!utils.isValidImageUrl(url)) {
            utils.showToast('Error', 'Por favor ingresa una URL de imagen válida', 'error');
            return;
          }
          
          // Mostrar vista previa
          preview.src = url;
          preview.style.display = 'block';
        }
      }
    } catch (error) {
      console.error('Error en handlePreviewBackground:', error);
    }
  }
  
  function handleSaveBackground(e) {
    const section = e.target.getAttribute('data-section');
    const inputId = `${section}-bg-url`;
    const fileId = `${section}-bg-file`;
    
    const input = document.getElementById(inputId);
    const fileInput = document.getElementById(fileId);
    
    // Verificar si hay un archivo seleccionado
    if (fileInput && fileInput.files && fileInput.files[0]) {
      const file = fileInput.files[0];
      
      // Verificar que sea una imagen
      if (!file.type.match('image.*')) {
        utils.showToast('Error', 'Por favor selecciona un archivo de imagen válido', 'error');
        return;
      }
      
      // Guardar la imagen localmente
      try {
        utils.saveLocalImage(file, (dataUrl) => {
          try {
            // Guardar cambio
            backgrounds[section] = dataUrl;
            localStorage.setItem('backgrounds', JSON.stringify(backgrounds));
            
            // Aplicar cambio
            loadBackgrounds();
            
            utils.showToast('¡Fondo actualizado!', `El fondo de la sección ${section} ha sido actualizado`, 'success');
          } catch (storageError) {
            console.error('Error al guardar en localStorage:', storageError);
            utils.showToast('Error', 'No hay suficiente espacio para guardar la imagen. Intente con una imagen más pequeña', 'error');
          }
        });
      } catch (error) {
        console.error('Error al guardar imagen de fondo:', error);
        utils.showToast('Error', 'No se pudo procesar la imagen', 'error');
      }
      return;
    }
    
    // Si no hay archivo, intentar con URL
    if (input) {
      const url = input.value.trim();
      
      if (!url) {
        utils.showToast('Error', 'Por favor ingresa una URL de imagen o selecciona un archivo', 'error');
        return;
      }
      
      if (!utils.isValidImageUrl(url)) {
        utils.showToast('Error', 'Por favor ingresa una URL de imagen válida', 'error');
        return;
      }
      
      // Guardar cambio
      backgrounds[section] = url;
      localStorage.setItem('backgrounds', JSON.stringify(backgrounds));
      
      // Aplicar cambio
      loadBackgrounds();
      
      utils.showToast('¡Fondo actualizado!', `El fondo de la sección ${section} ha sido actualizado`, 'success');
    }
  }
  
  function resetBackgrounds() {
    utils.showConfirmModal('¿Estás seguro de que quieres restaurar los fondos predeterminados?', () => {
      backgrounds = { ...DEFAULT_BACKGROUNDS };
      localStorage.setItem('backgrounds', JSON.stringify(backgrounds));
      
      loadBackgrounds();
      loadBackgroundInputs();
      
      utils.showToast('Fondos restaurados', 'Se han restaurado los fondos predeterminados', 'success');
    });
  }


  
  // Inicializar aplicación
  try {
    init();
  } catch (error) {
    console.error('Error al inicializar la aplicación:', error);
  }

  // Inicializar sistema de reservas
  renderTreatmentSelection('masajes');
  renderCalendar();
  
  // Configuración de la galería
  // Renderizar la galería desde los datos
  function renderGallery() {
    const galleryContainer = document.querySelector('.gallery-container');
    if (!galleryContainer) return;
    
    galleryContainer.innerHTML = '';
    
    galleryItems.forEach(item => {
      const galleryItem = document.createElement('div');
      galleryItem.className = 'gallery-item';
      galleryItem.dataset.category = item.category;
      
      galleryItem.innerHTML = `
        <div class="gallery-image">
          <img src="${item.imageUrl}" alt="${item.title}" loading="lazy">
          <div class="gallery-overlay">
            <div class="gallery-info">
              <h3>${item.title}</h3>
              <p>${item.description}</p>
            </div>
          </div>
        </div>
      `;
      
      galleryContainer.appendChild(galleryItem);
    });
  }
  
  function setupGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('gallery-lightbox');
    
    // Verificar si los elementos existen antes de continuar
    if (!galleryItems.length || !lightbox) return;
    
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxCaption = document.querySelector('.lightbox-caption');
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxPrev = document.querySelector('.lightbox-prev');
    const lightboxNext = document.querySelector('.lightbox-next');
    const galleryFilterBtns = document.querySelectorAll('.gallery-filter-btn');
    
    let currentImageIndex = 0;
    let filteredItems = [...galleryItems];
    
    // Filtrar imágenes de la galería
    if (galleryFilterBtns && galleryFilterBtns.length) {
      galleryFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const filter = btn.getAttribute('data-filter');
          if (!filter) return;
          
          // Actualizar botones activos
          galleryFilterBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          
          // Filtrar elementos
          galleryItems.forEach(item => {
            if (filter === 'todos' || item.getAttribute('data-category') === filter) {
              item.style.display = 'block';
            } else {
              item.style.display = 'none';
            }
          });
          
          // Actualizar lista filtrada para el lightbox
          filteredItems = [...galleryItems].filter(item => {
            return filter === 'todos' || item.getAttribute('data-category') === filter;
          });
        });
      });
    }
    
    // Abrir lightbox al hacer clic en una imagen
    galleryItems.forEach((item, index) => {
      item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const titleEl = item.querySelector('h3');
        const descriptionEl = item.querySelector('p');
        
        if (!img || !lightboxImage) return;
        
        lightboxImage.src = img.src;
        
        if (titleEl && descriptionEl && lightboxCaption) {
          const title = titleEl.textContent;
          const description = descriptionEl.textContent;
          lightboxCaption.textContent = `${title} - ${description}`;
        }
        
        lightbox.classList.remove('hidden');
        
        // Guardar índice de la imagen actual
        currentImageIndex = filteredItems.indexOf(item);
      });
    });
    
    // Cerrar lightbox
    if (lightboxClose) {
      lightboxClose.addEventListener('click', () => {
        lightbox.classList.add('hidden');
      });
    }
    
    // Cerrar lightbox al hacer clic fuera de la imagen
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.classList.add('hidden');
      }
    });
    
    // Navegación del lightbox
    if (lightboxPrev) {
      lightboxPrev.addEventListener('click', () => {
        if (filteredItems.length <= 1) return;
        
        currentImageIndex = (currentImageIndex - 1 + filteredItems.length) % filteredItems.length;
        const prevItem = filteredItems[currentImageIndex];
        if (!prevItem || !lightboxImage) return;
        
        const img = prevItem.querySelector('img');
        if (!img) return;
        
        lightboxImage.src = img.src;
        
        if (lightboxCaption) {
          const titleEl = prevItem.querySelector('h3');
          const descriptionEl = prevItem.querySelector('p');
          
          if (titleEl && descriptionEl) {
            const title = titleEl.textContent;
            const description = descriptionEl.textContent;
            lightboxCaption.textContent = `${title} - ${description}`;
          }
        }
      });
    }
    
    if (lightboxNext) {
      lightboxNext.addEventListener('click', () => {
        if (filteredItems.length <= 1) return;
        
        currentImageIndex = (currentImageIndex + 1) % filteredItems.length;
        const nextItem = filteredItems[currentImageIndex];
        if (!nextItem || !lightboxImage) return;
        
        const img = nextItem.querySelector('img');
        if (!img) return;
        
        lightboxImage.src = img.src;
        
        if (lightboxCaption) {
          const titleEl = nextItem.querySelector('h3');
          const descriptionEl = nextItem.querySelector('p');
          
          if (titleEl && descriptionEl) {
            const title = titleEl.textContent;
            const description = descriptionEl.textContent;
            lightboxCaption.textContent = `${title} - ${description}`;
          }
        }
      });
    }
    
    // Navegación con teclado
    document.addEventListener('keydown', (e) => {
      if (!lightbox || lightbox.classList.contains('hidden')) return;
      
      if (e.key === 'Escape') {
        lightbox.classList.add('hidden');
      } else if (e.key === 'ArrowLeft' && lightboxPrev) {
        lightboxPrev.click();
      } else if (e.key === 'ArrowRight' && lightboxNext) {
        lightboxNext.click();
      }
    });
  }
});