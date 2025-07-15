// 👉 Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// 👉 Sticky Navbar on Scroll
const navbar = document.getElementById('mainNav');
const navTop = navbar.offsetTop;

window.addEventListener('scroll', () => {
  if (window.scrollY >= navTop) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});

// 👉 Back to Top Button
const btnTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  btnTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});

btnTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 👉 Dark Mode Toggle
const toggle = document.getElementById('themeToggle');
const current = localStorage.getItem('theme') || 'light';
if (current === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark');
  toggle.checked = true;
}
toggle.addEventListener('change', () => {
  const theme = toggle.checked ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
});