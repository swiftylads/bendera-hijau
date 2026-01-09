/**
 * VFR Page Controller
 */
import { VFRPhrases } from '../../models/VFRPhrases.js';
import { AppController } from '../../controllers/AppController.js';

// Initialize app
const app = new AppController();
app.init();

// Render circuit legs
const legsGrid = document.getElementById('legsGrid');
if (legsGrid) {
  legsGrid.innerHTML = VFRPhrases.circuitLegs.map(leg => `
    <div class="leg-card">
      <div class="leg-number">${leg.number}</div>
      <h3 class="leg-title">${leg.title}</h3>
      <p class="leg-description">${leg.description}</p>
    </div>
  `).join('');
}

// Render phraseology
const phraseologyGrid = document.getElementById('phraseologyGrid');
if (phraseologyGrid) {
  phraseologyGrid.innerHTML = VFRPhrases.phraseology.map(item => {
    let html = `
      <div class="phrase-card">
        <div class="phrase-situation">${item.situation}</div>
    `;

    item.exchanges.forEach(exchange => {
      if (exchange.type === 'situation') {
        html += `
          <div class="phrase-situation">${exchange.text}</div>
        `;
      } else if (exchange.type === 'pilot') {
        html += `
          <div class="phrase-pilot">
            <div class="phrase-label pilot-label">Pilot:</div>
            "${exchange.text}"
          </div>
        `;
      } else if (exchange.type === 'atc') {
        html += `
          <div class="phrase-atc">
            <div class="phrase-label atc-label">ATC:</div>
            "${exchange.text}"
          </div>
        `;
      }
    });

    html += `</div>`;
    return html;
  }).join('');
}
