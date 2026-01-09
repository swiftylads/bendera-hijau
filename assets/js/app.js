/**
 * Main Application Entry Point
 * Based on test.html functionality
 */
import { AppController } from '../../controllers/AppController.js';
import { Materials } from '../../models/Materials.js';
import { MaterialCardView } from '../../views/MaterialCard.js';

let allMaterials = [];
let currentFilter = 'all';

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const app = new AppController();
  app.init();
  window.app = app;

  // Render materials on homepage
  allMaterials = Materials.getAll();
  renderCategoryFilters();
  renderMaterials(allMaterials);
});

function renderCategoryFilters() {
  const categoryFilters = document.getElementById('categoryFilters');
  if (!categoryFilters) return;

  const categories = ['all', ...Materials.getCategories().map(c => c.toLowerCase())];
  const categoryLabels = {
    'all': 'Semua Materi',
    'komunikasi': 'Komunikasi',
    'penerbangan': 'Penerbangan',
    'navigasi': 'Navigasi'
  };
  
  categoryFilters.innerHTML = categories.map(category => `
    <button 
      class="filter-btn ${category === currentFilter ? 'active' : ''}"
      onclick="filterCards('${category}')"
    >
      ${categoryLabels[category] || category}
    </button>
  `).join('');
}

function renderMaterials(materials) {
  const materialsGrid = document.getElementById('materialsGrid');
  if (!materialsGrid) return;

  if (materials.length === 0) {
    materialsGrid.innerHTML = '<p class="no-materials">Tidak ada materi yang ditemukan.</p>';
    return;
  }

  materialsGrid.innerHTML = materials.map(material => {
    const cardView = new MaterialCardView(material);
    return cardView.render();
  }).join('');

  // Re-initialize animations
  if (window.app) {
    window.app.initCardAnimations();
  }
}

// Global functions
window.filterCards = function(category) {
  currentFilter = category;
  
  // Update filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
    const btnText = btn.textContent.trim().toLowerCase();
    const categoryText = category === 'all' ? 'semua materi' : category;
    if (btnText === categoryText) {
      btn.classList.add('active');
    }
  });

  // Filter materials by showing/hiding cards
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
      const link = card.closest('.material-card-link');
      if (link) {
        link.style.display = 'block';
        card.classList.remove('hidden');
      }
    } else {
      const link = card.closest('.material-card-link');
      if (link) {
        link.style.display = 'none';
        card.classList.add('hidden');
      }
    }
  });

  // Apply search filter if any
  const searchInput = document.getElementById('searchInput');
  if (searchInput && searchInput.value.trim()) {
    window.searchCards();
  }
};

window.searchCards = function() {
  const searchInput = document.getElementById('searchInput');
  if (!searchInput) return;

  const searchTerm = searchInput.value.trim().toLowerCase();
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    const description = card.querySelector('p').textContent.toLowerCase();
    const category = card.dataset.category;
    
    let shouldShow = true;
    
    // Apply category filter
    if (currentFilter !== 'all' && category !== currentFilter) {
      shouldShow = false;
    }
    
    // Apply search filter
    if (searchTerm && !title.includes(searchTerm) && !description.includes(searchTerm)) {
      shouldShow = false;
    }
    
    const link = card.closest('.material-card-link');
    if (link) {
      if (shouldShow) {
        link.style.display = 'block';
        card.classList.remove('hidden');
      } else {
        link.style.display = 'none';
        card.classList.add('hidden');
      }
    }
  });
};

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.nav-item')) {
    document.querySelectorAll('.nav-item').forEach(item => {
      item.classList.remove('active');
    });
  }
});

// Request Materi Form Handler
window.handleRequestSubmit = function(event) {
  event.preventDefault();
  
  const form = event.target;
  const formData = new FormData(form);
  const data = {
    title: formData.get('title'),
    description: formData.get('description')
  };

  // Option 1: Google Forms (Recommended)
  // Ganti URL ini dengan Google Forms URL Anda
  // Cara membuat: https://docs.google.com/forms -> Buat form baru -> Ambil link
  const GOOGLE_FORMS_URL = ''; // Isi dengan Google Forms URL jika ada
  
  // Option 2: Mailto (Fallback)
  const EMAIL = 'your-email@example.com'; // Ganti dengan email Anda
  const SUBJECT = encodeURIComponent(`Request Materi: ${data.title}`);
  const BODY = encodeURIComponent(
    `Judul Materi: ${data.title}\n\n` +
    `Deskripsi:\n${data.description}`
  );

  if (GOOGLE_FORMS_URL) {
    // Redirect ke Google Forms dengan pre-filled data
    // Note: Google Forms perlu dikonfigurasi dengan field yang sesuai
    window.open(GOOGLE_FORMS_URL, '_blank');
    showRequestSuccess(form);
  } else {
    // Menggunakan mailto sebagai fallback
    const mailtoLink = `mailto:${EMAIL}?subject=${SUBJECT}&body=${BODY}`;
    window.location.href = mailtoLink;
    showRequestSuccess(form);
  }
};

function showRequestSuccess(form) {
  // Disable form
  form.querySelectorAll('input, textarea, select, button').forEach(el => {
    el.disabled = true;
  });

  // Show success message
  const successMsg = document.createElement('div');
  successMsg.className = 'request-success show';
  successMsg.innerHTML = `
    <div style="font-size: 3rem; margin-bottom: 1rem;">✅</div>
    <h3 style="font-family: var(--font-heading); margin-bottom: 0.5rem; color: var(--secondary-cyan);">
      Request Terkirim!
    </h3>
    <p>Terima kasih atas kontribusi Anda. Kami akan mempertimbangkan request materi ini.</p>
  `;
  
  form.style.display = 'none';
  form.parentElement.appendChild(successMsg);

  // Reset form after 5 seconds (optional)
  setTimeout(() => {
    form.reset();
    form.style.display = 'flex';
    successMsg.remove();
    form.querySelectorAll('input, textarea, select, button').forEach(el => {
      el.disabled = false;
    });
  }, 5000);
}
