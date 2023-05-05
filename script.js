const menuButton = document.getElementById('bar');
const nav = document.getElementById('b_inicio');

if (menuButton) {
  menuButton.addEventListener('click', () => {
    nav.classList.toggle('activar');
  });
}
