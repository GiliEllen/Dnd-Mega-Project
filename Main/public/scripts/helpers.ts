console.log(`help`);

const createAndSend = document.querySelector('#createAndSend') as HTMLDivElement;
const newHandoutForm = document.querySelector('#newHandoutForm') as HTMLFormElement;

const chooseAndSend = document.querySelector('#chooseAndSend') as HTMLDivElement;
const existingHandoutsForm = document.querySelector('#existingHandoutsForm') as HTMLFormElement;

const createAndSendLoot = document.querySelector('#createAndSendLoot') as HTMLDivElement;
const newLootForm = document.querySelector('#newLootForm') as HTMLFormElement;

const chooseAndSendLoot = document.querySelector('#chooseAndSendLoot') as HTMLDivElement;
const existingLootForm = document.querySelector('#existingLootForm') as HTMLFormElement;

const session = document.querySelector('.session') as HTMLDivElement;

createAndSend.addEventListener('click', () => {
	createAndSend.classList.toggle('active');
	newHandoutForm.classList.toggle('active');
})
chooseAndSend.addEventListener('click', () => {
	chooseAndSend.classList.toggle('active');
	existingHandoutsForm.classList.toggle('active');
})