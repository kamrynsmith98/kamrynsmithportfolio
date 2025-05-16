// Hamburger menu toggle
function toggleMenu() {
  const menu = document.querySelector('.menu-links');
  if (!menu) return;

  menu.classList.toggle('show');

  // Animate hamburger icon lines to X
  const icon = document.querySelector('.hamburger-icon');
  if (!icon) return;

  icon.classList.toggle('open');
}

// Optional: close menu if clicking outside (for accessibility)
document.addEventListener('click', (e) => {
  const menu = document.querySelector('.menu-links');
  const icon = document.querySelector('.hamburger-icon');
  if (!menu || !icon) return;

  if (
    !menu.contains(e.target) &&
    !icon.contains(e.target) &&
    menu.classList.contains('show')
  ) {
    menu.classList.remove('show');
    icon.classList.remove('open');
  }
});

// Accordion behavior
const accordions = document.querySelectorAll('.accordion-header');
accordions.forEach((header) => {
  header.addEventListener('click', () => {
    const item = header.parentElement;

    // Close other accordion items if you want only one open at a time:
    accordions.forEach((otherHeader) => {
      if (otherHeader !== header) {
        otherHeader.parentElement.classList.remove('active');
      }
    });

    item.classList.toggle('active');
  });

  // Accessibility: toggle accordion with Enter or Space key
  header.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      header.click();
    }
  });

  // Make headers focusable for keyboard navigation
  header.setAttribute('tabindex', '0');
});
