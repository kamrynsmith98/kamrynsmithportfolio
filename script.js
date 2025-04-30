// Toggle menu for hamburger icon
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  menu.classList.toggle("open");  // Show/hide the menu
  icon.classList.toggle("open");  // Animate the hamburger icon
}

window.addEventListener('DOMContentLoaded', () => {
  // Set skill bars based on data-percent attribute
  const skills = document.querySelectorAll('.skill');
  skills.forEach(skill => {
    const skillFill = skill.querySelector('.skill-fill');
    const percent = skill.getAttribute('data-percent');
    skillFill.style.width = percent;
  });

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
  document.querySelectorAll(".accordion-header").forEach(header => {
    header.addEventListener("click", () => {
      const accordion = header.parentElement;
      const content = accordion.querySelector(".accordion-content");

      // Close other open items
      document.querySelectorAll(".accordion-item").forEach(item => {
        if (item !== accordion) {
          item.querySelector(".accordion-content").style.maxHeight = null;
        }
      });

      // Toggle current accordion item
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });

  // Change background color for Education button
  document.querySelectorAll('.accordion-header').forEach(btn => {
    if (btn.textContent.trim().startsWith('Education')) {
      btn.style.backgroundColor = '#fff9c4';
    }
  });

function setCircleProgress(percent, circle) {
  const radius = circle.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;
  circle.style.strokeDasharray = `${circumference}`;
  circle.style.strokeDashoffset = circumference - (percent / 100) * circumference;
}

// Example: Animate HTML5 to 95%
const htmlCircle = document.querySelector('.ring');
setCircleProgress(95, htmlCircle);

  // Project carousel navigation
  const projects = document.querySelectorAll('.project');
  let currentProjectIndex = 0;

  function showProject(index) {
    projects.forEach(project => {
      project.style.display = 'none';
      const more = project.querySelector('.project-more');
      more.classList.remove('show');
    });

    const currentProject = projects[index];
    currentProject.style.display = 'block';
    const more = currentProject.querySelector('.project-more');
    more.classList.add('show');
  }

  const prevButton = document.getElementById('prev-button');
  prevButton.addEventListener('click', function () {
    currentProjectIndex = (currentProjectIndex === 0) ? projects.length - 1 : currentProjectIndex - 1;
    showProject(currentProjectIndex);
  });

  const nextButton = document.getElementById('next-button');
  nextButton.addEventListener('click', function () {
    currentProjectIndex = (currentProjectIndex === projects.length - 1) ? 0 : currentProjectIndex + 1;
    showProject(currentProjectIndex);
  });

  // Dropdown toggle for project details
  const dropdownHints = document.querySelectorAll('.dropdown-hint');
  dropdownHints.forEach((hint, index) => {
    hint.addEventListener('click', () => {
      const project = document.querySelectorAll('.project')[index];
      const moreInfo = project.querySelector('.project-more');
      const hintText = project.querySelector('.dropdown-hint');

      // Toggle the project-more visibility
      moreInfo.classList.toggle('show');

      // Change the hint text to show the "▲" or "▼" depending on visibility
      if (moreInfo.classList.contains('show')) {
        hintText.textContent = '▲ Click to hide';
      } else {
        hintText.textContent = '▼ Click to see more';
      }
    });
  });

  // Show the first project initially
  showProject(currentProjectIndex);
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
