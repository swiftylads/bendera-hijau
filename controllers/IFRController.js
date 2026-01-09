/**
 * IFR Page Controller
 */
import { IFRPhrases } from '../models/IFRPhrases.js';

export class IFRController {
  constructor() {
    this.currentMode = 'departure';
    this.currentSection = 'delivery';
  }

  init() {
    this.renderTabs();
    this.showSection('delivery');
    this.attachEventListeners();
  }

  renderTabs() {
    const flowTabs = document.getElementById('flowTabs');
    const modeToggle = document.getElementById('modeToggle');

    if (!flowTabs || !modeToggle) return;

    if (this.currentMode === 'departure') {
      this.renderDepartureTabs(flowTabs);
      modeToggle.textContent = 'Arrival';
      modeToggle.classList.remove('departure-mode');
    } else {
      this.renderArrivalTabs(flowTabs);
      modeToggle.textContent = 'Departure';
      modeToggle.classList.add('departure-mode');
    }
  }

  renderDepartureTabs(container) {
    const tabs = ['delivery', 'ground', 'tower', 'approach', 'enroute'];
    container.innerHTML = tabs.map((tab, index) => `
      <button 
        class="nav-tab ${index === 0 ? 'active' : ''}" 
        onclick="ifrController.showSection('${tab}', this)"
        data-flow="departure"
      >
        ${this.capitalizeFirst(tab)}
      </button>
    `).join('');
  }

  renderArrivalTabs(container) {
    const tabs = ['arrival-enroute', 'arrival-approach', 'arrival-tower', 'arrival-ground'];
    container.innerHTML = tabs.map((tab, index) => `
      <button 
        class="nav-tab ${index === 0 ? 'active' : ''}" 
        onclick="ifrController.showSection('${tab}', this)"
        data-flow="arrival"
      >
        ${this.getTabLabel(tab)}
      </button>
    `).join('');
  }

  getTabLabel(tab) {
    const labels = {
      'arrival-enroute': 'En Route',
      'arrival-approach': 'Approach',
      'arrival-tower': 'Tower',
      'arrival-ground': 'Ground'
    };
    return labels[tab] || this.capitalizeFirst(tab);
  }

  capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  toggleMode() {
    this.currentMode = this.currentMode === 'departure' ? 'arrival' : 'departure';
    this.renderTabs();
    
    if (this.currentMode === 'departure') {
      this.showSection('delivery');
    } else {
      this.showSection('arrival-enroute');
    }
  }

  showSection(sectionId, clickedElement = null) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
      section.classList.remove('active');
    });

    // Remove active class from all tabs
    document.querySelectorAll('.nav-tab').forEach(tab => {
      tab.classList.remove('active');
    });

    // Show selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
      selectedSection.classList.add('active');
    }

    // Add active class to clicked tab
    const clickedTab = clickedElement || document.querySelector(`[onclick*="'${sectionId}'"]`);
    if (clickedTab) {
      clickedTab.classList.add('active');
    }

    // Scroll to top
    const container = document.querySelector('.ifr-container');
    if (container) {
      container.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    this.currentSection = sectionId;
  }

  attachEventListeners() {
    const modeToggle = document.getElementById('modeToggle');
    if (modeToggle) {
      modeToggle.onclick = () => this.toggleMode();
    }
  }
}
