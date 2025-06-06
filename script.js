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

 // Select all filter buttons and skill items
const filterButtons = document.querySelectorAll('.filter-btn');
const skillItems = document.querySelectorAll('.skill-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));
    // Add active class to clicked button
    button.classList.add('active');

    const category = button.getAttribute('data-category');

    skillItems.forEach(item => {
      // Show all if category is 'all'
      if (category === 'all') {
        item.style.display = 'flex'; // or whatever your layout uses
      } else {
        // Show only items matching the category
        if (item.getAttribute('data-category') === category) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      }
    });
  });
});

const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.nav.prev');
  const nextBtn = document.querySelector('.nav.next');
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  });

   function checkPasscode() {
    const input = document.getElementById("project-passcode").value;
    const correctPasscode = "Oliver25"; // Replace with your actual passcode
    const lockedContent = document.querySelector(".locked-content");
    const errorMsg = document.getElementById("passcode-error");

    if (input === correctPasscode) {
      // Hide the passcode prompt
      document.querySelector(".passcode-prompt").style.display = "none";

      // Display and animate the content
      lockedContent.style.display = "block"; // First, make it visible
      // Allow a moment for reflow before adding the transition class
      setTimeout(() => {
        lockedContent.classList.add("show");
      }, 50);
    } else {
      errorMsg.style.display = "block";
    }
  }

// Contact

const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");

    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      const data = new FormData(form);
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        status.innerHTML = "Thanks! Your message was sent.";
        form.reset();
      } else {
        status.innerHTML = "Oops! Something went wrong. Please try again.";
      }
    });
