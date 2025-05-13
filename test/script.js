const button = document.getElementById('showButton');
const gallery = document.getElementById('gallery');
const overlay = document.getElementById('overlay');

button.addEventListener('click', () => {
  gallery.classList.toggle('open');
  overlay.style.opacity = gallery.classList.contains('open') ? '1' : '0';
});
