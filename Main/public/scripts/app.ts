console.log('this is app.ts');
import MemberModel from '.../models/memberModel.ts';


async function getMemberFromCookies() {
	try {
		//@ts-ignore
		const { data } = await axios.get('/member/get-user-from-cookies');
		const { memberDB } = data;
		return memberDB;
	} catch (error) {
		console.error(error);
	}
	
}

async function getWorldDataFromDB(roomID:string) {
	try{
	//@ts-ignore
	const { data } = await axios.post('room/get-world-data', {roomID})
	const { worldData } = data;
	return worldData
	} catch (error) {
		console.error(error);
	}
}
function loadBody() {
	// renderButtonsHandoutsLoot(userID);
	try {
		const memberDB = getMemberFromCookies()
		const memberRoom = memberDB.room._id
		const worldData = getWorldDataFromDB(memberRoom)

	} catch (error) {
		console.error(error)
	}
}

async function handleSaveNotes(ev) {
	ev.preventDefault();
	try {
		const updatedNotes = ev.target.infoDump.value;
		//@ts-ignore
		const { data } = await axios.post('/users/updateNotes', { userID, updatedNotes });
		console.log(data);
	} catch (error) {
		console.log(error);
	}
}

function renderButtonsHandoutsLoot(userID) {
	const buttonContainer = document.querySelector('#buttonContainer');
	const sendHandouts = document.createElement('a');
	const sendLoot = document.createElement('a');

	sendHandouts.href = `handoutsDm.html?${userID}"`;
	sendHandouts.innerHTML = `<button>Send Handouts</button>`;
	buttonContainer.appendChild(sendHandouts);

	sendLoot.href = `lootDm.html?${userID}"`;
	sendLoot.innerHTML = `<button>Send Loot</button>`;
	buttonContainer.appendChild(sendLoot);
}

function handleChooseHandouts(event) {
	event.preventDefault();
	const handoutType = event.submitter.id;
	if (handoutType === 'creatingHandout') {
		renderCreateHandout();
	} else if (handoutType === 'creatingHandout') {
		chooseHandout();
	}
}

function renderCreateHandout() {
	try {
		const root = document.querySelector('#root');
		const html = `<form onsubmit="handleCreatNewHandout(event)">
    <label for="nameOfHandout">Enter Handout's name:</label>
    <input name="nameOfHandout" type="text">
    <label for="imgURL">Enter Handout's image URL:</label>
    <input name="imgURL" type="url">
    <label for="userList">Choose users to recive the handout:</label>
    <div name="userList" class="userList" id="userList"></div>
    <button type="submit">Send</button>
    </form>`;
		root.innerHTML = html;
	} catch (error) {
        console.log(error)
    }
}
function chooseHandout() {
	const root = document.querySelector('#root');
}

// to be added
function handleCreatNewHandout(event) {

}

async function loadUserMainPage() {
	try {
		const userDB = await getUserFromCookies();
		// const { data } = await axios.post('users/render-user-main-page', { userid });
		// const { user, error } = data;

		const pageTitle: HTMLElement = document.querySelector('.title');
		pageTitle.innerHTML = `Welcome ${userDB.username}`;
		const infoFromDB: HTMLDivElement = document.querySelector('.infoFromDB');
		infoFromDB.innerHTML = ` 
			name:${userDB.username}
			role:${userDB.role}`;
	} catch (error) {
		console.error(error);
	}
}