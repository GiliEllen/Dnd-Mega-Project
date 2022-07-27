const newRoomForm = document.querySelector('#NewRoomForm');
const newRoomName = document.querySelector('#roomName') as HTMLInputElement;
const adiv: HTMLElement = document.querySelector('div');

async function HandleCreateNewRoom(ev: any) {
	ev.preventDefault();
	try {
		const newRoom = ev.target.elements.roomName.value;
		const newRoomPassword = ev.target.elements.roomPass.value;
		//@ts-ignore
		const { data } = await axios.post('/room/new-room', { newRoom, newRoomPassword });
		const { roomDB } = data;
		const role = 'dm';
		handleCreateMember(roomDB, role);
	} catch (error) {
		console.error(error);
	}
}

async function handleCreateMember(roomDB, role) {
	try {
		console.log('enter creat member function');
		const userDB = await getUserFromCookies();
		//@ts-ignore
		const { data } = await axios.post('/member/create-Member', { roomDB, userDB, role });
		console.log(data);
		const { memberDB } = data;
		console.log(memberDB);
		window.location.href = `./mainPageDm.html?memberID=${memberDB._id}`;
	} catch (error) {
		console.error(error);
	}
}

async function getUserFromCookies() {
	try {
		console.log('loading room cookies');
		//@ts-ignore
		const { data } = await axios.get('/users/get-user-from-cookies');
		const { userDB } = data;
		return userDB;
	} catch (error) {
		console.error(error);
	}
}

async function HandleEnterRoom(ev: any) {
	ev.preventDefault();
	try {
		const existingRoom = ev.target.elements.existingRoomName.value;
		const existingRoomPass = ev.target.elements.existingRoomPass.value;
		//@ts-ignore
		const { data } = await axios.get('/users/get-user-from-cookies');
		const { userDB } = data;
		//@ts-ignore
		const { data } = await axios.post('/member/FindMember', { existingRoom, existingRoomPass, userDB });
		console.log(data);
		const { success, memberDB, error, roomDB } = data;
		if (success) {
			if (memberDB.role === 'dm') {
				window.location.href = `./mainPageDm.html?memberID=${memberDB._id}`;
			} else if (memberDB.role === 'user') {
				window.location.href = `./mainPageUser.html?memberID=${memberDB._id}`;
			}
		} else {
			const roomRoot = document.querySelector('#roomRoot');
			if (error === 'the password and room are correct but user not a match') {
				roomRoot.innerHTML =
					`<h2>It Seems this room does not contain this user </br> do you wish to add this user to this room?</h2></br><button onclick="handleAddUserToRoom(${roomDB.name},${userDB.username})">Yes</button><button onclick="handleDeleteThis()">Cancel</button>`;
			} else if(error === 'passwords do not match'){
				roomRoot.innerHTML =
					"<h2>Passwords son't match, please try again</h2>";
			}
		}
	} catch (error) {
		console.error(error);
	}
}

async function handleRegister(event: any) {
	event.preventDefault();
	try {
		const username = event.target.username.value;
		const password = event.target.password.value;
		const rePassword = event.target.rePassword.value;
		const email = event.target.email.value;
		//@ts-ignore
		const { data } = await axios.post('/users/register', { username, password, email, rePassword });
		console.log(data);
		const { register, user, error } = data;
		if (register) {
			window.location.href = 'room.html';
		}
		if (error) throw error;
		console.log(data);
	} catch (error) {
		console.error(error);
	}
}

async function handleLogin(event: any) {
	event.preventDefault();
	try {
		const username = event.target.username.value;
		const email = event.target.email.value;
		const password = event.target.password.value;
		const rePassword = event.target.rePassword.value;
		//@ts-ignore
		const { data } = await axios.post('/users/login', { username, password, email, rePassword });

		const { login, user, error } = data;
		console.log(error);
		if (error) throw error;
		if (login) {
			window.location.href = 'room.html';
		}
	} catch (error) {
		console.error(error);
	}
}

async function loadUserMainPage() {
	try {
		const searchParams = new URLSearchParams(window.location.href);
		//need to take user id from urlparmas or cookies whatever we decide
		const userid = '62d96ac729bed14e36fb7459'
		//@ts-ignore
		const { data } = await axios.post('users/render-user-main-page', { userid });
		const { user, error } = data;
		const pageTitle: HTMLElement = document.querySelector('.title');
		pageTitle.innerHTML = `Welcome ${user.username}`;
		const infoFromDB: HTMLDivElement = document.querySelector('.infoFromDB');
		infoFromDB.innerHTML = ` 
			name:${user.username}
			room:${user.roomID}
			role:${user.role}
			lives:
			loot:
			handout:`
	} catch (error) {
		console.error(error);
	}
}
 
let isWorldMapClicked = false
let isCurrentMapClicked = false
function handleWorldMapOpen(){
	try {
		const worldMap:HTMLDivElement = document.querySelector('.worldMap')
		const currentMap:HTMLDivElement = document.querySelector('.currentMap')
		if(!isWorldMapClicked){
			worldMap.classList.add('worldMapOpen')
			isWorldMapClicked = true
			if(isWorldMapClicked){
				currentMap.classList.remove('currentMapOpen')
				currentMap.style.display = 'none'
				isCurrentMapClicked = false
			}
		}
		else{
			worldMap.classList.remove('worldMapOpen')
			currentMap.style.display = 'inline'
			isWorldMapClicked = false
		}
	} catch (error) {
		console.error(error);
	}
	
	
}
function handleCurrentMapOpen(){
	try {
		const worldMap:HTMLDivElement = document.querySelector('.worldMap')
		const currentMap:HTMLDivElement = document.querySelector('.currentMap')
		
		if(!isCurrentMapClicked){
			currentMap.classList.add('currentMapOpen')
			isCurrentMapClicked = true
			if(isCurrentMapClicked){
				worldMap.classList.remove('worldMapOpen')
				worldMap.style.display = 'none'
				isWorldMapClicked = false
			}
		}
		else{
			currentMap.classList.remove('currentMapOpen')
			worldMap.style.display = 'inline'
			isCurrentMapClicked = false
		}
	} catch (error) {
		console.error(error);
	}
	
	
}
let isUserInfoClicked = false
async function handleUserInfoOpen(){
	try {
		const userInfo:HTMLDivElement = document.querySelector(".userInfo")
		const infoFromDB:HTMLDivElement = document.querySelector('.infoFromDB')
		if (!isUserInfoClicked){
			userInfo.classList.add('userInfoOpen')
			infoFromDB.style.display = 'inline'
			isUserInfoClicked = true
		}
		else{
			userInfo.classList.remove('userInfoOpen')
			infoFromDB.style.display = 'none'
			isUserInfoClicked = false
		}
		
	} catch (error) {
		console.error(error);
	}
}





async function loadRoom() {
	console.log('loading user cookies');
	//@ts-ignore
	const { data } = await axios.get('/users/get-user-from-cookies');
	const { userDB } = data;
	const roomContainer = document.querySelector('.room_container');
	roomContainer.innerHTML = `<h1>Hello ${userDB.username}</h1>`;
}

async function handleAddUserToRoom(roomDB, userDB){
	console.log(`roomDB`)

	console.log(`userDB`)

}

// function getRoomIdByParams() {
// 	const queryString = window.location.search;
// 	const urlParams = new URLSearchParams(queryString);
// 	const roomID = urlParams.get('roomID');
// 	return roomID;
// }

// function renderRoom(userlist, room) {
// 	const roomContainer = document.querySelector('.room_container');
// 	let html = '';
// 	if (userlist) {
// 		// 		html = `<h1>Room name: ${room.name}</h1>
// 		//         <div class="room_container__userContainer">
// 		//             <div class="room_container__dmContainer">
// 		//                 <a href="login.html?roomID=${room._id}&role=dm">Dm Login</a>
// 		//             </div>
// 		// 			<h3>Soon a function will fill this with users</h3>
// 		//         </div>
// 		//         <a href="login.html?roomID=${room._id}"><button>Register New Player</button></a>
// 		// `
// 	} else {
// 		html = `<h1>Room name: ${room.name}</h1>
//         <div class="room_container__userContainer">
//             <div class="room_container__dmContainer">
//                 <a href="register.html?roomID=${room._id}&role=dm">Dm Register</a>
//             </div>
// 			<h3>User List is empty. Tell your user to enter the room and register!</h3>
//         </div>
//         <a href="register.html?roomID=${room._id}&role=user"><button>Register New Player</button></a>
// `;
// 	}
// 	roomContainer.innerHTML = html;
// }

// Ask Tal about cookies
// async function checkRoomIDAndIfNew() {
// 	//@ts-ignore
// 	const { data } = await axios.get('/users/getRoomID');
// 	const { newRoom, roomID } = data;
// 	console.log(newRoom, roomID);
// }
