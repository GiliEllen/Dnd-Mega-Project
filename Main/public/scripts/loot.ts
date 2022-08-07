console.log('loot');

const createAndSendLoot = document.querySelector('#createAndSendLoot') as HTMLDivElement;
const newLootForm = document.querySelector('#newLootForm') as HTMLFormElement;

const chooseAndSendLoot = document.querySelector('#chooseAndSendLoot') as HTMLDivElement;
const existingLootForm = document.querySelector('#existingLootForm') as HTMLFormElement;

const session = document.querySelector('.session') as HTMLDivElement;


createAndSendLoot.addEventListener('click', () => {
	createAndSendLoot.classList.toggle('active');
	newLootForm.classList.toggle('active');
})
chooseAndSendLoot.addEventListener('click', () => {
	chooseAndSendLoot.classList.toggle('active');
	existingLootForm.classList.toggle('active');
})