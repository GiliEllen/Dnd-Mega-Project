console.log('this is index.ts');

const newRoomForm = document.querySelector('#NewRoomForm');
const newRoomName = document.querySelector('#roomName') as HTMLInputElement;
const adiv: HTMLElement = document.querySelector('div');

async function HandleCreateNewRoom(ev: any) {
	ev.preventDefault();
	try {
		const newRoom = ev.target.elements.roomName.value;
		console.log(newRoom);
		//@ts-ignore
		// const { data } = await axios.get("/users/room")
		const { data } = await axios.post('/users/new-room', { newRoom });
		const { roomID } = data;
		window.location.href = `./room.html?roomID=${roomID}`;
		console.log(roomID);
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
		const roomID = 'room1';
		const role = 'user';
		//@ts-ignore
		const { data } = await axios.post('/users/register', { username, password, roomID, role });
		const { register, error } = data;
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





// function goToRoomNum(event) {
//     event.preventDefault()
//     try {
//         console.log('heyyyyyyyyyyy')
//         const roomNum = event.target.elements.roomNum.value
//         console.log(roomNum)
//         window.location.href = `room.html?roomnum=${roomNum}`;

//     } catch(error){
//       console.error(error)
//     }
//   }

// function enterRoom(){
//     try {
//         console.log('hello')
//         const searchParams = new URLSearchParams(window.location.href)
//         const roomNum = searchParams.get('roomnum')
//         console.log(roomNum)
//     } catch (error) {

//       console.error(error)
//     }
//   }

function loadRoom() {
  console.log('this is room')
}