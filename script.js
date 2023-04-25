
const hamburger = document.querySelector('.hamburger-menu');

hamburger.addEventListener('click', function () {
  const dropdownMenu = document.querySelector('.dropdown-menu');
  if (dropdownMenu.style.display === 'none') {
    dropdownMenu.style.display = 'block';
  } else {
    dropdownMenu.style.display = 'none';
  }
});