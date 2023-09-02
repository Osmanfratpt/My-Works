const upButton = document.querySelector('.up-button');

upButton.addEventListener('click', () => {
  scrollToTop();
});

function scrollToTop() {
  const currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
  
  if (currentPosition > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, currentPosition - currentPosition / 15);
  }
}