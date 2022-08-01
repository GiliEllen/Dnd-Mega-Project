console.log(`connected`);
let tempNum = -1;
let tempNum2 = -1;
let numArray =[];
const backgroundVideoArr = [
	'../videos/moonlit clearing.mp4',
	'../videos/watching-the-falls.mp4',
	'../videos/windy-forest-canopy.mp4'
];

const backgroundImgArr = [
    '../images/background1.png',
    '../images/background2.png',
    '../images/background3.png',
    '../images/background4.png',
]
const sessionLeft = document.querySelector('.session__left') as HTMLDivElement;
const backgroundVideo = document.querySelector('#background-video') as HTMLVideoElement;

const roomWrapper = document.querySelector('.room_wrapper') as HTMLDivElement;


function generateRandomNumber(min, max) {
    return Math.round((Math.random() * (max - min + 1)) + min);
}

function changeBackgroundImage() {
    tempNum2++;
    const imageURL = backgroundImgArr[tempNum2];
    roomWrapper.style.backgroundImage = `url("${imageURL}")`
    if(tempNum2 === 3) tempNum2 = -1;
}

function changeBackgroundVideo() {
    tempNum++;
    const videoURL = backgroundVideoArr[tempNum];
    sessionLeft.innerHTML = `<video id="background-video" autoplay loop muted>
    <source src="${videoURL}" type="video/mp4">
    </video>`;
    let left = generateRandomNumber(0,800);
    // console.log(left)
    backgroundVideo.style.left = `-${left}px;`;
    // console.log(backgroundVideo.style.left)
    if(tempNum === 2) tempNum = -1;
}
if(sessionLeft) {
    changeBackgroundVideo()
    setInterval(changeBackgroundVideo, 7000)    
}
if(roomWrapper) {
    changeBackgroundImage();
    setInterval(changeBackgroundImage, 7000)
}
