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
	} catch (error) {
		console.log(error);
	}
}
function chooseHandout() {
	const root = document.querySelector('#root');
}
function getMemberIDByParams() {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const memberID = urlParams.get('memberID');
	return memberID;
}

async function handleGetAllMembers() {
	console.log(`attempting to load members`);
	//@ts-ignore
	const { data } = await axios.get('/member/get-member-from-cookie');
	const { memberDB } = data;
	//@ts-ignore
	const { data } = await axios.post('/member/getAllRoomMembers', { memberDB });
	const { memberArray } = data;
	return memberArray;
}

function handleCreateAndSendHandouts() {
	const memberID = getMemberIDByParams();
	window.location.href = `../views/handoutsDm.html?memberID=${memberID}`;
}

async function renderMembersToSendNewHandouts() {
	const userList = document.querySelector('#userList');
	const availableMembers = await handleGetAllMembers();
	let html = '';
	availableMembers.forEach((member) => {
		if (member.role === 'user') {
			html += `<input type="checkbox" name="${member.user.username}" value="${member.user._id}">
			<label for="${member.user.username}">${member.user.username}</label>`;
		}
	});
	userList.innerHTML = html;
}

async function handleSendNewHandouts(event) {
	try {
		event.preventDefault();
		console.dir(event);
		const availableMembers = await handleGetAllMembers();
		const userIDArray = [];
		const nameOfHandout = event.target.nameOfHandout.value;
		const imgURL = event.target.imgURL.value;
		const userList = document.querySelector('#userList');
		const userInputArray = userList.getElementsByTagName('input');
		for(let i =0; i<userInputArray.length; i++) {
			let userID = userInputArray[i].value;
			userIDArray.push(userID)
		}
		console.log(userIDArray)
		

	} catch (error) {
		console.log(error);
	}
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