console.log('this is index.ts');

const newRoomForm = document.querySelector('#NewRoomForm');
const newRoomName = document.querySelector('#roomName') as HTMLInputElement;
const adiv: HTMLElement = document.querySelector('div');

async function HandleCreateNewRoom(ev: any) {
	ev.preventDefault();
	try {
		const newRoom = ev.target.elements.roomName.value;
		//@ts-ignore
		// const { data } = await axios.get("/users/room")
		const { data } = await axios.post('/users/new-room', { newRoom });
		const { roomID } = data;
		window.location.href = `./room.html?roomID=${roomID}`;
	} catch (error) {
		console.error(error);
	}
}

async function HandleEnterRoom(ev: any) {
	//existingRoomName
	ev.preventDefault();
	try {
		const existingRoom = ev.target.elements.existingRoomName.value;
		console.log(existingRoom);
		//@ts-ignore
		const { data } = await axios.post('/users/findRoom', { existingRoom });
		console.log(data);
		const { roomDB } = data;
		console.log(roomDB);
		window.location.href = `./room.html?roomID=${roomDB._id}`;
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
		const roomID = getRoomIdByParams();
		const role = getRoleByParams();
		//@ts-ignore
		const { data } = await axios.post('/users/register', { username, password, roomID, role });
		const { register, user, error } = data;
		if(role === "dm"){
			window.location.href = `./mainPageDm.html?roomID=${roomID}&userID=${user._id}`;
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
		const password = event.target.password.value;
		const roomID = 'room1';
		const role = 'user'; //check with carmel
		//@ts-ignore
		const { data } = await axios.post('/users/login', { username, password, roomID, role });
		const { login, user, error } = data;

		if (error) throw error;
		else {
			if (login && role == 'user') {
				window.location.href = `mainPageUser.html?userid=${user._id}`;
			} else if (login && role == 'DM') {
				window.location.href = 'mainPageDM.html';
			} else {
				adiv.innerText = 'wrong password/username';
			}
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

function loadRoom() {
	console.log('this is room');
	//   checkRoomIDAndIfNew()
	const roomID = getRoomIdByParams();
	getRoomById(roomID)
}

function getRoleByParams() {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const role = urlParams.get('role');
	console.log(role)
	return role;
}

function getRoomIdByParams() {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const roomID = urlParams.get('roomID');
	return roomID;
}

async function getRoomById(roomID) {
		//@ts-ignore
	const { data } = await axios.post('/users/getRoomByID', {roomID});
	const {room} = data;
	if (room.userListID.length === 0){
		const userlist = 0;
		renderRoom( userlist, room);
	} else if (room.userListID.length > 0){
		const userlist = getRoomUsers(roomID);
		renderRoom(userlist, room)
	}
}
async function getRoomUsers(roomID) {
	const { data } = await axios.post('/users/getRoomUsers', {roomID});
	console.log(data)
}

function renderRoom( userlist, room) {
	const roomContainer = document.querySelector('.room_container');
	let html = "";
	if(userlist){
// 		html = `<h1>Room name: ${room.name}</h1>
//         <div class="room_container__userContainer">
//             <div class="room_container__dmContainer">
//                 <a href="login.html?roomID=${room._id}&role=dm">Dm Login</a>
//             </div>
// 			<h3>Soon a function will fill this with users</h3>
//         </div>
//         <a href="login.html?roomID=${room._id}"><button>Register New Player</button></a>
// `
	} else {
		html = `<h1>Room name: ${room.name}</h1>
        <div class="room_container__userContainer">
            <div class="room_container__dmContainer">
                <a href="register.html?roomID=${room._id}&role=dm">Dm Register</a>
            </div>
			<h3>User List is empty. Tell your user to enter the room and register!</h3>
        </div>
        <a href="register.html?roomID=${room._id}&role=user"><button>Register New Player</button></a>
`
	}
	roomContainer.innerHTML = html;
}



// Ask Tal about cookies
async function checkRoomIDAndIfNew() {
	//@ts-ignore
	const { data } = await axios.get('/users/getRoomID');
	const { newRoom, roomID } = data;
	console.log(newRoom, roomID);
}