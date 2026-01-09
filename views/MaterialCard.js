/**
 * Material Card View Component
 * Based on test.html design
 */
export class MaterialCardView {
  constructor(material) {
    this.material = material;
  }

  render() {
    const difficultyClass = {
      'Pemula': '',
      'Menengah': 'intermediate',
      'Lanjut': 'advanced'
    };

    // Icon mapping untuk display di card
    const iconDisplay = {
      'abc': '🔤',
      'radar': '📞',
      'flight': '🔄',
      'place': '📍',
      'satellite': '🛰️'
    };

    const displayIcon = iconDisplay[this.material.icon] || '📄';
    const difficultyBadgeClass = difficultyClass[this.material.difficulty] || '';

    return `
      <a href="${this.material.link}" class="material-card-link" onclick="navigateTo('${this.material.link}'); return false;">
        <div class="card" data-category="${this.material.category.toLowerCase()}">
          <div class="card-header">
            <div class="card-icon">${displayIcon}</div>
            <div class="card-badges">
              <span class="badge ${difficultyBadgeClass}">${this.material.difficulty}</span>
              <span class="badge">${this.material.category}</span>
            </div>
          </div>
          <h3>${this.material.title}</h3>
          <p>${this.material.description}</p>
          <div class="card-footer">
            <div class="duration">⏱️ ${this.material.estimatedTime}</div>
            <span class="card-link">Mulai →</span>
          </div>
        </div>
      </a>
    `;
  }
}
