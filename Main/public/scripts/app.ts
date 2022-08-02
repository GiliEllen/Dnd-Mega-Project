

console.log('this is app.ts');

async function getMemberFromCookies() {
	try {
		//@ts-ignore
		const { data } = await axios.get('/member/get-member-from-cookie');
		const {  memberDB  } = data;
		return  memberDB ;
	} catch (error) {
		console.error(error);
	}
	
}

async function getMapsFromDB(memberRoom:string) {
	try{
		//@ts-ignore
		const { data } = await axios.post('/maps/get-room-map', {memberRoom})
		const { maps } = data;
		return maps
	} catch (error) {
		console.error(error);
	}
}
async function loadMainPageDM() {
	// renderButtonsHandoutsLoot(userID);
	try {
		console.log('helo')
		const memberDB = await getMemberFromCookies();
		const memberRoom = memberDB.room._id
		const worldData = await getMapsFromDB(memberRoom)
		const worldMapUrl = worldData.worldMap
		const worldMapDiv:HTMLDivElement = document.querySelector('.worldMap')
		worldMapDiv.innerHTML = 
			`<div class="worldMap">world map 
				<form onsubmit="handleEditWorldMap(event)">
					<input type="url" name="worldMapUpload" >
					<button type="submit"> Upload a New Map</button>
				</form>
				<img src="${worldMapUrl}" alt="pic of map">
        	</div>`
		const currentMapUrl = worldData.currentMap
		const currentMapDiv:HTMLDivElement = document.querySelector('.currentMap')
		currentMapDiv.innerHTML = 
			`<div class="currentMap">current map
				<form onsubmit="handleEditCurrentMap(event)">
					<input type='url' name='currentMapUpload' >
					<button type="submit"> Upload a New Map</button>
				</form>
				<img src="${currentMapUrl}" alt="pic of map">
       		 </div>`
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

async function loadMainPageUser() {
	try {
		const memberDB = await getMemberFromCookies();
		const pageTitle: HTMLElement = document.querySelector('.title');
		pageTitle.innerHTML = `Welcome ${memberDB.user.username}`;
		const infoFromDB: HTMLDivElement = document.querySelector('.infoFromDB');
		infoFromDB.innerHTML = ` 
			name:${memberDB.user.username}
			role:${memberDB.role}`;
		const roomID = memberDB.room._id
		const maps = await getMapsFromDB(roomID);
		console.log(maps)
		const worldMap: HTMLDivElement = document.querySelector('.worldMap')
		const currentMap: HTMLDivElement = document.querySelector('.currentMap')
	} catch (error) {
		console.error(error);
	}
}

async function handleEditWorldMap(event){
	event.preventDefault();
	try{
		const member = await getMemberFromCookies()
		const roomID = member.room._id
		const mapUrl = event.target.worldMapUpload.value
		const worldMapDiv:HTMLDivElement = document.querySelector('.worldMap')
		worldMapDiv.innerHTML = 
			`<div class="worldMap">world map 
				<form onsubmit="handleEditWorldMap(event)">
					<input type="url" name="worldMapUpload" >
					<button type="submit"> Upload a New Map</button>
				</form>
				<img src="${mapUrl}" alt="pic of map">
        	</div>`
		//@ts-ignore
		const { data } = await axios.post('/maps/upload-world-map', {mapUrl, roomID} )
	}
	catch(error){
		console.error(error)
	}
}

async function handleEditCurrentMap(event) {
	event.preventDefault();
	try{
		const member = await getMemberFromCookies()
		const roomID = member.room._id
		const mapUrl = event.target.currentMapUpload.value
		const currentMapDiv:HTMLDivElement = document.querySelector('.currentMap')
		currentMapDiv.innerHTML = 
			`<div class="currentMap">current map
				<form onsubmit="handleEditCurrentMap(event)">
					<input type='url' name='currentMapUpload' >
					<button type="submit"> Upload a New Map</button>
				</form>
				<img src="${mapUrl}" alt="pic of map">
       		 </div>`
		//@ts-ignore
		const { data } = await axios.post('/maps/upload-current-map', {mapUrl, roomID} )
	}
	catch(error){
		console.error(error)
	}
}