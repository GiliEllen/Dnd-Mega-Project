const newRoomForm = document.querySelector('#NewRoomForm');
const newRoomName = document.querySelector('#roomName') as HTMLInputElement;
const adiv: HTMLElement = document.querySelector('div');
let isWorldMapClicked = false;
let isCurrentMapClicked = false;
let isUserInfoClicked = false;

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
		if (memberDB.role === 'dm') {
			window.location.href = `../views/mainPageDm.html?memberID=${memberDB._id}`;;
		} else if (memberDB.role === 'user') {
			window.location.href = `../views/mainPageUser.html?memberID=${memberDB._id}`;
		}
		
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
		const { data } = await axios.post('/member/FindMemberByRoom', { existingRoom, existingRoomPass, userDB });
		console.log(data);
		const { success, memberDB, error, roomDB } = data;
		if (success) {
			if (memberDB.role === 'dm') {
				window.location.href = `../views/mainPageDm.html?memberID=${memberDB._id}`;
			} else if (memberDB.role === 'user') {
				window.location.href = `../views/mainPageUser.html?memberID=${memberDB._id}`;
			}
		} else {
			if (error) handleErrorMember(error);
		}
	} catch (error) {
		console.error(error);
	}
}

function handleErrorMember(error) {
	const roomRoot = document.querySelector('#roomRoot');
	if (error.includes('Error01')) {
		const yesRoomNoUser = document.querySelector('.yesRoomNoUser') as HTMLFormElement;
		yesRoomNoUser.style.display = "inline";
		const RoomForm = document.querySelector('#RoomForm') as HTMLFormElement;
		RoomForm.style.display = 'none';
	} else if (error.includes('Error02')) {
		roomRoot.innerHTML = "<h2>Passwords don't match, please try again</h2>";
	}
}
function handleDeleteThis(event) {
	try {
		const yesRoomNoUser = document.querySelector('.yesRoomNoUser') as HTMLFormElement;
		yesRoomNoUser.style.display = 'none';
		const RoomForm = document.querySelector('#RoomForm') as HTMLFormElement;
		RoomForm.style.display = "flex";
	} catch (error) {
		console.log(error)
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
			window.location.href = '../views/room.html';
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
		const email = event.target.email.value;
		const password = event.target.password.value;
		if(!email || !password) throw new Error('Missing either email or password')
		//@ts-ignore
		const { data } = await axios.post('/users/login', { password, email });

		const { login, user, error } = data;
		console.log(error);
		if (error) throw error;
		if (login) {
			window.location.href = '../views/room.html';
		}
	} catch (error) {
		console.error(error);
	}
}

async function loadUserMainPage() {
	try {
		const userDB = await getUserFromCookies();

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

function handleWorldMapOpen() {
	try {
		const worldMap: HTMLDivElement = document.querySelector('.worldMap');
		const currentMap: HTMLDivElement = document.querySelector('.currentMap');
		if (!isWorldMapClicked) {
			worldMap.classList.add('worldMapOpen');
			isWorldMapClicked = true;
			if (isWorldMapClicked) {
				currentMap.classList.remove('currentMapOpen');
				currentMap.style.display = 'none';
				isCurrentMapClicked = false;
			}
		} else {
			worldMap.classList.remove('worldMapOpen');
			currentMap.style.display = 'inline';
			isWorldMapClicked = false;
		}
	} catch (error) {
		console.error(error);
	}
}
function handleCurrentMapOpen() {
	try {
		const worldMap: HTMLDivElement = document.querySelector('.worldMap');
		const currentMap: HTMLDivElement = document.querySelector('.currentMap');

		if (!isCurrentMapClicked) {
			currentMap.classList.add('currentMapOpen');
			isCurrentMapClicked = true;
			if (isCurrentMapClicked) {
				worldMap.classList.remove('worldMapOpen');
				worldMap.style.display = 'none';
				isWorldMapClicked = false;
			}
		} else {
			currentMap.classList.remove('currentMapOpen');
			worldMap.style.display = 'inline';
			isCurrentMapClicked = false;
		}
	} catch (error) {
		console.error(error);
	}
}

async function handleUserInfoOpen() {
	try {
		const userInfo: HTMLDivElement = document.querySelector('.userInfo');
		const infoFromDB: HTMLDivElement = document.querySelector('.infoFromDB');
		if (!isUserInfoClicked) {
			userInfo.classList.add('userInfoOpen');
			infoFromDB.style.display = 'inline';
			isUserInfoClicked = true;
		} else {
			userInfo.classList.remove('userInfoOpen');
			infoFromDB.style.display = 'none';
			isUserInfoClicked = false;
		}
	} catch (error) {
		console.error(error);
	}
}

async function loadRoom() {
	//@ts-ignore
	const { data } = await axios.get('/users/get-user-from-cookies');
	console.log(data)
	const { userDB } = data;
	console.log(userDB)
	const roomHeader = document.querySelector('.room_header');
	roomHeader.innerHTML = `<h1>Hello ${userDB.username}!</h1><h2>what would you like to do?</h2>`;
}

async function handleAddUserToRoom(event) {
	event.preventDefault()
	console.log('trying to add user to this room')
	const existingRoominput = document.querySelector('#existingRoomName') as HTMLInputElement;
	const existingRoom = existingRoominput.value;
	console.log(existingRoom)
	//@ts-ignore
	const {data} = await axios.post("/room/findRoom", {existingRoom});
	const {roomDB} = data;
	console.log(roomDB)
	const role = "user"
	handleCreateMember(roomDB,role)
}

function getMemberIdByParams() {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const memberID = urlParams.get('memberID');
	return memberID;
}
