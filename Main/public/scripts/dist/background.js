console.log("connected");
var tempNum = -1;
var tempNum2 = -1;
var numArray = [];
var backgroundVideoArr = [
    '../videos/moonlit clearing.mp4',
    '../videos/watching-the-falls.mp4',
    '../videos/windy-forest-canopy.mp4'
];
var backgroundImgArr = [
    '../images/background1.png',
    '../images/background2.png',
    '../images/background3.png',
    '../images/background4.png',
];
var sessionLeft = document.querySelector('.session__left');
var backgroundVideo = document.querySelector('#background-video');
var roomWrapper = document.querySelector('.room_wrapper');
function generateRandomNumber(min, max) {
    return Math.round((Math.random() * (max - min + 1)) + min);
}
function changeBackgroundImage() {
    tempNum2++;
    var imageURL = backgroundImgArr[tempNum2];
    roomWrapper.style.backgroundImage = "url(\"" + imageURL + "\")";
    if (tempNum2 === 3)
        tempNum2 = -1;
}
function changeBackgroundVideo() {
    tempNum++;
    var videoURL = backgroundVideoArr[tempNum];
    sessionLeft.innerHTML = "<video id=\"background-video\" autoplay loop muted>\n    <source src=\"" + videoURL + "\" type=\"video/mp4\">\n    </video>";
    var left = generateRandomNumber(0, 800);
    // console.log(left)
    backgroundVideo.style.left = "-" + left + "px;";
    // console.log(backgroundVideo.style.left)
    if (tempNum === 2)
        tempNum = -1;
}
if (sessionLeft) {
    changeBackgroundVideo();
    setInterval(changeBackgroundVideo, 7000);
}
if (roomWrapper) {
    changeBackgroundImage();
    setInterval(changeBackgroundImage, 7000);
}
