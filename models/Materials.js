/**
 * Materials Model
 * Centralized model for all learning materials
 * Easy to add new materials in the future
 */
export const Materials = {
  // All available learning materials
  materials: [
    {
      id: 'phonetic-alphabet',
      title: 'Phonetic Alphabet',
      icon: 'abc',
      description: 'Pelajari NATO Phonetic Alphabet untuk komunikasi radio yang jelas dan profesional.',
      category: 'Komunikasi',
      difficulty: 'Pemula',
      estimatedTime: '15 menit',
      link: 'alphabet.html',
      available: true,
      order: 1
    },
    {
      id: 'ifr-telephony',
      title: 'IFR Telephony',
      icon: 'radar',
      description: 'Panduan lengkap komunikasi IFR dari delivery hingga landing. Cocok untuk penerbangan instrument.',
      category: 'Komunikasi',
      difficulty: 'Menengah',
      estimatedTime: '30 menit',
      link: 'ifr.html',
      available: true,
      order: 2
    },
    {
      id: 'vfr-circuit',
      title: 'VFR Circuit Pattern',
      icon: 'flight',
      description: 'Pelajari standard circuit pattern dan komunikasi VFR untuk latihan di bandara.',
      category: 'Penerbangan',
      difficulty: 'Pemula',
      estimatedTime: '20 menit',
      link: 'vfr.html',
      available: true,
      order: 3
    },
    {
      id: 'vor-dme',
      title: 'VOR/DME Navigation',
      icon: 'place',
      description: 'Dasar-dasar radio navigation menggunakan VOR dan DME untuk route tracking.',
      category: 'Navigasi',
      difficulty: 'Menengah',
      estimatedTime: '35 menit',
      link: '#',
      available: true,
      order: 4
    },
    {
      id: 'gps-rnav',
      title: 'GPS & RNAV',
      icon: 'satellite',
      description: 'Modern navigation dengan GPS dan RNAV procedures untuk precision navigation.',
      category: 'Navigasi',
      difficulty: 'Lanjut',
      estimatedTime: '45 menit',
      link: '#',
      available: false,
      order: 5
    }
    // Add new materials here in the future:
    // {
    //   id: 'new-material',
    //   title: 'New Material Title',
    //   icon: 'icon_name',
    //   description: 'Description here',
    //   category: 'Category',
    //   difficulty: 'Pemula/Menengah/Lanjut',
    //   estimatedTime: 'X menit',
    //   link: 'new-material.html',
    //   available: true,
    //   order: 4
    // }
  ],

  // Get materials by category
  getByCategory(category) {
    return this.materials.filter(m => m.category === category && m.available);
  },

  // Get all categories
  getCategories() {
    return [...new Set(this.materials.filter(m => m.available).map(m => m.category))];
  },

  // Get material by ID
  getById(id) {
    return this.materials.find(m => m.id === id && m.available);
  },

  // Get all available materials sorted by order
  getAll() {
    return this.materials.filter(m => m.available).sort((a, b) => a.order - b.order);
  }
};
