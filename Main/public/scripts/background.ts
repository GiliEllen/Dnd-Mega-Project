console.log(`connected`);
let tempNum = -1;
let numArray =[];
const backgroundArr = [
	'../videos/moonlit clearing.mp4',
	'../videos/watching-the-falls.mp4',
	'../videos/windy-forest-canopy.mp4'
];


const sessionLeft = document.querySelector('.session__left') as HTMLDivElement;


function changeBackground() {
    tempNum++
    const videoURL = backgroundArr[tempNum];
    sessionLeft.innerHTML = `<video id="background-video" autoplay loop muted>
    <source src="${videoURL}" type="video/mp4">
    </video>`
    if(tempNum === 2) tempNum = -1;
}
changeBackground()
setInterval(changeBackground, 7000)

