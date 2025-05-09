function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  menu.classList.toggle("open");  // Show/hide the menu
  icon.classList.toggle("open");  // Animate the hamburger icon (optional)
}

window.addEventListener('DOMContentLoaded', () => {
  // Set skill bars based on data-percent attribute
  const skills = document.querySelectorAll('.skill');
  skills.forEach(skill => {
    const skillFill = skill.querySelector('.skill-fill');
    const percent = skill.getAttribute('data-percent');
    skillFill.style.width = percent;
  });
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


document.addEventListener("DOMContentLoaded", function () {
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;

      // Close all other accordion sections
      document.querySelectorAll(".accordion-content").forEach(section => {
        if (section !== content) {
          section.style.maxHeight = null;
          section.style.paddingTop = 0;
          section.style.paddingBottom = 0;
        }
      });

      // Toggle the current section
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        content.style.paddingTop = 0;
        content.style.paddingBottom = 0;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";  // Set to content's scrollHeight
        content.style.paddingTop = "20px";
        content.style.paddingBottom = "20px";
      }
    });
  });
});


// SKILLS SECTION //
 document.querySelectorAll('.skill-circle').forEach(circle => {
    const percent = circle.getAttribute('data-percent');
    const ring = circle.querySelector('.ring');
    const radius = ring.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    ring.style.strokeDasharray = `${circumference}`;
    ring.style.strokeDashoffset = circumference;

    const offset = circumference - (percent / 100) * circumference;
    setTimeout(() => {
      ring.style.strokeDashoffset = offset;
    }, 300); // slight delay for effect
  });
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const progress = entry.target.querySelector('.progress');
        progress.style.width = progress.getAttribute('style').match(/width:\s*(\d+)%/)[1] + '%';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.skill-card').forEach(card => {
    observer.observe(card);
  });
});

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
