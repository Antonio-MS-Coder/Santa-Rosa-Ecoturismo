// Santa Rosa Ecoturismo - Interactive JavaScript

document.addEventListener('DOMContentLoaded', function() {

  // Tab Navigation
  const tabs = document.querySelectorAll('.tab');
  const panels = document.querySelectorAll('.tab-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetTab = tab.dataset.tab;

      // Remove active class from all tabs and panels
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      // Add active class to clicked tab and corresponding panel
      tab.classList.add('active');
      const targetPanel = document.getElementById(`panel-${targetTab}`);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });

  // Animated Counter for Impact Numbers
  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
  };

  const animateNumber = (element) => {
    const target = parseInt(element.dataset.target);
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const updateNumber = () => {
      current += step;
      if (current < target) {
        element.textContent = Math.floor(current).toLocaleString();
        requestAnimationFrame(updateNumber);
      } else {
        element.textContent = target.toLocaleString() + (element.textContent.includes('%') ? '%' : '+');
      }
    };

    updateNumber();
  };

  const numberObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
        animateNumber(entry.target);
        entry.target.classList.add('animated');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.impact-number').forEach(number => {
    numberObserver.observe(number);
  });

  // Form Submission Handler
  const reservationForm = document.getElementById('reservationForm');
  if (reservationForm) {
    reservationForm.addEventListener('submit', function(e) {
      e.preventDefault();

      // Get form data
      const formData = new FormData(reservationForm);
      const data = Object.fromEntries(formData);

      // Here you would normally send the data to a server
      // For now, we'll just show a success message
      alert(`¡Gracias por tu reserva, ${data.name}! Te contactaremos pronto al correo ${data.email} para confirmar tu experiencia "${data.package}".`);

      // Reset form
      reservationForm.reset();

      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Smooth Scroll for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const offset = 80; // Account for any fixed headers
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Lazy Loading Images - Now using real images
  const imageObserverOptions = {
    rootMargin: '50px 0px',
    threshold: 0.01
  };

  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        // Add a fade-in animation when images load
        img.style.animation = 'fadeIn 0.6s ease-out';
        imageObserver.unobserve(img);
      }
    });
  }, imageObserverOptions);

  document.querySelectorAll('img[loading="lazy"]').forEach(img => {
    imageObserver.observe(img);
  });

  // Mobile Menu Toggle (if needed in future)
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
      document.body.classList.toggle('menu-open');
    });
  }

  // Date Input - Set minimum date to today
  const dateInput = document.getElementById('date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }

  // Add hover effect to package cards
  const packageCards = document.querySelectorAll('.package-card');
  packageCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px)';
    });

    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });

  // FAQ Smooth Toggle Animation
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    question.addEventListener('click', () => {
      // Smooth height animation for answer
      if (!item.hasAttribute('open')) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
      } else {
        answer.style.maxHeight = '0';
      }
    });
  });

  // Scroll Progress Indicator (optional enhancement)
  const createScrollProgress = () => {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 0%;
      height: 3px;
      background: linear-gradient(90deg, var(--cacao) 0%, var(--bosque) 100%);
      z-index: 1000;
      transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      progressBar.style.width = scrolled + '%';
    });
  };

  createScrollProgress();

  // Parallax Effect for Hero Image
  const heroImage = document.querySelector('.hero-image');
  if (heroImage) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.3;
      if (scrolled < 800) {
        heroImage.style.transform = `translateY(${rate}px)`;
      }
    });
  }

  // Calendar Card Hover Effects
  const calendarCards = document.querySelectorAll('.calendar-card');
  calendarCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-6px) scale(1.02)';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)';
    });
  });

  // Auto-hide Sticky CTA on Scroll Up (Mobile)
  let lastScroll = 0;
  const stickyCTA = document.querySelector('.sticky-cta');

  if (stickyCTA && window.innerWidth < 768) {
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > lastScroll && currentScroll > 100) {
        // Scrolling down
        stickyCTA.style.transform = 'translateY(100%)';
      } else {
        // Scrolling up
        stickyCTA.style.transform = 'translateY(0)';
      }

      lastScroll = currentScroll;
    });
  }

  // Add Loading State to Buttons
  document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
      if (this.href && this.href.includes('stripe.com')) {
        this.classList.add('loading');
        this.innerHTML = '<span>Procesando...</span>';
      }
    });
  });

  // Accessibility: Announce Tab Changes
  const announceTabChange = (tabName) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.className = 'sr-only';
    announcement.textContent = `Mostrando paquetes de ${tabName}`;
    document.body.appendChild(announcement);

    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  };

  // Enhanced Tab Keyboard Navigation
  tabs.forEach((tab, index) => {
    tab.setAttribute('role', 'tab');
    tab.setAttribute('tabindex', tab.classList.contains('active') ? '0' : '-1');

    tab.addEventListener('keydown', (e) => {
      let newIndex;

      if (e.key === 'ArrowRight') {
        newIndex = (index + 1) % tabs.length;
      } else if (e.key === 'ArrowLeft') {
        newIndex = (index - 1 + tabs.length) % tabs.length;
      } else if (e.key === 'Home') {
        newIndex = 0;
      } else if (e.key === 'End') {
        newIndex = tabs.length - 1;
      }

      if (newIndex !== undefined) {
        e.preventDefault();
        tabs[newIndex].click();
        tabs[newIndex].focus();
      }
    });
  });

  // Initialize Gallery Lightbox (simple version)
  const galleryImages = document.querySelectorAll('.gallery-image');
  galleryImages.forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', function() {
      const lightbox = document.createElement('div');
      lightbox.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
        cursor: pointer;
      `;

      const largeImg = document.createElement('img');
      largeImg.src = this.src;
      largeImg.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        border-radius: 16px;
      `;

      lightbox.appendChild(largeImg);
      document.body.appendChild(lightbox);
      document.body.style.overflow = 'hidden';

      lightbox.addEventListener('click', () => {
        document.body.removeChild(lightbox);
        document.body.style.overflow = '';
      });

      // ESC key to close
      const closeOnEsc = (e) => {
        if (e.key === 'Escape') {
          document.body.removeChild(lightbox);
          document.body.style.overflow = '';
          document.removeEventListener('keydown', closeOnEsc);
        }
      };
      document.addEventListener('keydown', closeOnEsc);
    });
  });

  // Performance: Debounce scroll events
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Apply debounce to scroll-based functions
  const debouncedScroll = debounce(() => {
    // Add any scroll-based logic here
  }, 100);

  window.addEventListener('scroll', debouncedScroll, { passive: true });

  // Calendar Modal Functionality
  const calendarModal = document.getElementById('calendarModal');
  const openCalendarBtn = document.getElementById('openCalendarModal');
  const closeModalBtn = document.querySelector('.close-modal');
  const calendarFilters = document.querySelectorAll('.calendar-filter');
  const calendarEvents = document.querySelectorAll('.calendar-event');

  // Open calendar modal
  if (openCalendarBtn && calendarModal) {
    openCalendarBtn.addEventListener('click', (e) => {
      e.preventDefault();
      calendarModal.style.display = 'block';
      document.body.style.overflow = 'hidden';

      // Animate entrance
      setTimeout(() => {
        calendarModal.classList.add('active');
      }, 10);
    });
  }

  // Close calendar modal
  if (closeModalBtn && calendarModal) {
    closeModalBtn.addEventListener('click', () => {
      closeCalendarModal();
    });
  }

  // Close modal when clicking outside
  if (calendarModal) {
    calendarModal.addEventListener('click', (e) => {
      if (e.target === calendarModal) {
        closeCalendarModal();
      }
    });

    // ESC key to close modal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && calendarModal.style.display === 'block') {
        closeCalendarModal();
      }
    });
  }

  function closeCalendarModal() {
    if (calendarModal) {
      calendarModal.classList.remove('active');
      setTimeout(() => {
        calendarModal.style.display = 'none';
        document.body.style.overflow = '';
      }, 300);
    }
  }

  // Calendar Filter Functionality
  calendarFilters.forEach(filter => {
    filter.addEventListener('click', () => {
      // Update active filter
      calendarFilters.forEach(f => f.classList.remove('active'));
      filter.classList.add('active');

      const filterValue = filter.dataset.filter;

      // Show/hide events based on filter
      calendarEvents.forEach(event => {
        if (filterValue === 'all') {
          event.classList.remove('hidden');
          event.style.display = 'flex';
        } else {
          if (event.dataset.category === filterValue) {
            event.classList.remove('hidden');
            event.style.display = 'flex';
          } else {
            event.classList.add('hidden');
            event.style.display = 'none';
          }
        }
      });

      // Animate visible events
      const visibleEvents = document.querySelectorAll('.calendar-event:not(.hidden)');
      visibleEvents.forEach((event, index) => {
        event.style.animation = 'none';
        setTimeout(() => {
          event.style.animation = `fadeInUp 0.5s ease-out ${index * 0.05}s`;
        }, 10);
      });
    });
  });

  // Add click event to calendar events for reservation
  calendarEvents.forEach(event => {
    event.addEventListener('click', () => {
      const eventTitle = event.querySelector('h4').textContent;
      const eventDate = event.querySelector('.event-day').textContent;
      const eventMonth = event.closest('.calendar-month').querySelector('.calendar-month-title').textContent;

      // Close modal and scroll to reservation form
      closeCalendarModal();

      setTimeout(() => {
        // Scroll to reservation form
        const reservationForm = document.getElementById('reservar');
        if (reservationForm) {
          reservationForm.scrollIntoView({ behavior: 'smooth' });

          // Pre-fill form message with event details
          setTimeout(() => {
            const messageField = document.getElementById('message');
            if (messageField) {
              messageField.value = `Me interesa la actividad: ${eventTitle} - ${eventDate} de ${eventMonth}`;
            }
          }, 500);
        }
      }, 400);
    });
  });

  // Add month navigation (optional enhancement)
  const addMonthNavigation = () => {
    const months = document.querySelectorAll('.calendar-month');
    if (months.length > 0) {
      const navContainer = document.createElement('div');
      navContainer.className = 'month-navigation';
      navContainer.style.cssText = `
        position: sticky;
        top: 0;
        background: var(--blanco);
        padding: 1rem;
        border-bottom: 2px solid var(--salvia);
        margin-bottom: 1rem;
        z-index: 10;
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
      `;

      months.forEach(month => {
        const monthTitle = month.querySelector('.calendar-month-title').textContent;
        const navBtn = document.createElement('button');
        navBtn.textContent = monthTitle.split(' ')[0]; // Get just month name
        navBtn.className = 'month-nav-btn';
        navBtn.style.cssText = `
          padding: 0.5rem 1rem;
          background: var(--arena);
          border: 1px solid var(--salvia);
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: var(--transition);
        `;

        navBtn.addEventListener('click', () => {
          month.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });

        navBtn.addEventListener('mouseenter', () => {
          navBtn.style.background = 'var(--salvia)';
        });

        navBtn.addEventListener('mouseleave', () => {
          navBtn.style.background = 'var(--arena)';
        });

        navContainer.appendChild(navBtn);
      });

      const modalBody = document.querySelector('.calendar-modal-body');
      if (modalBody) {
        modalBody.insertBefore(navContainer, modalBody.firstChild);
      }
    }
  };

  // Initialize month navigation when modal opens
  if (openCalendarBtn) {
    openCalendarBtn.addEventListener('click', () => {
      setTimeout(() => {
        if (!document.querySelector('.month-navigation')) {
          addMonthNavigation();
        }
      }, 100);
    });
  }

  console.log('🌲 Santa Rosa Ecoturismo - Sitio cargado exitosamente');
});