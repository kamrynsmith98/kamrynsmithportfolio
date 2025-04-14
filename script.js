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
