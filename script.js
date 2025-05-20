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

  const filterButtons = document.querySelectorAll('.filter-btn');
  const skillItems = document.querySelectorAll('.skill-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.getAttribute('data-category');

      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      skillItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (category === 'all' || itemCategory === category) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });

const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dotNav = document.querySelector('.dot-nav');

let currentSlide = 0;

// Create dots
slides.forEach((_, i) => {
  const dot = document.createElement('span');
  dot.addEventListener('click', () => showSlide(i));
  dotNav.appendChild(dot);
});

const dots = document.querySelectorAll('.dot-nav span');

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));

  currentSlide = (index + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));

// Init
showSlide(currentSlide);
