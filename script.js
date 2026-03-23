// ===== HAMBURGER MENU =====
const hamburgerIcon = document.querySelector(".hamburger-icon");
const menuLinks = document.querySelector(".menu-links");

if (hamburgerIcon && menuLinks) {
  hamburgerIcon.addEventListener("click", () => {
    hamburgerIcon.classList.toggle("open");
    menuLinks.classList.toggle("open");
  });

  menuLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburgerIcon.classList.remove("open");
      menuLinks.classList.remove("open");
    });
  });
}

// ===== THEME TOGGLE =====
const desktopToggle = document.getElementById("theme-toggle");
const mobileToggle = document.getElementById("theme-toggle-mobile");

// Apply saved theme on load
const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const isDarkOnLoad = savedTheme === "dark" || (!savedTheme && prefersDark);

if (isDarkOnLoad) {
  document.body.classList.add("dark-theme");
  updateThemeButtons(true);
}

function toggleTheme() {
  const isDark = document.body.classList.toggle("dark-theme");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  document.documentElement.style.colorScheme = isDark ? "dark" : "light";
  updateThemeButtons(isDark);
}

function updateThemeButtons(isDark) {
  if (desktopToggle) desktopToggle.textContent = isDark ? "☀️" : "🌙";
  if (mobileToggle) mobileToggle.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
}

if (desktopToggle) desktopToggle.addEventListener("click", toggleTheme);
if (mobileToggle) mobileToggle.addEventListener("click", toggleTheme);

// ===== SCROLL REVEAL =====
const sections = document.querySelectorAll("section:not(#profile)");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.06, rootMargin: "0px 0px -40px 0px" }
);

sections.forEach((section) => observer.observe(section));

// ===== DATA-ATTRIBUTE NAVIGATION =====
document.querySelectorAll("[data-scroll]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = document.querySelector(btn.dataset.scroll);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});

document.querySelectorAll("[data-link]").forEach((icon) => {
  icon.addEventListener("click", () => {
    window.open(icon.dataset.link, "_blank");
  });
});

// ===== DOWNLOAD CV =====
const downloadCV = document.getElementById("download-cv");
if (downloadCV) {
  downloadCV.addEventListener("click", () => {
    window.open("./assets/Arya Agarwal Resume.pdf", "_blank");
  });
}
