/**
 * Alphabet Page Controller
 */
import { PhoneticAlphabet } from '../../models/PhoneticAlphabet.js';
import { AppController } from '../../controllers/AppController.js';

// Initialize app
const app = new AppController();
app.init();

// Render phonetic alphabet
const phoneticGrid = document.getElementById('phoneticGrid');
if (phoneticGrid) {
  phoneticGrid.innerHTML = PhoneticAlphabet.letters.map(letter => `
    <div class="phonetic-card">
      <div class="phonetic-letter">${letter.letter}</div>
      <div class="phonetic-word">${letter.word}</div>
      <div class="phonetic-pronunciation">${letter.pronunciation}</div>
    </div>
  `).join('');
}

// Render numbers
const numbersGrid = document.getElementById('numbersGrid');
if (numbersGrid) {
  numbersGrid.innerHTML = PhoneticAlphabet.numbers.map(number => `
    <div class="number-card">
      <div class="number-digit">${number.digit}</div>
      <div class="number-word">${number.word}</div>
      <div class="number-pronunciation">${number.pronunciation}</div>
    </div>
  `).join('');
}

// Render examples
const exampleCards = document.getElementById('exampleCards');
if (exampleCards) {
  exampleCards.innerHTML = PhoneticAlphabet.examples.map(example => `
    <div class="example-card">
      <h4>${example.title}</h4>
      <div class="example-text">
        <strong>${example.text}</strong> → "${example.phonetic}"
      </div>
    </div>
  `).join('');
}
