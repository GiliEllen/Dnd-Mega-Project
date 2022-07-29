console.log("connected");
var tempNum = -1;
var numArray = [];
var backgroundArr = [
    '../videos/moonlit clearing.mp4',
    '../videos/watching-the-falls.mp4',
    '../videos/windy-forest-canopy.mp4'
];
var sessionLeft = document.querySelector('.session__left');
var backgroundVideo = document.querySelector('#background-video');
console.log(backgroundVideo);
function generateRandomNumber(min, max) {
    return Math.round((Math.random() * (max - min + 1)) + min);
}
function changeBackground() {
    tempNum++;
    var videoURL = backgroundArr[tempNum];
    sessionLeft.innerHTML = "<video id=\"background-video\" autoplay loop muted>\n    <source src=\"" + videoURL + "\" type=\"video/mp4\">\n    </video>";
    var left = generateRandomNumber(0, 800);
    // console.log(left)
    backgroundVideo.style.left = "-" + left + "px;";
    // console.log(backgroundVideo.style.left)
    if (tempNum === 2)
        tempNum = -1;
}
changeBackground();
setInterval(changeBackground, 7000);
