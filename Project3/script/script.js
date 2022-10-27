let left = document.getElementById("left");
let right = document.getElementById("right");
let testfeedbacks = document.getElementById("testfeedbacks");

left.addEventListener('click', scrollLeft);
right.addEventListener('click', scrollRight);

function scrollLeft() {
    testfeedbacks.scrollLeft -= 80;
}

function scrollRight() {
    testfeedbacks.scrollLeft += 85;
}