console.log("connected");
var tempNum = 0;
var numArray = [];
var backgroundArr = [
    '../videos/moonlit clearing.mp4',
    '../videos/watching-the-falls.mp4',
    '../videos/windy-forest-canopy.mp4'
];
var sessionLeft = document.querySelector('.session__left');
function getRandombutNotReapeatBackground() {
    var result = Math.round(Math.random() * 2);
    if (!numArray.includes(result)) {
        numArray.push(result);
        return result;
    }
    else {
        if (numArray.length < backgroundArr.length) {
            return getRandombutNotReapeatBackground();
        }
        else if (numArray.length === backgroundArr.length) {
            numArray = [];
            return getRandombutNotReapeatBackground();
        }
    }
}
function generateDiffrentImage(imageArr) {
    var random = getRandombutNotReapeatBackground();
    var videoURL = imageArr[random];
    return videoURL;
}
function changeBackground() {
    var videoURL = generateDiffrentImage(backgroundArr);
    console.log(videoURL);
    sessionLeft.innerHTML = "<video id=\"background-video\" autoplay loop muted>\n    <source src=\"" + videoURL + "\" type=\"video/mp4\">\n    </video>";
}
changeBackground();
setInterval(changeBackground, 7000);
// <video id="background-video" autoplay loop muted poster="https://assets.codepen.io/6093409/river.jpg">
// <source src="https://assets.codepen.io/6093409/river.mp4" type="video/mp4">
// </video>
