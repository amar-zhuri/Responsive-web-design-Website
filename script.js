// Smooth scroll for navbar links (Bootstrap 5 ScrollSpy is enabled via data attributes)
document.querySelectorAll('a.nav-link').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
