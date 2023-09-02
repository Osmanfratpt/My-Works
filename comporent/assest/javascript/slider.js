var topSliderContainer = document.querySelector('.reference-top-slider');
var topSliderItems = Array.from(topSliderContainer.getElementsByClassName('reference-top-slider-inner'));

var bottomSliderContainer = document.querySelector('.reference-bottom-slider');
var bottomSliderItems = Array.from(bottomSliderContainer.getElementsByClassName('reference-bottom-slider-inner'));

topSliderContainer.addEventListener('wheel', function(event) {
    event.preventDefault();
    var delta = event.deltaY || event.detail || (-1 / 3 * event.wheelDelta) || 0;
    topSliderContainer.scrollLeft += delta;
});

bottomSliderContainer.addEventListener('wheel', function(event) {
    event.preventDefault();
    var delta = event.deltaY || event.detail || (-1 / 3 * event.wheelDelta) || 0;
    bottomSliderContainer.scrollLeft += delta;
});
