# Green Flag - Flight Sim Learning Platform

Platform pembelajaran untuk flight simmers pemula yang menyediakan materi-materi dasar penerbangan dan komunikasi ATC.

## 🎯 Konsep

Website ini fokus pada **materi pembelajaran** yang mudah diakses dan dipahami. Setiap materi dirancang untuk membantu flight simmers pemula memahami dasar-dasar penting dalam flight simulation.

## 🏗️ Struktur Project (MVC Architecture)

```
Green Flag/
├── models/              # Data models
│   ├── Materials.js     # ⭐ Central model untuk semua materi
│   ├── PhoneticAlphabet.js
│   ├── IFRPhrases.js
│   ├── VFRPhrases.js
│   └── Content.js
├── views/               # View components
│   ├── templates/       # HTML templates
│   ├── Navbar.js
│   ├── Footer.js
│   ├── MaterialCard.js  # ⭐ Component untuk menampilkan materi
│   └── LoadingScreen.js
├── controllers/         # Controllers
│   ├── AppController.js
│   └── IFRController.js
├── assets/              # Static assets
│   ├── css/
│   │   ├── main.css
│   │   ├── pages.css
│   │   └── materials.css  # ⭐ Styles untuk material cards
│   ├── js/
│   └── img/
└── *.html               # HTML pages
```

## 📚 Menambahkan Materi Baru

Sangat mudah! Cukup edit file `models/Materials.js`:

```javascript
{
  id: 'new-material',
  title: 'Judul Materi',
  icon: 'icon_name',  // Material Symbols icon
  description: 'Deskripsi singkat materi',
  category: 'Kategori',  // e.g., 'Komunikasi', 'Penerbangan'
  difficulty: 'Pemula',  // 'Pemula', 'Menengah', atau 'Lanjut'
  estimatedTime: '30 menit',
  link: 'new-material.html',
  available: true,
  order: 4  // Urutan tampil
}
```

Setelah menambahkan di `Materials.js`:
1. Materi akan otomatis muncul di homepage
2. Materi akan otomatis muncul di navigation
3. Tidak perlu edit file lain!

## 📝 Materi yang Tersedia

1. **Phonetic Alphabet** - Pelajari NATO Phonetic Alphabet
2. **IFR Telephony** - Komunikasi IFR lengkap
3. **VFR Circuit Pattern** - Standard circuit pattern dan komunikasi VFR

## 🎨 Design Features

- **Material-Based Design**: Fokus pada materi pembelajaran
- **Easy to Expand**: Struktur yang mudah untuk menambah materi baru
- **Clean & Professional**: Design modern dan profesional
- **Responsive**: Fully responsive untuk semua device

## 🚀 Getting Started

1. Open `index.html` in a modern web browser
2. No build process required - pure vanilla JavaScript with ES6 modules
3. Semua materi ditampilkan otomatis dari `Materials.js`

## 🛠️ Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern CSS with custom properties
- **Vanilla JavaScript**: ES6 modules
- **Material Symbols**: Google Material Icons

## 📦 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 📄 License

© 2026 Green Flag Community v3.0
