import { create } from "ts-node";

console.log('this is app.ts')

const userID = 123456;

function loadBody() {
    renderButtonsHandoutsLoot(userID)
}

async function handleSaveNotes(ev) {
    ev.preventDefault() ;
    try {
        const updatedNotes = ev.target.infoDump.value
        //@ts-ignore
        const { data } = await axios.post("/users/updateNotes", {userID, updatedNotes});
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

function renderButtonsHandoutsLoot(userID) {
    const buttonContainer = document.querySelector('#buttonContainer');
    const sendHandouts = 
     `<a herf="handoutsDm.html?${userID}">Send Handouts</a>`;
     `<a herf="lootDm.html?${userID}">Send Loot</a>`;
}