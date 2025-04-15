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

  const text = `I’m an Ad Tech Specialist with 3+ years of experience. I lead trafficking across Social, Digital Video, Digital Radio, META, and DTVE for Publix, one of the largest grocers in the Southeast.`;
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      document.getElementById("typewriter-text").innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 25); // speed of typing (in ms)
    }
  }

  window.addEventListener("load", typeWriter);

