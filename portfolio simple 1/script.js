const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onClick = () => {
  navLinks.classList.toggle('active');
}