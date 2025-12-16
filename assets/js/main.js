/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show')
    })
  }
}
showMenu('nav-toggle', 'nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');

  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title', {});
sr.reveal('.button', { delay: 200 });
sr.reveal('.home__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });

/*SCROLL ABOUT*/
sr.reveal('.about__img', {});
sr.reveal('.about__subtitle', { delay: 400 });
sr.reveal('.about__text', { delay: 400 });

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', {});
sr.reveal('.skills__text', {});
sr.reveal('.skills_tech_icons', { interval: 200 });
sr.reveal('.skills__img', { delay: 600 });

/*SCROLL EXPERIENCE*/
sr.reveal('.experience__item', { interval: 200 });

/*SCROLL EDUCATION*/
sr.reveal('.education__item', { interval: 200 });

/*SCROLL WORK*/
sr.reveal('.work__img', { interval: 200 });

/*SCROLL CONTACT*/
sr.reveal('.contact__info', {});
sr.reveal('.contact__input', { interval: 200 });

/* Initialize MicroModal */
MicroModal.init();

function __close(id) {
  document.querySelector('#' + id).classList.remove("is-open");
}

/*===== THEME TOGGLE =====*/
// Get theme from localStorage or default to light
const getTheme = () => {
  return localStorage.getItem('theme') || 'light';
};

// Set theme
const setTheme = (theme) => {
  const themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle) return;

  const themeIcon = themeToggle.querySelector('.theme-icon');

  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    if (themeIcon) {
      themeIcon.classList.remove('bx-sun');
      themeIcon.classList.add('bx-moon');
    }
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
    if (themeIcon) {
      themeIcon.classList.remove('bx-moon');
      themeIcon.classList.add('bx-sun');
    }
    localStorage.setItem('theme', 'light');
  }
};

// Initialize theme on page load
const initTheme = () => {
  const currentTheme = getTheme();
  setTheme(currentTheme);
};

// Initialize theme immediately to prevent flash
initTheme();

// Set up theme toggle event listener when DOM is ready
const setupThemeToggle = () => {
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = getTheme();
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
    });
  }
};

// Initialize theme toggle when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupThemeToggle);
} else {
  setupThemeToggle();
}