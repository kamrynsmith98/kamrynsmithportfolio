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
document.querySelectorAll('.toggle-header').forEach(header => {
  header.addEventListener('click', () => {
    const toggleContainer = header.parentElement;
    const content = toggleContainer.querySelector('.toggle-content');
    const icon = header.querySelector('.arrow-icon');

    // Toggle content visibility
    content.classList.toggle('active');

    // Rotate icon
    icon.classList.toggle('rotate');
  });
});
// Add toggle functionality for the About section details
document.querySelectorAll(".toggle-header").forEach(button => {
  button.addEventListener("click", () => {
    // Toggle the active class on the header and the details container
    button.classList.toggle("active");
    const detailsContainer = button.nextElementSibling;
    detailsContainer.classList.toggle("active");

    // Optional: You can also toggle the arrow icon or other elements here
    const icon = button.querySelector(".arrow-icon");
    icon.classList.toggle("rotate");
  });
});
document.querySelectorAll(".accordion-header").forEach((header) => {
  header.addEventListener("click", () => {
    const accordion = header.parentElement;
    const content = accordion.querySelector(".accordion-content");

    // Close other open items
    document.querySelectorAll(".accordion-item").forEach((item) => {
      if (item !== accordion) {
        item.querySelector(".accordion-content").style.maxHeight = null;
      }
    });

    // Toggle current
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});
const buttons = document.querySelectorAll('.accordion-header');
buttons.forEach(btn => {
  if (btn.textContent.trim().startsWith('Education')) {
    btn.style.backgroundColor = '#fff9c4'; // example style
  }
});
const skillAccordions = document.querySelectorAll(".skills-section .accordion");

  skillAccordions.forEach((btn) => {
    btn.addEventListener("click", function () {
      this.classList.toggle("active");
      const panel = this.nextElementSibling;

      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        panel.style.padding = "0 24px";
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        panel.style.padding = "16px 24px";
      }
    });
  });
// Add event listeners to each project
// Add event listeners to each project
const projects = document.querySelectorAll('.project');

projects.forEach((project) => {
  project.addEventListener('click', () => {
    const moreInfo = project.querySelector('.project-more');
    moreInfo.classList.toggle('show');
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const projects = document.querySelectorAll('.project');
  let currentProjectIndex = 0;

  // Initially display the first project
  showProject(currentProjectIndex);

  // Show the project at the given index
  function showProject(index) {
    // Hide all projects
    projects.forEach(project => {
      project.style.display = 'none';
      const more = project.querySelector('.project-more');
      more.classList.remove('show');
    });

    // Show the project at the given index
    const currentProject = projects[index];
    currentProject.style.display = 'block';
    const more = currentProject.querySelector('.project-more');
    more.classList.add('show');
  }

  // Previous Button
  const prevButton = document.getElementById('prev-button');
  prevButton.addEventListener('click', function () {
    currentProjectIndex = (currentProjectIndex === 0) ? projects.length - 1 : currentProjectIndex - 1;
    showProject(currentProjectIndex);
  });

  // Next Button
  const nextButton = document.getElementById('next-button');
  nextButton.addEventListener('click', function () {
    currentProjectIndex = (currentProjectIndex === projects.length - 1) ? 0 : currentProjectIndex + 1;
    showProject(currentProjectIndex);
  });
});
