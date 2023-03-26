// Get the nav links and main content area
const navLinks = document.querySelectorAll('nav ul li a');
const mainContent = document.querySelector('main');

// Add event listeners to each nav link
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const sectionId = link.getAttribute('href').substring(1);
    const section = document.getElementById(sectionId);
    mainContent.innerHTML = section.innerHTML;
  });
});
