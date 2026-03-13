// Santa Rosa Xochiac — Interactive JavaScript

document.addEventListener('DOMContentLoaded', function() {

  // ===== LANGUAGE TOGGLE =====
  const langToggle = document.getElementById('langToggle');
  let currentLang = localStorage.getItem('srx-lang') || 'es';

  // Decode only safe HTML entities (no arbitrary HTML)
  function decodeEntities(str) {
    const el = document.createElement('span');
    el.textContent = str;
    // Only decode known safe entities used in our translations
    return str
      .replace(/&laquo;/g, '\u00AB')
      .replace(/&raquo;/g, '\u00BB')
      .replace(/&bull;/g, '\u2022')
      .replace(/&rarr;/g, '\u2192')
      .replace(/&lt;br&gt;/g, '\n');
  }

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('srx-lang', lang);

    // Update toggle button text
    langToggle.querySelector('.lang-flag').textContent = lang === 'es' ? 'EN' : 'ES';

    // Update all translatable elements using textContent (safe, no XSS risk)
    document.querySelectorAll('[data-es][data-en]').forEach(function(el) {
      var text = el.getAttribute('data-' + lang);
      if (text) {
        var decoded = decodeEntities(text);
        // Handle <br> as actual line breaks only for elements that need them
        if (decoded.indexOf('\n') !== -1) {
          // Clear and rebuild with text nodes and <br> elements
          while (el.firstChild) el.removeChild(el.firstChild);
          var parts = decoded.split('\n');
          for (var i = 0; i < parts.length; i++) {
            el.appendChild(document.createTextNode(parts[i]));
            if (i < parts.length - 1) {
              el.appendChild(document.createElement('br'));
            }
          }
        } else {
          el.textContent = decoded;
        }
      }
    });

    // Update html lang attribute
    document.documentElement.lang = lang;
  }

  if (langToggle) {
    langToggle.addEventListener('click', function() {
      setLanguage(currentLang === 'es' ? 'en' : 'es');
    });
  }

  // Apply saved language on load
  setLanguage(currentLang);

  // ===== MAP CONTROLS TOGGLE =====
  var controlsToggle = document.getElementById('controlsToggleBtn');
  var controlsPanel = document.getElementById('routesControls');
  if (controlsToggle && controlsPanel) {
    controlsToggle.addEventListener('click', function() {
      controlsPanel.classList.toggle('collapsed');
    });
  }

  // ===== SCROLL PROGRESS BAR =====
  var progressBar = document.createElement('div');
  progressBar.style.cssText =
    'position:fixed;top:0;left:0;width:0%;height:3px;' +
    'background:linear-gradient(90deg,#A67B5B 0%,#DDE5D7 100%);' +
    'z-index:1000;transition:width 0.1s ease;';
  document.body.appendChild(progressBar);

  // ===== SCROLL EVENTS =====
  window.addEventListener('scroll', function() {
    var windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = (window.scrollY / windowHeight) * 100 + '%';
  }, { passive: true });

  // Parallax for hero background
  var heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    window.addEventListener('scroll', function() {
      if (window.pageYOffset < window.innerHeight) {
        heroBg.style.transform = 'scale(1.1) translateY(' + (window.pageYOffset * 0.3) + 'px)';
      }
    }, { passive: true });
  }

  // ===== SMOOTH SCROLL =====
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var targetElement = document.querySelector(targetId);
      if (targetElement) {
        var offset = 40;
        var targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    });
  });

  // ===== ANIMATED COUNTERS =====
  function animateNumber(element) {
    var target = parseInt(element.dataset.target);
    var duration = 2000;
    var step = target / (duration / 16);
    var current = 0;

    function updateNumber() {
      current += step;
      if (current < target) {
        element.textContent = Math.floor(current).toLocaleString();
        requestAnimationFrame(updateNumber);
      } else {
        element.textContent = target.toLocaleString() + '+';
      }
    }
    updateNumber();
  }

  var numberObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
        animateNumber(entry.target);
        entry.target.classList.add('animated');
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.impact-number').forEach(function(n) {
    numberObserver.observe(n);
  });

  // ===== FADE-IN ON SCROLL =====
  var fadeObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.experience-card, .community-grid, .direction-card, .faq-item').forEach(function(el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    fadeObserver.observe(el);
  });

  // ===== FAQ TOGGLE =====
  document.querySelectorAll('.faq-item').forEach(function(item) {
    var question = item.querySelector('.faq-question');
    var answer = item.querySelector('.faq-answer');
    question.addEventListener('click', function() {
      if (!item.hasAttribute('open')) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
      } else {
        answer.style.maxHeight = '0';
      }
    });
  });

  // ===== GALLERY LIGHTBOX =====
  document.querySelectorAll('.gallery-image').forEach(function(img) {
    img.addEventListener('click', function() {
      var self = this;
      var lightbox = document.createElement('div');
      lightbox.style.cssText =
        'position:fixed;top:0;left:0;width:100%;height:100%;' +
        'background:rgba(0,0,0,0.92);display:flex;align-items:center;' +
        'justify-content:center;z-index:2000;cursor:pointer;' +
        'animation:fadeIn 0.3s ease-out;';

      var largeImg = document.createElement('img');
      largeImg.src = self.src;
      largeImg.alt = self.alt;
      largeImg.style.cssText = 'max-width:92%;max-height:92%;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,0.5);';

      lightbox.appendChild(largeImg);
      document.body.appendChild(lightbox);
      document.body.style.overflow = 'hidden';

      function closeLightbox() {
        if (lightbox.parentNode) {
          document.body.removeChild(lightbox);
          document.body.style.overflow = '';
        }
      }

      lightbox.addEventListener('click', closeLightbox);
      document.addEventListener('keydown', function handler(e) {
        if (e.key === 'Escape') {
          closeLightbox();
          document.removeEventListener('keydown', handler);
        }
      });
    });
  });

  // ===== INTERACTIVE ROUTES MAP (Leaflet) =====
  var mapContainer = document.getElementById('routesMap');
  if (mapContainer && typeof L !== 'undefined' && typeof ROUTE_DATA !== 'undefined') {
    var map = L.map('routesMap', {
      center: [19.301, -99.297],
      zoom: 14,
      zoomControl: true,
      scrollWheelZoom: true
    });

    // Satellite + labels
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri',
      maxZoom: 18
    }).addTo(map);

    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Reference_Overlay/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 18,
      opacity: 0.6
    }).addTo(map);

    var dashPatterns = { 'IDA': null, 'CIAF': '12 8', 'REGRESO': '4 8' };
    var routeLayers = {};

    Object.keys(ROUTE_DATA).forEach(function(key) {
      var route = ROUTE_DATA[key];
      var group = L.layerGroup();

      route.segments.forEach(function(segment) {
        var popupText = document.createElement('div');
        var title = document.createElement('strong');
        title.textContent = route.name + ' \u2014 ' + segment.label;
        var desc = document.createElement('small');
        desc.textContent = route.description;
        popupText.appendChild(title);
        popupText.appendChild(document.createElement('br'));
        popupText.appendChild(desc);

        var polyline = L.polyline(segment.coords, {
          color: route.color,
          weight: 4,
          opacity: 0.9,
          dashArray: dashPatterns[segment.label] || null,
          lineCap: 'round',
          lineJoin: 'round'
        });

        polyline.bindPopup(popupText);
        group.addLayer(polyline);
      });

      group.addTo(map);
      routeLayers[key] = group;
    });

    // ===== SENDEROS Y BRECHAS =====
    var senderoLayers = {};
    if (typeof SENDERO_DATA !== 'undefined') {
      Object.keys(SENDERO_DATA).forEach(function(key) {
        var sendero = SENDERO_DATA[key];
        var popupEl = document.createElement('div');
        var title = document.createElement('strong');
        title.textContent = sendero.name_es;
        var parajes = document.createElement('small');
        parajes.textContent = sendero.parajes;
        popupEl.appendChild(title);
        popupEl.appendChild(document.createElement('br'));
        popupEl.appendChild(parajes);

        var polyline = L.polyline(sendero.coords, {
          color: sendero.color,
          weight: 3,
          opacity: 0.85,
          dashArray: '8 6',
          lineCap: 'round',
          lineJoin: 'round'
        });
        polyline.bindPopup(popupEl);

        var group = L.layerGroup([polyline]);
        group.addTo(map);
        senderoLayers[key] = group;
      });
    }

    // ===== CASETAS DE VIGILANCIA =====
    var casetaLayer = L.layerGroup();
    if (typeof CASETA_DATA !== 'undefined') {
      var casetaIcon = L.divIcon({
        className: 'caseta-marker',
        html: '<div style="background:#2d5016;color:#fff;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-size:14px;border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,0.4);">\u26D1</div>',
        iconSize: [28, 28],
        iconAnchor: [14, 14]
      });

      CASETA_DATA.forEach(function(caseta) {
        var marker = L.marker(caseta.coords, { icon: casetaIcon });
        var popupEl = document.createElement('div');
        var title = document.createElement('strong');
        title.textContent = caseta.name_es;
        var desc = document.createElement('small');
        desc.textContent = 'Caseta de vigilancia comunitaria';
        popupEl.appendChild(title);
        popupEl.appendChild(document.createElement('br'));
        popupEl.appendChild(desc);
        marker.bindPopup(popupEl);
        casetaLayer.addLayer(marker);
      });
      casetaLayer.addTo(map);
    }

    // Fit bounds (all layers)
    var allBounds = [];
    Object.values(ROUTE_DATA).forEach(function(route) {
      route.segments.forEach(function(seg) {
        seg.coords.forEach(function(c) { allBounds.push(c); });
      });
    });
    if (typeof SENDERO_DATA !== 'undefined') {
      Object.values(SENDERO_DATA).forEach(function(sendero) {
        sendero.coords.forEach(function(c) { allBounds.push(c); });
      });
    }
    if (typeof CASETA_DATA !== 'undefined') {
      CASETA_DATA.forEach(function(caseta) { allBounds.push(caseta.coords); });
    }
    if (allBounds.length > 0) {
      map.fitBounds(L.latLngBounds(allBounds).pad(0.1));
    }

    // Toggle controls — ARCAC routes
    Object.keys(ROUTE_DATA).forEach(function(key) {
      var checkbox = document.getElementById('toggle-' + key);
      if (checkbox) {
        checkbox.addEventListener('change', function() {
          if (this.checked) map.addLayer(routeLayers[key]);
          else map.removeLayer(routeLayers[key]);
        });
      }
    });

    // Toggle controls — Senderos
    Object.keys(senderoLayers).forEach(function(key) {
      var checkbox = document.getElementById('toggle-' + key);
      if (checkbox) {
        checkbox.addEventListener('change', function() {
          if (this.checked) map.addLayer(senderoLayers[key]);
          else map.removeLayer(senderoLayers[key]);
        });
      }
    });

    // Toggle controls — Casetas
    var casetaCheckbox = document.getElementById('toggle-casetas');
    if (casetaCheckbox) {
      casetaCheckbox.addEventListener('change', function() {
        if (this.checked) map.addLayer(casetaLayer);
        else map.removeLayer(casetaLayer);
      });
    }

    // ===== GROUP TOGGLE BUTTONS =====
    function setupGroupToggle(btnId, checkboxIds, layerMap) {
      var btn = document.getElementById(btnId);
      if (!btn) return;
      btn.addEventListener('click', function() {
        var allChecked = checkboxIds.every(function(id) {
          var cb = document.getElementById(id);
          return cb && cb.checked;
        });
        checkboxIds.forEach(function(id) {
          var cb = document.getElementById(id);
          if (!cb) return;
          cb.checked = !allChecked;
          var key = id.replace('toggle-', '');
          var layer = layerMap[key];
          if (layer) {
            if (cb.checked) map.addLayer(layer);
            else map.removeLayer(layer);
          }
        });
        var lang = document.documentElement.lang || 'es';
        if (allChecked) {
          btn.textContent = lang === 'es' ? 'Todo' : 'All';
          btn.classList.add('off');
        } else {
          btn.textContent = lang === 'es' ? 'Todo' : 'All';
          btn.classList.remove('off');
        }
      });
    }

    setupGroupToggle('group-arcac',
      ['toggle-ruta1', 'toggle-ruta2', 'toggle-ruta3'],
      { ruta1: routeLayers.ruta1, ruta2: routeLayers.ruta2, ruta3: routeLayers.ruta3 }
    );
    setupGroupToggle('group-senderos',
      ['toggle-r1', 'toggle-r2', 'toggle-r3', 'toggle-r4'],
      { r1: senderoLayers.r1, r2: senderoLayers.r2, r3: senderoLayers.r3, r4: senderoLayers.r4 }
    );
  }

  console.log('\uD83C\uDF32 Santa Rosa Xochiac \u2014 Loaded');
});
