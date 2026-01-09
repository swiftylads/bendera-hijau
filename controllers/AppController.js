/**
 * Main Application Controller
 * Handles routing and initialization
 */
import { Content } from '../models/Content.js';
import { Materials } from '../models/Materials.js';
import { NavbarView } from '../views/Navbar.js';
import { FooterView } from '../views/Footer.js';
import { LoadingScreenView } from '../views/LoadingScreen.js';

export class AppController {
  constructor() {
    this.content = Content;
    this.materials = Materials;
    this.currentPage = this.getCurrentPage();
  }

  getCurrentPage() {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    return path;
  }

  init() {
    this.loadNavbar();
    this.loadFooter();
    this.initLoadingScreen();
    this.initScrollEffects();
    this.initCardAnimations();
  }

  loadNavbar() {
    const navbarContainer = document.getElementById('navbar');
    if (navbarContainer) {
      // Build navigation from materials + home
      const navigation = [
        { name: 'Home', icon: 'home', link: 'index.html' },
        ...this.materials.getAll().map(m => ({
          name: m.title,
          icon: m.icon,
          link: m.link
        }))
      ];

      const navbarView = new NavbarView(navigation, this.materials);
      navbarContainer.innerHTML = navbarView.render();
      this.setActiveNav();
    }
  }

  loadFooter() {
    const footerContainer = document.querySelector('footer');
    if (!footerContainer) {
      const footer = document.createElement('footer');
      document.body.appendChild(footer);
      const footerView = new FooterView(this.content.footer);
      footer.innerHTML = footerView.render();
    }
  }

  initLoadingScreen() {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const loading = document.getElementById('loading');
        if (loading) {
          loading.classList.add('hide');
        }
      }, 300);
    });
  }

  initScrollEffects() {
    let lastScroll = 0;
    let ticking = false;

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const header = document.querySelector('header');
          const currentScroll = window.pageYOffset || window.scrollY;

          if (header) {
            if (currentScroll > 100) {
              header.classList.add('scrolled');
            } else {
              header.classList.remove('scrolled');
            }

            // Hide/show header on scroll - smooth transition
            if (currentScroll > lastScroll && currentScroll > 150) {
              // Scrolling down - hide navbar
              header.classList.add('hide-navbar');
            } else {
              // Scrolling up - show navbar
              header.classList.remove('hide-navbar');
            }
          }

          lastScroll = currentScroll <= 0 ? 0 : currentScroll;
          ticking = false;
        });

        ticking = true;
      }
    });
  }

  initCardAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, index * 100);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.material-card, .feature-card, .phonetic-card, .number-card, .phrase-card, .leg-card').forEach((card) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
      cardObserver.observe(card);
    });
  }

  setActiveNav() {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach((link) => {
      link.classList.remove('active');
      const href = link.getAttribute('onclick');
      if (href && href.includes(this.currentPage)) {
        link.classList.add('active');
      } else if (this.currentPage === 'index.html' && href && href.includes('index.html')) {
        link.classList.add('active');
      }
    });
  }
}

// Global navigation functions
window.navigateTo = function(page) {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  if (currentPage === page || (currentPage === '' && page === 'index.html')) {
    const navLinks = document.getElementById('navLinks');
    if (navLinks) navLinks.classList.remove('active');
    return false;
  }
  
  window.location.href = page;
};

window.toggleMobileMenu = function() {
  const navLinks = document.getElementById('navLinks');
  if (navLinks) navLinks.classList.toggle('active');
};
