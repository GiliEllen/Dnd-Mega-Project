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
    const sendHandouts = document.createElement('a');
    const sendLoot = document.createElement('a');

    sendHandouts.href = `handoutsDm.html?${userID}"`;
    sendHandouts.innerHTML = `<button>Send Handouts</button>`
    buttonContainer.appendChild(sendHandouts);

    sendLoot.href = `lootDm.html?${userID}"`;
    sendLoot.innerHTML = `<button>Send Loot</button>`;
    buttonContainer.appendChild(sendLoot);

}