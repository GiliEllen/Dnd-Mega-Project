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
        console.log(data)
    } catch (error) {
        console.error(error)
    }
}