// Set the footer year automatically
document.getElementById('year').textContent = new Date().getFullYear();

// ---------------------------------------
// Mobile nav toggle
// ---------------------------------------
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

navToggle.addEventListener('click', function () {
  navLinks.classList.toggle('open');
});

// ---------------------------------------
// Smooth scroll for nav links
// (CSS `scroll-behavior: smooth` already handles this,
// this just closes the mobile menu after clicking a link)
// ---------------------------------------
const allNavLinks = navLinks.querySelectorAll('a');

allNavLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      e.preventDefault();
      targetSection.scrollIntoView({ behavior: 'smooth' });
      navLinks.classList.remove('open'); // close mobile menu after clicking
    }
  });
});

// ---------------------------------------
// Contact form (front-end only, no backend)
// ---------------------------------------
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();

  // Since there is no backend/database, we simply confirm to the user
  // that their message was captured. Replace this with a real form
  // service (e.g. Formspree, EmailJS) when you're ready to go live.
  formStatus.textContent = "Thanks! Your message has been noted. I'll get back to you soon.";

  contactForm.reset();

  setTimeout(function () {
    formStatus.textContent = '';
  }, 5000);
});