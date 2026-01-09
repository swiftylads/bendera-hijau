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

// Global function for dropdown toggle
window.toggleCategoryDropdown = function(event, category) {
  event.preventDefault();
  event.stopPropagation();
  
  const dropdown = event.target.closest('.nav-item');
  if (!dropdown) return;
  
  // Close other dropdowns
  document.querySelectorAll('.nav-item').forEach(item => {
    if (item !== dropdown) {
      item.classList.remove('active');
    }
  });
  
  // Toggle current dropdown
  dropdown.classList.toggle('active');
};

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.nav-item')) {
    document.querySelectorAll('.nav-item').forEach(item => {
      item.classList.remove('active');
    });
  }
});
