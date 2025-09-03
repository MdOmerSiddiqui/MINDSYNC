// Tab switching
const buttons = document.querySelectorAll('.nav-links button[data-tab]');
const sections = document.querySelectorAll('.content');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active'));
    sections.forEach(sec => sec.classList.remove('active'));

    button.classList.add('active');
    document.getElementById(button.dataset.tab).classList.add('active');
  });
});

// Signout → back to login
document.querySelector('.signout').addEventListener('click', () => {
  window.location.href = "login.html";
});

// Hamburger menu toggle
document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('show');
});


