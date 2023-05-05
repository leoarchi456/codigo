const bar = document.getElementById('bar');
const lista = document.querySelectorAll('#b_inicio li');

if (bar) {
  bar.addEventListener('click', () => {
    lista.forEach((li) => {
      li.classList.toggle('activar');
    });
  });
}
