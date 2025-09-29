// Loading animation
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loading").classList.add("hide");
  }, 150);
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Header scroll effect
let lastScroll = 0;
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    header.style.background =
      "linear-gradient(180deg, rgba(10, 25, 47, 0.98), rgba(17, 45, 78, 0.98))";
    header.style.boxShadow = "0 8px 32px rgba(0,0,0,0.3)";
    header.style.transform = "translateY(0)";
  } else {
    header.style.background =
      "linear-gradient(180deg, rgba(10, 25, 47, 0.95), rgba(17, 45, 78, 0.95))";
    header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
  }

  // Hide header when scrolling down, show when scrolling up
  if (currentScroll > lastScroll && currentScroll > 200) {
    header.style.transform = "translateY(-100%)";
  } else {
    header.style.transform = "translateY(0)";
  }

  lastScroll = currentScroll;
});

// Parallax effect for hero
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const parallax = document.querySelector(".hero-image img");
  const speed = 0.5;

  if (parallax) {
    parallax.style.transform = `translateY(${scrolled * speed}px)`;
  }
});

// Card animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }, index * 150);
    }
  });
}, observerOptions);

// Initialize card animations
document.querySelectorAll(".feature-card").forEach((card, index) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(50px)";
  card.style.transition = "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
  cardObserver.observe(card);
});

// Enhanced hover effects for cards
document.querySelectorAll(".feature-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-15px) scale(1.02)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

// Add floating animation to some elements
function addFloatingAnimation() {
  const floatingElements = document.querySelectorAll(".feature-icon");

  floatingElements.forEach((el, index) => {
    el.style.animation = `float 3s ease-in-out infinite`;
    el.style.animationDelay = `${index * 0.5}s`;
  });
}

// CSS keyframes for floating animation
const style = document.createElement("style");
style.textContent = `
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
`;
document.head.appendChild(style);

// Initialize floating animation
setTimeout(addFloatingAnimation, 2000);

// Load navbar
fetch("navbar.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("navbar").innerHTML = data;
  });

// Navigate to page
function navigateTo(page) {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  // Check if already on the target page
  if (currentPage === page || (currentPage === "" && page === "index.html")) {
    // Close mobile menu if open
    const navLinks = document.getElementById("navLinks");
    if (navLinks) navLinks.classList.remove("active");
    return false;
  }

  // Navigate to the page
  window.location.href = page;
}

// Mobile menu toggle
function toggleMobileMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}

// Set active navigation state
function setActiveNav() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach((link) => {
    link.classList.remove("active");
    const href = link.getAttribute("onclick");

    if (href && href.includes(currentPage)) {
      link.classList.add("active");
    } else if (
      currentPage === "index.html" &&
      href &&
      href.includes("index.html")
    ) {
      link.classList.add("active");
    }
  });
}

// Initialize active nav on page load
document.addEventListener("DOMContentLoaded", () => {
  // Set active nav after navbar loads
  setTimeout(setActiveNav, 100);
});

// IFR Page Functions
let currentMode = "departure"; // departure or arrival

function toggleMode() {
  const modeToggle = document.getElementById("modeToggle");
  const flowTabs = document.getElementById("flowTabs");

  if (currentMode === "departure") {
    // Switch to Arrival Mode
    currentMode = "arrival";
    modeToggle.textContent = "Departure";
    modeToggle.classList.add("departure-mode");
    modeToggle.classList.remove("active");

    // Update flow tabs for arrival
    flowTabs.innerHTML = `
      <button class="nav-tab active" onclick="showSection('arrival-enroute')" data-flow="arrival">
        En Route
      </button>
      <button class="nav-tab" onclick="showSection('arrival-approach')" data-flow="arrival">
        Approach
      </button>
      <button class="nav-tab" onclick="showSection('arrival-tower')" data-flow="arrival">
        Tower
      </button>
      <button class="nav-tab" onclick="showSection('arrival-ground')" data-flow="arrival">
        Ground
      </button>
    `;

    // Show first arrival section
    showSection("arrival-enroute");
  } else {
    // Switch to Departure Mode
    currentMode = "departure";
    modeToggle.textContent = "Arrival";
    modeToggle.classList.remove("departure-mode");
    modeToggle.classList.add("active");

    // Update flow tabs for departure
    flowTabs.innerHTML = `
      <button class="nav-tab active" onclick="showSection('delivery')" data-flow="departure">
        Delivery
      </button>
      <button class="nav-tab" onclick="showSection('ground')" data-flow="departure">
        Ground
      </button>
      <button class="nav-tab" onclick="showSection('tower')" data-flow="departure">
        Tower
      </button>
      <button class="nav-tab" onclick="showSection('approach')" data-flow="departure">
        Approach
      </button>
      <button class="nav-tab" onclick="showSection('enroute')" data-flow="departure">
        En Route
      </button>
    `;

    // Show first departure section
    showSection("delivery");
  }
}

function showSection(sectionId) {
  // Hide all sections
  const sections = document.querySelectorAll(".content-section");
  sections.forEach((section) => {
    section.classList.remove("active");
  });

  // Remove active class from all tabs
  const tabs = document.querySelectorAll(".nav-tab");
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });

  // Show selected section
  const selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
    selectedSection.classList.add("active");
  }

  // Add active class to clicked tab
  if (typeof event !== "undefined" && event && event.target) {
    event.target.classList.add("active");
  } else {
    // For programmatic calls, find the correct tab
    const correctTab = document.querySelector(
      `[onclick="showSection('${sectionId}')"]`
    );
    if (correctTab) {
      correctTab.classList.add("active");
    }
  }

  // Scroll to top of container smoothly
  const container = document.querySelector(".ifr-container");
  if (container) {
    container.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
