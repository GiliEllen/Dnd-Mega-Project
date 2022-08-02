//@ts-ignore
const socket = io();

async function getMemberFromCookies() {
	try {
		//@ts-ignore
		const { data } = await axios.get('/member/get-member-from-cookie');
		const { memberDB } = data;
		return memberDB;
	} catch (error) {
		console.error(error);
	}
}
async function loadBodyDMHndouts() {
	const memberDB = await getMemberFromCookies();
	renderMembersToSendNewHandouts();
	renderExistingHandouts();
	renderMemberToSendExistingHandouts();
}

async function loadMainPageDM() {
	// renderButtonsHandoutsLoot(userID);
	try {
		const memberDB = await getMemberFromCookies();
		renderDmName(memberDB);
		renderMembersNamesAndHitPoints();
		sessionStorage.setItem(`memberName`, `${memberDB.user.username}`);
		sessionStorage.setItem(`memberRole`, `${memberDB.role}`);
		const memberRoom = memberDB.room._id;
		const worldData = await getMapsFromDB(memberRoom);
		const worldMapUrl = worldData.worldMap;
		const worldMapDiv: HTMLDivElement = document.querySelector('.worldMap');
		worldMapDiv.innerHTML = `<div class="worldMap">world map 
				<form onsubmit="handleEditWorldMap(event)">
					<input type="url" name="worldMapUpload" >
					<button type="submit"> Upload a New Map</button>
				</form>
				<img src="${worldMapUrl}" alt="pic of map">
        	</div>`;
		const currentMapUrl = worldData.currentMap;
		const currentMapDiv: HTMLDivElement = document.querySelector('.currentMap');
		currentMapDiv.innerHTML = `<div class="currentMap">current map
				<form onsubmit="handleEditCurrentMap(event)">
					<input type='url' name='currentMapUpload' >
					<button type="submit"> Upload a New Map</button>
				</form>
				<img src="${currentMapUrl}" alt="pic of map">
       		 </div>`;
	} catch (error) {
		console.error(error);
	}
}

async function loadUserMainBody() {
	const memberDB = await getMemberFromCookies();
	renderUserName(memberDB);
	renderUserOwnHitpoints(memberDB);
	sessionStorage.setItem(`memberName`, `${memberDB.user.username}`);
	sessionStorage.setItem(`memberRole`, `${memberDB.role}`);
	sessionStorage.setItem(`memberHitPoints`, `${memberDB.hitPoints}`);
	socket.emit('getUserRole', sessionStorage.getItem(`memberRole`));
}

async function getMapsFromDB(memberRoom: string) {
	try {
		//@ts-ignore
		const { data } = await axios.post('/maps/get-room-map', { memberRoom });
		const { maps } = data;
		return maps;
	} catch (error) {
		console.error(error);
	}
}

async function renderUserOwnHitpoints(memberDB) {
	const userInfoListInfoname = document.querySelector('.userInfoList__Info__name');
	userInfoListInfoname.innerHTML = memberDB.user.username;
	const hitPointsNum = document.querySelector('.hitPointsNum');
	hitPointsNum.innerHTML = memberDB.hitPoints;
}

async function renderMembersNamesAndHitPoints() {
	const userInfoList = document.querySelector('.userInfoList__users__list');
	if (userInfoList) {
		const memberArray = await handleGetAllMembers();
		console.log(memberArray);
		let html = '';
		memberArray.forEach((member) => {
			if (member.role === 'user') {
				html += `<li><div class="username">${member.user
					.username}</div><div class="hitPoints_container"><div id="hitPoints">${member.hitPoints}</div><i class="fa-solid fa-heart"></i></li></div> `;
			}
		});
		userInfoList.innerHTML = html;
	}
}

function renderDmName(memberDB) {
	const dmName = document.querySelector('#dmName');
	dmName.innerHTML = `Hello ${memberDB.user.username}!`;
}
function renderUserName(memberDB) {
	const userName = document.querySelector('#userName');
	userName.innerHTML = `Hello ${memberDB.user.username}!`;
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
	const memberDB = await getMemberFromCookies();
	//@ts-ignore
	const { data } = await axios.post('/member/getAllRoomMembers', { memberDB });
	const { memberArray } = data;
	return memberArray;
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
	console.log(event);
	try {
		//@ts-ignore
		const { data } = await axios.get('/member/get-member-from-cookie');
		const { memberDB } = data;
		const availableMembers = await handleGetAllMembers();
		const userIDArray = [];
		const membersToSendHandoutsArray = [];
		const nameOfHandout = event.target.nameOfHandout.value;
		const imgURL = event.target.imgURL.value;
		if (!imgURL || !nameOfHandout) throw new Error('Missing field');
		const userList = document.querySelector('#userList');
		const userInputArray = userList.getElementsByTagName('input');
		for (let i = 0; i < userInputArray.length; i++) {
			if (userInputArray[i].checked) {
				let userID = userInputArray[i].value;
				userIDArray.push(userID);
			}
		}
		if (userIDArray.length === 0) throw new Error('no user chosen');
		availableMembers.forEach((member) => {
			userIDArray.forEach((userId) => {
				if (member.user._id === userId) membersToSendHandoutsArray.push(member);
			});
		});
		//@ts-ignore
		const { data } = await axios.post('/handout/create-new-handout', { nameOfHandout, imgURL, memberDB });
		const { handoutDB } = data;
		const sentHandout = await handleLinkMemberAndHandout(handoutDB, membersToSendHandoutsArray);
		 window.location.href = "../views/mainPageDm.html?memberID=${memberDB._id}";
	} catch (error) {
		console.log(error);
	}
}

async function handleLinkMemberAndHandout(handoutDB, membersToSendHandoutsArray) {
	//@ts-ignore
	const { data } = await axios.post('/handout/Linkhandout', { handoutDB, membersToSendHandoutsArray });
	const { sentHandouts } = data;
	console.log(sentHandouts);
}

async function renderExistingHandouts() {
	try {
		const memberDB = await getMemberFromCookies();
		//@ts-ignore
		const { data } = await axios.post('/handout/find-All-dm-handouts', { memberDB });
		const { existingHandouts } = data;
		const existinhHandoutsRoot = document.querySelector('.existinhHandoutsRoot');
		let html = '';
		existingHandouts.forEach((handoutObj) => {
			html += `<div class="handoutCard">
						<h3>${handoutObj.name}</h3>
						<img src="${handoutObj.url}">
						<div class="checkboxContainer"><input name="${handoutObj.name}" type="checkbox" value="${handoutObj._id}"> 
						<label for="${handoutObj._id}">PICK ME</label></div>
			</div>`;
		});
		existinhHandoutsRoot.innerHTML = html;
	} catch (error) {
		console.log(error);
	}
}
async function renderMemberToSendExistingHandouts() {
	try {
		const userListRoot = document.querySelector('#userListRoot');
		const availableMembers = await handleGetAllMembers();
		let html = '';
		availableMembers.forEach((member) => {
			if (member.role === 'user') {
				html += `<input id="memberName" type="checkbox" name="${member.user.username}" value="${member.user
					._id}">
				<label for="${member.user.username}">${member.user.username}</label>`;
			}
		});
		userListRoot.innerHTML = html;
	} catch (error) {
		console.log(error);
	}
}

async function handleSendExistingHandouts(event) {
	try {
		event.preventDefault();
		//@ts-ignore
		const memberDB = await getMemberFromCookies();
		const availableMembers = await handleGetAllMembers();
		const userIDArray = [];
		const membersToSendHandoutsArray = [];
		const userListRoot = document.querySelector('#userListRoot');
		const userInputArray = userListRoot.getElementsByTagName('input');
		for (let i = 0; i < userInputArray.length; i++) {
			if (userInputArray[i].checked) {
				let userID = userInputArray[i].value;
				userIDArray.push(userID);
			}
		}
		if (userIDArray.length === 0) throw new Error('no user chosen');
		availableMembers.forEach((member) => {
			userIDArray.forEach((userId) => {
				if (member.user._id === userId) membersToSendHandoutsArray.push(member);
			});
		});
		const existinhHandoutsRoot = document.querySelector('#existinhHandoutsRoot');
		const existinhHandoutsInputArray = existinhHandoutsRoot.getElementsByTagName('input');
		const existinhHandoutsCheckedIDArray = [];
		for (let i = 0; i < existinhHandoutsInputArray.length; i++) {
			if (existinhHandoutsInputArray[i].checked) {
				let handoutID = existinhHandoutsInputArray[i].value;
				existinhHandoutsCheckedIDArray.push(handoutID);
			}
		}
		//@ts-ignore
		const { data } = await axios.post('/handout/find-All-dm-handouts', { memberDB });
		const { existingHandouts } = data;
		const fullHandoutsToSend = [];
		existinhHandoutsCheckedIDArray.forEach((handoutCheckedID) => {
			existingHandouts.forEach((handout) => {
				if (handout._id === handoutCheckedID) fullHandoutsToSend.push(handout);
			});
		});
		await fullHandoutsToSend.forEach((handout) => {
			sendThisHandout(handout, membersToSendHandoutsArray);
		});
		window.location.href = `../views/mainPageDm.html?memberID=${memberDB._id}`;
	} catch (error) {
		console.log(error);
	}
}

async function sendThisHandout(handout, membersToSendHandoutsArray) {
	const sentHandout = await handleLinkMemberAndHandout(handout, membersToSendHandoutsArray);
}

async function handleChangeHitPoints(event) {
	try {
		event.preventDefault();
		const memberDBToUpdate = await getMemberFromCookies();
		if (!memberDBToUpdate) throw new Error('member not found to update');
		const hitUpdater = event.target.id;
		let hitPoints = memberDBToUpdate.hitPoints;
		if (hitUpdater === 'up') {
			hitPoints++;
		} else if (hitUpdater === 'down') {
			hitPoints--;
		}
		//@ts-ignore
		const { data } = await axios.post('/member/updateHit', { memberDBToUpdate, hitPoints });
		const { memberDB } = data;
		renderUserOwnHitpoints(memberDB);

		socket.emit('updateHitForUser', true);
	} catch (error) {
		console.log(error);
	}
}

async function loadUserMainPage() {
	try {
		const memberDB = await getMemberFromCookies();
		const pageTitle: HTMLElement = document.querySelector('.title');
		pageTitle.innerHTML = `Welcome ${memberDB.user.username}`;
		const infoFromDB: HTMLDivElement = document.querySelector('.infoFromDB');
		infoFromDB.innerHTML = ` 
			name:${memberDB.user.username}
			role:${memberDB.role}`;
		const roomID = memberDB.room._id;
		const maps = await getMapsFromDB(roomID);
		const worldMapUrl = maps.worldMap;
		const currentMapUrl = maps.currentMap;
		const worldMap: HTMLDivElement = document.querySelector('.worldMap');
		worldMap.innerHTML = `<div class="worldMap">world map 
				<form onsubmit="handleEditWorldMap(event)">
					<input type="url" name="worldMapUpload" >
					<button type="submit"> Upload a New Map</button>
				</form>
				<img src="${worldMapUrl}" alt="pic of map">
        	</div>`;
		const currentMap: HTMLDivElement = document.querySelector('.currentMap');
		currentMap.innerHTML = `<div class="currentMap">current map
				<form onsubmit="handleEditCurrentMap(event)">
					<input type='url' name='currentMapUpload' >
					<button type="submit"> Upload a New Map</button>
				</form>
				<img src="${currentMapUrl}" alt="pic of map">
       		 </div>`;
	} catch (error) {
		console.error(error);
	}
}

async function handleEditWorldMap(event) {
	event.preventDefault();
	try {
		const member = await getMemberFromCookies();
		const roomID = member.room._id;
		const mapUrl = event.target.worldMapUpload.value;
		const worldMapDiv: HTMLDivElement = document.querySelector('.worldMap');
		worldMapDiv.innerHTML = `<div class="worldMap">world map 
				<form onsubmit="handleEditWorldMap(event)">
					<input type="url" name="worldMapUpload" >
					<button type="submit"> Upload a New Map</button>
				</form>
				<img src="${mapUrl}" alt="pic of map">
        	</div>`;
		//@ts-ignore
		const { data } = await axios.post('/maps/upload-world-map', { mapUrl, roomID });
	} catch (error) {
		console.error(error);
	}
}

async function handleEditCurrentMap(event) {
	event.preventDefault();
	try {
		const member = await getMemberFromCookies();
		const roomID = member.room._id;
		const mapUrl = event.target.currentMapUpload.value;
		const currentMapDiv: HTMLDivElement = document.querySelector('.currentMap');
		currentMapDiv.innerHTML = `<div class="currentMap">current map
				<form onsubmit="handleEditCurrentMap(event)">
					<input type='url' name='currentMapUpload' >
					<button type="submit"> Upload a New Map</button>
				</form>
				<img src="${mapUrl}" alt="pic of map">
       		 </div>`;
		//@ts-ignore
		const { data } = await axios.post('/maps/upload-current-map', { mapUrl, roomID });
	} catch (error) {
		console.error(error);
	}
}
