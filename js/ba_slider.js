const container = document.querySelector('.ba_container');
document.querySelector('.ba_slider').addEventListener('input', (e) => {
  container.style.setProperty('--position', `${e.target.value}%`);
})