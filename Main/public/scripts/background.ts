console.log(`connected`);
let tempNum = 0;
let numArray =[];
const backgroundArr = [
	'../videos/moonlit clearing.mp4',
	'../videos/watching-the-falls.mp4',
	'../videos/windy-forest-canopy.mp4'
];


const sessionLeft = document.querySelector('.session__left') as HTMLDivElement;

function getRandombutNotReapeatBackground() {
    let result = Math.round(Math.random() * 2);
    if (!numArray.includes(result)) {
        numArray.push(result)
        return result;
    } else {
        if(numArray.length < backgroundArr.length) {
            return getRandombutNotReapeatBackground()
        } else if (numArray.length === backgroundArr.length) {
            numArray =[];
            return getRandombutNotReapeatBackground()
        }
    }
}

function generateDiffrentImage(imageArr) {
	const random = getRandombutNotReapeatBackground();
	const videoURL = imageArr[random];
	return videoURL;
}

function changeBackground() {
    const videoURL = generateDiffrentImage(backgroundArr);
    console.log(videoURL)
    sessionLeft.innerHTML = `<video id="background-video" autoplay loop muted>
    <source src="${videoURL}" type="video/mp4">
    </video>`
}
changeBackground()
setInterval(changeBackground, 7000)

// <video id="background-video" autoplay loop muted poster="https://assets.codepen.io/6093409/river.jpg">
// <source src="https://assets.codepen.io/6093409/river.mp4" type="video/mp4">
// </video>
