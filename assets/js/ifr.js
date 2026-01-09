/**
 * IFR Page Controller
 */
import { IFRPhrases } from '../../models/IFRPhrases.js';
import { IFRController } from '../../controllers/IFRController.js';
import { AppController } from '../../controllers/AppController.js';

// Initialize app
const app = new AppController();
app.init();

// Initialize IFR controller
const ifrController = new IFRController();
window.ifrController = ifrController; // Make available globally

// Render content sections
function renderPhraseCard(phrase) {
  let html = `
    <div class="phrase-card">
      <div class="phrase-situation">${phrase.situation}</div>
      <div class="phrase-pilot">
        <div class="phrase-label pilot-label">Pilot:</div>
        "${phrase.pilot}"
      </div>
      <div class="phrase-atc">
        <div class="phrase-label atc-label">ATC:</div>
        "${phrase.atc}"
      </div>
  `;

  if (phrase.pilotReadback) {
    html += `
      <div class="phrase-pilot">
        <div class="phrase-label pilot-label">Pilot:</div>
        "${phrase.pilotReadback}"
      </div>
    `;
  }

  if (phrase.atcResponse) {
    html += `
      <div class="phrase-atc">
        <div class="phrase-label atc-label">ATC:</div>
        "${phrase.atcResponse}"
      </div>
    `;
  }

  if (phrase.pilotFinal) {
    html += `
      <div class="phrase-pilot">
        <div class="phrase-label pilot-label">Pilot:</div>
        "${phrase.pilotFinal}"
      </div>
    `;
  }

  // Handle additional exchanges
  if (phrase.situation2) {
    html += `
      <div class="phrase-situation">${phrase.situation2}</div>
    `;
  }

  if (phrase.atc2) {
    html += `
      <div class="phrase-atc">
        <div class="phrase-label atc-label">ATC:</div>
        "${phrase.atc2}"
      </div>
    `;
  }

  if (phrase.pilot2) {
    html += `
      <div class="phrase-pilot">
        <div class="phrase-label pilot-label">Pilot:</div>
        "${phrase.pilot2}"
      </div>
    `;
  }

  if (phrase.atc3) {
    html += `
      <div class="phrase-atc">
        <div class="phrase-label atc-label">ATC:</div>
        "${phrase.atc3}"
      </div>
    `;
  }

  if (phrase.pilot3) {
    html += `
      <div class="phrase-pilot">
        <div class="phrase-label pilot-label">Pilot:</div>
        "${phrase.pilot3}"
      </div>
    `;
  }

  if (phrase.atc4) {
    html += `
      <div class="phrase-atc">
        <div class="phrase-label atc-label">ATC:</div>
        "${phrase.atc4}"
      </div>
    `;
  }

  if (phrase.pilot4) {
    html += `
      <div class="phrase-pilot">
        <div class="phrase-label pilot-label">Pilot:</div>
        "${phrase.pilot4}"
      </div>
    `;
  }

  if (phrase.pilot5) {
    html += `
      <div class="phrase-pilot">
        <div class="phrase-label pilot-label">Pilot:</div>
        "${phrase.pilot5}"
      </div>
    `;
  }

  if (phrase.atc5) {
    html += `
      <div class="phrase-atc">
        <div class="phrase-label atc-label">ATC:</div>
        "${phrase.atc5}"
      </div>
    `;
  }

  if (phrase.pilot6) {
    html += `
      <div class="phrase-pilot">
        <div class="phrase-label pilot-label">Pilot:</div>
        "${phrase.pilot6}"
      </div>
    `;
  }

  if (phrase.atc6) {
    html += `
      <div class="phrase-atc">
        <div class="phrase-label atc-label">ATC:</div>
        "${phrase.atc6}"
      </div>
    `;
  }

  if (phrase.pilot7) {
    html += `
      <div class="phrase-pilot">
        <div class="phrase-label pilot-label">Pilot:</div>
        "${phrase.pilot7}"
      </div>
    `;
  }

  html += `</div>`;
  return html;
}

function renderSection(sectionId, title, phrases) {
  return `
    <div id="${sectionId}" class="content-section">
      <div class="phrase-category">
        <h2 class="category-title">${title}</h2>
        <div class="phrases-grid">
          ${phrases.map(phrase => renderPhraseCard(phrase)).join('')}
        </div>
      </div>
    </div>
  `;
}

// Render all sections
const contentSections = document.getElementById('contentSections');
if (contentSections) {
  let html = '';

  // Departure sections
  html += renderSection('delivery', 'Delivery', IFRPhrases.departure.delivery);
  html += renderSection('ground', 'Ground', IFRPhrases.departure.ground);
  html += renderSection('tower', 'Tower', IFRPhrases.departure.tower);
  html += renderSection('approach', 'Approach', IFRPhrases.departure.approach);
  html += renderSection('enroute', 'En Route', IFRPhrases.departure.enroute);

  // Arrival sections
  html += renderSection('arrival-enroute', 'En Route', IFRPhrases.arrival.enroute);
  html += renderSection('arrival-approach', 'Approach', IFRPhrases.arrival.approach);
  html += renderSection('arrival-tower', 'Tower', IFRPhrases.arrival.tower);
  html += renderSection('arrival-ground', 'Ground', IFRPhrases.arrival.ground);

  contentSections.innerHTML = html;
}

// Initialize IFR controller after content is rendered
ifrController.init();
