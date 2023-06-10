const newRoomForm = document.querySelector("#NewRoomForm");
const newRoomName = document.querySelector("#roomName") as HTMLInputElement;
const adiv: HTMLElement = document.querySelector("div");
let isWorldMapClicked = false;
let isCurrentMapClicked = false;
let isUserInfoClicked = false;

async function getUserFromCookies() {
  try {
    //@ts-ignore
    const { data } = await axios.get("/users/get-user-from-cookies");
    const { userDB } = data;
    return userDB;
  } catch (error) {
    console.error(error);
  }
}

async function HandleCreateNewRoom(ev: any) {
  ev.preventDefault();
  try {
    const newRoom = ev.target.elements.roomName.value;
    const newRoomPassword = ev.target.elements.roomPass.value;
    //@ts-ignore
    const { data } = await axios.post("/room/new-room", {
      newRoom,
      newRoomPassword,
    });
    const { roomDB, error } = data;
    if (error) {
      handleErrorRoom(error);
    } else {
      const role = "dm";
      handleCreateMember(roomDB, role);
    }
  } catch (error) {
    console.error(error);
  }
}

async function handleCreateMember(roomDB, role) {
  try {
    const userDB = await getUserFromCookies();
    //@ts-ignore
    const { data } = await axios.post("/member/create-Member", {
      roomDB,
      userDB,
      role,
    });
    if (!data) throw new Error("Could not create member");
    const { memberDB } = data;
    if (!memberDB) throw new Error("Could extraxt member from data");

    if (memberDB.role === "dm") {
      window.location.href = `../views/mainPageDm.html?memberID=${memberDB._id}`;
    } else if (memberDB.role === "user") {
      window.location.href = `../views/mainPageUser.html?memberID=${memberDB._id}`;
    }
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
    const { data } = await axios.get("/users/get-user-from-cookies");
    const { userDB } = data;
    //@ts-ignore
    const { data } = await axios.post("/member/FindMemberByRoom", {
      existingRoom,
      existingRoomPass,
      userDB,
    });
    const { success, memberDB, error, roomDB } = data;
    if (!roomDB) handleErrorEnterRoom(error);
    if (error) handleErrorMember(error);
    if (success) {
      if (memberDB.role === "dm") {
        window.location.href = `../views/mainPageDm.html?memberID=${memberDB._id}`;
      } else if (memberDB.role === "user") {
        window.location.href = `../views/mainPageUser.html?memberID=${memberDB._id}`;
      }
    }
  } catch (error) {
    console.error(error);
  }
}

function handleErrorMember(error) {
  console.log(error);
  const roomRoot = document.querySelector("#roomRoot");
  if (error.includes("Error01")) {
    const yesRoomNoUser = document.querySelector(
      ".yesRoomNoUser"
    ) as HTMLFormElement;
    yesRoomNoUser.style.display = "inline";
    const RoomForm = document.querySelector("#RoomForm") as HTMLFormElement;
    RoomForm.style.display = "none";
  }
}
function handleDeleteThis(event) {
  try {
    const yesRoomNoUser = document.querySelector(
      ".yesRoomNoUser"
    ) as HTMLFormElement;
    yesRoomNoUser.style.display = "none";
    const RoomForm = document.querySelector("#RoomForm") as HTMLFormElement;
    RoomForm.style.display = "flex";
  } catch (error) {
    console.log(error);
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
    const { data } = await axios.post("/users/register", {
      username,
      password,
      email,
      rePassword,
    });
    console.log(data);
    const { register, user, error } = data;
    if (register) {
      window.location.href = "../views/room.html";
    }
    if (error) throw handleError(error);
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
    if (!email || !password)
      throw new Error("Missing either email or password");
    //@ts-ignore
    const { data } = await axios.post("/users/login", { password, email });

    const { login, user, error } = data;
    console.log(error);
    if (error) handleError(error);
    if (login) {
      window.location.href = "../views/room.html";
    }
  } catch (error) {
    console.error(error);
  }
}

function handleWorldMapOpen() {
  try {
    const worldMap: HTMLDivElement = document.querySelector(".worldMap");
    const currentMap: HTMLDivElement = document.querySelector(".currentMap");
    if (!isWorldMapClicked) {
      worldMap.classList.add("worldMapOpen");
      isWorldMapClicked = true;
      if (isWorldMapClicked) {
        currentMap.classList.remove("currentMapOpen");
        currentMap.style.display = "none";
        isCurrentMapClicked = false;
      }
    } else {
      worldMap.classList.remove("worldMapOpen");
      currentMap.style.display = "inline";
      isWorldMapClicked = false;
    }
  } catch (error) {
    console.error(error);
  }
}
function handleCurrentMapOpen() {
  try {
    const worldMap: HTMLDivElement = document.querySelector(".worldMap");
    const currentMap: HTMLDivElement = document.querySelector(".currentMap");

    if (!isCurrentMapClicked) {
      currentMap.classList.add("currentMapOpen");
      isCurrentMapClicked = true;
      if (isCurrentMapClicked) {
        worldMap.classList.remove("worldMapOpen");
        worldMap.style.display = "none";
        isWorldMapClicked = false;
      }
    } else {
      currentMap.classList.remove("currentMapOpen");
      worldMap.style.display = "inline";
      isCurrentMapClicked = false;
    }
  } catch (error) {
    console.error(error);
  }
}

async function handleUserInfoOpen() {
  try {
    const userInfo: HTMLDivElement = document.querySelector(".userInfo");
    const infoFromDB: HTMLDivElement = document.querySelector(".infoFromDB");
    if (!isUserInfoClicked) {
      userInfo.classList.add("userInfoOpen");
      infoFromDB.style.display = "inline";
      isUserInfoClicked = true;
    } else {
      userInfo.classList.remove("userInfoOpen");
      infoFromDB.style.display = "none";
      isUserInfoClicked = false;
    }
  } catch (error) {
    console.error(error);
  }
}

async function loadRoom() {
  //@ts-ignore
  const { data } = await axios.get("/users/get-user-from-cookies");
  const { userDB } = data;
  const roomHeader = document.querySelector(".room_header");
  roomHeader.innerHTML = `<h1>Hello ${userDB.username}!</h1><h2>what would you like to do?</h2>`;
}

async function handleAddUserToRoom(event) {
  event.preventDefault();
  console.log("trying to add user to this room");
  const existingRoominput = document.querySelector(
    "#existingRoomName"
  ) as HTMLInputElement;
  const existingRoom = existingRoominput.value;
  //@ts-ignore
  const { data } = await axios.post("/room/findRoom", { existingRoom });
  const { roomDB } = data;
  console.log(roomDB);
  const role = "user";
  handleCreateMember(roomDB, role);
}

function getMemberIdByParams() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const memberID = urlParams.get("memberID");
  return memberID;
}

function handleError(error) {
  const errorRoot = document.querySelector(".errorRoot");
  if (error.includes("User with that email can't be found"))
    errorRoot.innerHTML = "User with that email can't be found";
  if (error.includes("Email or password do not match"))
    errorRoot.innerHTML = "Email or password do not match";
  if (error.includes('"password" length must be at least 6 characters long'))
    errorRoot.innerHTML =
      "The password length must be at least 6 characters long";
  if (error.includes('"password" should contain at least 1 special character'))
    errorRoot.innerHTML =
      "The password should contain at least 1 special character";
  if (
    error.includes('"password" should contain at least 1 lowercase character')
  )
    errorRoot.innerHTML =
      "The password should contain at least 1 lowercase character";
  if (
    error.includes('"password" should contain at least 1 uppercase character')
  )
    errorRoot.innerHTML =
      "The password should contain at least 1 uppercase character";
  if (
    error.includes(
      '"password" length must be less than or equal to 16 characters long'
    )
  )
    errorRoot.innerHTML =
      "password length must be less than or equal to 16 characters long";
  if (error.includes('"repeatPassword" must be [ref:password]'))
    errorRoot.innerHTML = "Password doesn't match";
}
function handleErrorRoom(error) {
  const errorRootNewRoom = document.querySelector(".errorRootNewRoom");
  if (error.includes('"password" length must be at least 6 characters long'))
    errorRootNewRoom.innerHTML =
      "The password length must be at least 6 characters long";
  if (error.includes('"password" should contain at least 1 special character'))
    errorRootNewRoom.innerHTML =
      "The password should contain at least 1 special character";
  if (
    error.includes('"password" should contain at least 1 lowercase character')
  )
    errorRootNewRoom.innerHTML =
      "The password should contain at least 1 lowercase character";
  if (
    error.includes('"password" should contain at least 1 uppercase character')
  )
    errorRootNewRoom.innerHTML =
      "The password should contain at least 1 uppercase character";
  if (
    error.includes(
      '"password" length must be less than or equal to 16 characters long'
    )
  )
    errorRootNewRoom.innerHTML =
      "password length must be less than or equal to 16 characters long";
  if (error.includes('"repeatPassword" must be [ref:password]'))
    errorRootNewRoom.innerHTML = "Password doesn't match";
}

function handleErrorEnterRoom(error) {
  const errorRootExistingRoom = document.querySelector(
    ".errorRootExistingRoom"
  );
  if (error.includes(`Cannot read properties of null (reading 'name')`))
    errorRootExistingRoom.innerHTML = "Couldn't find this room";
  if (error.includes("Error02"))
    errorRootExistingRoom.innerHTML = "Passwords don't match";
}

interface GiliMenahem {
	am?: any;
	love?: any;
	workWith?: any,
	amGoodAt?: any,
	aspire?:any
}



						var i:GiliMenahem = {};
						i.am = ['Fullstack Developer', 'Front-end Developer'];
						i.love = ['Art', 'Music', 'Programming', 'Cats & Dogs'];
						i.workWith = ['Html', 'Css', 'Sass', 'JavaScript', 'Typescript', 'React.js', 
									'React Native', 'Node.js', 'Express', 'MongoDB', 'MySQL','Redux',
									'Git', "Github", 'aws'];
						i.amGoodAt = ['Writing clean code', 'Responsive development', 
									'Following Ui/Ux designs', "Learning fast", "Quick thinking", 
									"Code-review"];
						i.aspire = ["To inspire others", "Advance and learn more!"]