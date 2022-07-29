console.log('this is app.ts');

function loadBody() {
	renderMembersToSendNewHandouts();
	renderExistingHandouts();
	renderMemberToSendExistingHandouts();
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

function handleGoTodHandouts() {
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
	event.preventDefault();
	try {
		//@ts-ignore
		const { data } = await axios.get('/member/get-member-from-cookie');
		const { memberDB } = data;
		const availableMembers = await handleGetAllMembers();
		const userIDArray = [];
		const membersToSendHandoutsArray = [];
		const nameOfHandout = event.target.nameOfHandout.value;
		const imgURL = event.target.imgURL.value;
		if(!imgURL || !nameOfHandout) throw new Error('Missing field')
		const userList = document.querySelector('#userList');
		const userInputArray = userList.getElementsByTagName('input');
		for(let i = 0; i < userInputArray.length; i++) {
			if(userInputArray[i].checked){
				let userID = userInputArray[i].value;
				userIDArray.push(userID)
			}
		}
		if(userIDArray.length === 0) throw new Error('no user chosen')
		availableMembers.forEach(member => {
			userIDArray.forEach(userId => {
				if(member.user._id === userId) membersToSendHandoutsArray.push(member)
			});
		});
		//@ts-ignore
		const {data} = await axios.post('/handout/create-new-handout', {nameOfHandout, imgURL, memberDB});
		const {handoutDB} = data;
		console.log(handoutDB)
		const sentHandout = await handleLinkMemberAndHandout(handoutDB, membersToSendHandoutsArray);
		if(sentHandout) console.log(`successfully created and sent new handouts to the users`)
	} catch (error) {
		console.log(error);
	}
}

async function handleLinkMemberAndHandout(handoutDB, membersToSendHandoutsArray) {
	//@ts-ignore
	const {data} = await axios.post('/handout/Linkhandout', {handoutDB, membersToSendHandoutsArray});
	const {sentHandouts} = data;
	console.log(sentHandouts)
	if(sentHandouts.length) return true;
}

async function renderExistingHandouts(){
	try {
		const memberDB = await getMemberFromCookies();
		//@ts-ignore
		const { data } = await axios.post('/handout/find-All-dm-handouts', {memberDB});
		const {existingHandouts} = data;
		const existinhHandoutsRoot = document.querySelector('.existinhHandoutsRoot');
		let html = '';
		existingHandouts.forEach(handoutObj => {
			html += `<div class="handoutCard"><img src="${handoutObj.url}"><h3>${handoutObj.name}</h3><input name="${handoutObj._id}" type="checkbox"> <label for="${handoutObj._id}">PICK ME</label></div>`
		});
		existinhHandoutsRoot.innerHTML = html
	} catch (error) {
		console.log(error);
	}

}
async function renderMemberToSendExistingHandouts(){
	try {
		const userListRoot = document.querySelector('#userListRoot');
		const availableMembers = await handleGetAllMembers();
		let html = '';
		availableMembers.forEach((member) => {
			if (member.role === 'user') {
				html += `<input type="checkbox" name="${member.user.username}" value="${member.user._id}">
				<label for="${member.user.username}">${member.user.username}</label>`;
			}
		});
		userListRoot.innerHTML = html;
	} catch (error) {
		console.log(error)
	}
}

async function getMemberFromCookies() {
	//@ts-ignore
	const { data } = await axios.get('/member/get-member-from-cookie');
	const { memberDB } = data;
	return memberDB
}