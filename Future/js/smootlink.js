const targets = ['#second-page', '#third-page', '#fourth-page', '#container-home-page'];

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  if (targets.includes(anchor.getAttribute('href'))) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  }
});