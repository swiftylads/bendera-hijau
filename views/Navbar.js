/**
 * Navbar View Component - Based on test.html design
 */
export class NavbarView {
  constructor(navigation, materials) {
    this.navigation = navigation;
    this.materials = materials;
  }

  render() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const categories = this.materials ? this.materials.getCategories() : [];
    const homeItem = this.navigation.find(item => item.link === 'index.html');
    
    // Category icons and info
    const categoryInfo = {
      'Komunikasi': {
        icon: '📡',
        header: 'Dasar Komunikasi',
        items: [
          { icon: '🔤', title: 'Phonetic Alphabet', desc: 'NATO alphabet untuk radio' },
          { icon: '📞', title: 'IFR Telephony', desc: 'Komunikasi IFR standar' },
          { icon: '🌤️', title: 'METAR/TAF', desc: 'Membaca weather report' },
          { icon: '🎙️', title: 'ATIS Reading', desc: 'Memahami ATIS broadcast' }
        ]
      },
      'Penerbangan': {
        icon: '✈️',
        header: 'Pattern & Prosedur',
        items: [
          { icon: '🔄', title: 'VFR Circuit Pattern', desc: 'Standard traffic pattern' },
          { icon: '🛫', title: 'Departure Procedures', desc: 'SID dan departure standar' },
          { icon: '🛬', title: 'Approach Procedures', desc: 'STAR dan approach types' },
          { icon: '🚨', title: 'Emergency Procedures', desc: 'Handling emergencies' }
        ]
      },
      'Navigasi': {
        icon: '🧭',
        header: 'Sistem Navigasi',
        items: [
          { icon: '📍', title: 'VOR/DME Navigation', desc: 'Radio navigation basics' },
          { icon: '🛰️', title: 'GPS/RNAV', desc: 'Modern navigation systems' },
          { icon: '🗺️', title: 'Flight Planning', desc: 'Route dan fuel planning' }
        ]
      }
    };
    
    return `
      <nav>
        <a href="index.html" class="logo" onclick="navigateTo('index.html'); return false;">
          Green Flag
        </a>

        <button class="mobile-menu-btn" onclick="toggleMobileMenu()" aria-label="Toggle menu">
          <span class="material-symbols-outlined">menu</span>
        </button>

        <ul class="nav-links" id="navLinks">
          ${homeItem ? `
            <li class="nav-item">
              <a 
                href="${homeItem.link}" 
                class="nav-link ${currentPage === homeItem.link ? 'active' : ''}"
                onclick="navigateTo('${homeItem.link}'); return false;"
              >
                🏠 ${homeItem.name}
              </a>
            </li>
          ` : ''}
          
          ${categories.map(category => {
            const info = categoryInfo[category] || { icon: '📁', header: category, items: [] };
            const categoryMaterials = this.materials ? this.materials.getByCategory(category) : [];
            
            // Map materials to dropdown items
            const dropdownItems = categoryMaterials.map(m => {
              const itemInfo = info.items.find(i => i.title === m.title);
              return {
                icon: itemInfo?.icon || '📄',
                title: m.title,
                desc: itemInfo?.desc || m.description.substring(0, 30) + '...',
                link: m.link
              };
            });
            
            return `
              <li class="nav-item">
                <a href="#" class="nav-link">
                  ${info.icon} ${category} <span class="dropdown-arrow">▼</span>
                </a>
                <div class="dropdown-content">
                  <div class="dropdown-header">${info.header}</div>
                  ${dropdownItems.map(item => `
                    <a 
                      href="${item.link}" 
                      class="dropdown-item"
                      onclick="navigateTo('${item.link}'); return false;"
                    >
                      <div class="dropdown-icon">${item.icon}</div>
                      <div class="dropdown-info">
                        <div class="dropdown-title">${item.title}</div>
                        <div class="dropdown-desc">${item.desc}</div>
                      </div>
                    </a>
                  `).join('')}
                </div>
              </li>
            `;
          }).join('')}
          
          <li class="nav-item">
            <a href="#" class="nav-link">📚 Resources</a>
          </li>
        </ul>
      </nav>
    `;
  }
}
