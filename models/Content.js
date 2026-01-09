/**
 * Content Model
 * Contains all page content and metadata
 */
export const Content = {
  site: {
    name: 'Green Flag',
    tagline: 'Platform Pembelajaran Flight Sim',
    description: 'Materi-materi dasar untuk membantu flight simmers pemula memahami dasar-dasar penerbangan dan komunikasi ATC.',
    discord: 'https://discord.gg/vMrjWgBM'
  },
  
  pages: {
    home: {
      title: 'Green Flag - Materi Pembelajaran Flight Sim',
      hero: {
        title: 'Materi Pembelajaran Flight Sim',
        subtitle: 'Pelajari dasar-dasar penerbangan, komunikasi ATC, dan teknik-teknik penting untuk flight simmers pemula',
        image: 'assets/img/night_hires.jpeg'
      }
    },
    alphabet: {
      title: 'Phonetic Alphabet - Green Flag',
      intro: {
        title: 'Mengapa Phonetic Alphabet Penting?',
        description: 'Phonetic Alphabet atau NATO Phonetic Alphabet adalah sistem standar internasional yang digunakan untuk mengeja huruf dengan jelas melalui komunikasi radio. Dalam dunia penerbangan, kejelasan komunikasi adalah hal yang sangat krusial untuk keselamatan.'
      }
    },
    vfr: {
      title: 'VFR Circuit Pattern - Green Flag',
      sectionTitle: 'Circuit Pattern',
      sectionSubtitle: 'Lima bagian utama dalam standard circuit pattern'
    },
    ifr: {
      title: 'IFR Telephony - Green Flag'
    }
  },
  
  navigation: [
    { name: 'Home', icon: 'home', link: 'index.html' }
    // Navigation items will be dynamically generated from Materials
  ],
  
  footer: {
    text: '© 2026 Green Flag Community v3.0',
    discord: 'https://discord.gg/vMrjWgBM'
  }
};
