const newRoomForm = document.querySelector('#NewRoomForm');
const newRoomName = document.querySelector('#roomName') as HTMLInputElement;
const adiv: HTMLElement = document.querySelector('div');

async function HandleCreateNewRoom(ev: any) {
	ev.preventDefault();
	try {
		const newRoom = ev.target.elements.roomName.value;
		//@ts-ignore
		const { data } = await axios.post('/room/new-room', { newRoom });
		const { roomDB } = data;
		const role = "dm";
		handleCreateMember(roomDB, role)
		//  window.location.href = `./mainPageDm.html`;
	} catch (error) {
		console.error(error);
	}
}

async function handleCreateMember(roomDB, role) {
	try {
		console.log("enter creat member function")
	 const userDB = await getUserFromCookies();
	console.log(userDB)
	// console.log(`creating member from user ${user.username} and `)
	//@ts-ignore
	const { data } = await axios.post('/member/create-Member', {roomDB, userDB, role});
	console.log("index.js thinks member was created")
	} catch (error) {
		console.error(error)
	}
}

async function getUserFromCookies() {
	try {
		console.log('loading room cookies');
	//@ts-ignore
	const { data } = await axios.get('/users/get-user-from-cookies');
	const {userDB} = data;
	return userDB
	} catch (error) {
		console.error(error)
	}
	
}

async function HandleEnterRoom(ev: any) {
	//existingRoomName
	ev.preventDefault();
	try {
		const existingRoom = ev.target.elements.existingRoomName.value;
		console.log(existingRoom);
		//@ts-ignore
		const { data } = await axios.post('/room/findRoom', { existingRoom });
		console.log(data);
		const { roomDB } = data;
		console.log(roomDB);
		// window.location.href = `./room.html?roomID=${roomDB._id}`;
		// console.log(roomID)
	} catch (error) {
		console.error(error);
	}
}

async function handleRegister(event: any) {
	event.preventDefault();
	try {
		const username = event.target.username.value;
		const password = event.target.password.value;
		//@ts-ignore
		const { data } = await axios.post('/users/register', { username, password });
		console.log(data)
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
		console.log('this is index trying to log in')
		const username = event.target.username.value;
		const password = event.target.password.value;
		//@ts-ignore
		const { data } = await axios.post('/users/login', { username, password});
		
		const { login, user, error } = data;
		console.log(error)
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
		const userid = '62d96ac729bed14e36fb7459';
		//@ts-ignore
		const { data } = await axios.post('users/render-user-main-page', { userid });
		const { user, error } = data;
		const pageTitle: HTMLElement = document.querySelector('.title');
		pageTitle.innerHTML = `Welcome ${user.username}`;
	} catch (error) {
		console.error(error);
	}
}

async function loadRoom() {
	console.log('loading user cookies');
	//@ts-ignore
	const { data } = await axios.get('/users/get-user-from-cookies');
	const {userDB} = data;
	const roomContainer = document.querySelector('.room_container');
	roomContainer.innerHTML = `<h1>Hello ${userDB.username}</h1>`
}

// function getRoomIdByParams() {
// 	const queryString = window.location.search;
// 	const urlParams = new URLSearchParams(queryString);
// 	const roomID = urlParams.get('roomID');
// 	return roomID;
// }

// async function getRoomById(roomID) {
// 	//@ts-ignore
// 	const { data } = await axios.post('/users/getRoomByID', { roomID });
// 	const { room } = data;
// 	if (room.userListID.length === 0) {
// 		const userlist = 0;
// 		renderRoom(userlist, room);
// 	} else if (room.userListID.length > 0) {

// 		renderRoom(userlist, room);
// 	}
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
