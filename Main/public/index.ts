console.log('this is index.ts')

const newRoomForm = document.querySelector('#NewRoomForm');
const newRoomName = document.querySelector('#roomName') as HTMLInputElement;

async function HandleCreateNewRoom(ev:any) {
    ev.preventDefault();
    try {
        const newRoom = ev.target.elements.roomName.value
        console.log(newRoom)
        //@ts-ignore
        // const { data } = await axios.get("/users/room")
        const { data } = await axios.post("/users/new-room", {newRoom});
        const { roomID}  = data;
        window.location.href = `./room.html?roomID=${roomID}`
        console.log(roomID)
    } catch (error) {
        console.error(error)
    }
}

async function HandleEnterRoom(ev:any) {
    //existingRoomName
    ev.preventDefault();
    try {
        const existingRoom = ev.target.elements.existingRoomName.value
        console.log(existingRoom)
        //@ts-ignore
        const { data } = await axios.post("/users/findRoom", {existingRoom})
        console.log(data)
        const { roomDB } = data;
        console.log(roomDB)
        window.location.href = `./room.html?roomID=${roomDB._id}`
        // console.log(roomID)
    } catch (error) {
        console.error(error)
    }
}