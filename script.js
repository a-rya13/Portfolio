//HAMBURGER MENU (MOBILE)

const hamburgerIcon = document.querySelector(".hamburger-icon");
const menuLinks = document.querySelector(".menu-links");

if (hamburgerIcon && menuLinks) {
  hamburgerIcon.addEventListener("click", () => {
    hamburgerIcon.classList.toggle("open");
    menuLinks.classList.toggle("open");
  });

  // Close menu when clicking a link
  menuLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburgerIcon.classList.remove("open");
      menuLinks.classList.remove("open");
    });
  });
}

//  THEME TOGGLE (DARK / LIGHT)

const desktopToggle = document.getElementById("theme-toggle");
const mobileToggle = document.getElementById("theme-toggle-mobile");

// Apply saved theme on page load
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark-theme");
  updateThemeButtons(true);
}

// Toggle theme
function toggleTheme() {
  const isDark = document.body.classList.toggle("dark-theme");
  localStorage.setItem("theme", isDark ? "dark" : "light");

  // Improves browser UI consistency
  document.documentElement.style.colorScheme = isDark ? "dark" : "light";

  updateThemeButtons(isDark);
}

// Update button labels
function updateThemeButtons(isDark) {
  if (desktopToggle) {
    desktopToggle.textContent = isDark ? "☀️" : "🌙";
  }

  if (mobileToggle) {
    mobileToggle.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
  }
}

// Event listeners
if (desktopToggle) {
  desktopToggle.addEventListener("click", toggleTheme);
}

if (mobileToggle) {
  mobileToggle.addEventListener("click", toggleTheme);
}

// DATA-ATTRIBUTE NAVIGATION

// Scroll navigation
document.querySelectorAll("[data-scroll]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = document.querySelector(btn.dataset.scroll);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// External links (icons)
document.querySelectorAll("[data-link]").forEach((icon) => {
  icon.addEventListener("click", () => {
    window.open(icon.dataset.link, "_blank");
  });
});

//DOWNLOAD CV
const downloadCV = document.getElementById("download-cv");
if (downloadCV) {
  downloadCV.addEventListener("click", () => {
    window.open("./assets/Arya_Agarwal_Developer.pdf", "_blank");
  });
}
