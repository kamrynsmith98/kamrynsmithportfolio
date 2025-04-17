function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  menu.classList.toggle("open");  // Show/hide the menu
  icon.classList.toggle("open");  // Animate the hamburger icon
}


window.addEventListener('DOMContentLoaded', () => {
  const skills = document.querySelectorAll('.skill');

  skills.forEach(skill => {
    const skillFill = skill.querySelector('.skill-fill');
    const percent = skill.getAttribute('data-percent');
    skillFill.style.width = percent; // Set width based on data-percent attribute
  });
});


  document.querySelectorAll(".toggle-header").forEach(button => {
    button.addEventListener("click", () => {
      const content = button.nextElementSibling;
      content.classList.toggle("open");
    });
  });
document.querySelectorAll(".toggle-header").forEach(button => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    const allContent = document.querySelectorAll(".toggle-content");
    const allHeaders = document.querySelectorAll(".toggle-header");

    // Close other open sections
    allContent.forEach(c => {
      if (c !== content) c.classList.remove("open");
    });

    allHeaders.forEach(h => {
      if (h !== button) h.classList.remove("open");
    });

    // Toggle current
    content.classList.toggle("open");
    button.classList.toggle("open");
  });
});
