console.log(`connected`);
let tempNum = -1;
let numArray =[];
const backgroundArr = [
	'../videos/moonlit clearing.mp4',
	'../videos/watching-the-falls.mp4',
	'../videos/windy-forest-canopy.mp4'
];

const sessionLeft = document.querySelector('.session__left') as HTMLDivElement;
const backgroundVideo = document.querySelector('#background-video') as HTMLVideoElement;
console.log(backgroundVideo)
function generateRandomNumber(min, max) {
    return Math.round((Math.random() * (max - min + 1)) + min);
}

function changeBackground() {
    tempNum++
    const videoURL = backgroundArr[tempNum];
    sessionLeft.innerHTML = `<video id="background-video" autoplay loop muted>
    <source src="${videoURL}" type="video/mp4">
    </video>`;
    let left = generateRandomNumber(0,800);
    // console.log(left)
    backgroundVideo.style.left = `-${left}px;`;
    // console.log(backgroundVideo.style.left)
    if(tempNum === 2) tempNum = -1;
}
changeBackground()
setInterval(changeBackground, 7000)

