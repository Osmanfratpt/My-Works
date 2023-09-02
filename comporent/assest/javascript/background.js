var showcase = document.querySelector(".car-showcase");
var nextButton = document.getElementById("next-button");
var prewButton = document.getElementById("prew-button");

var images = [
    "/assest/img/header/pexels-alan-cordero-12066287-1.png",
    "/assest/img/header/pexels-alan-cordero-12066287-2.png",
    "/assest/img/header/mercedes-3.png",
    "/assest/img/header/pexels-alan-cordero-12066287-4.png",
    "/assest/img/header/pexels-alan-cordero-12066287-5.png"
];
var currentIndex = 0;

function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    showcase.style.backgroundImage = "url('" + images[currentIndex] + "')";
}

nextButton.addEventListener("click", function () {
    changeImage(1);
});

prewButton.addEventListener("click", function () {
    changeImage(-1);
});
