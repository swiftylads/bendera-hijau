/**
 * Footer View Component
 */
export class FooterView {
  constructor(footerData) {
    this.footerData = footerData;
  }

  render() {
    return `
      <footer>
        <div class="container">
          <p>${this.footerData.text}</p>
        </div>
      </footer>
    `;
  }
}
