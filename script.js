function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  menu.classList.toggle("open");  // Show/hide the menu
  icon.classList.toggle("open");  // Animate the hamburger icon (optional)
}

const video = document.getElementById('myVideo');
  video.playbackRate = 0.5; // Set to half speed
  
  // Toggle content visibility and rotate arrow icon
  document.querySelectorAll(".toggle-header").forEach(button => {
    button.addEventListener("click", () => {
      const content = button.nextElementSibling;
      content.classList.toggle("open");

      const icon = button.querySelector('.arrow-icon');
      icon.classList.toggle("rotate");
    });
  });

// Accordion functionality
document.addEventListener("DOMContentLoaded", () => {
  const headers = document.querySelectorAll(".accordion-header");

  headers.forEach((header) => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;

      // Toggle "active" class for header (optional for styling)
      header.classList.toggle("active");

      // Toggle display
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        // Close all other accordions
        document.querySelectorAll(".accordion-content").forEach((el) => {
          el.style.maxHeight = null;
          el.previousElementSibling.classList.remove("active");
        });

        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
});


  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submit

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    // Simulate success
    alert("Thank you! Your message has been sent.");
    form.reset();
  });
