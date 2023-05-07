console.log('loot');

const createAndSendLoot = document.querySelector('#createAndSendLoot') as HTMLDivElement;
const newLootForm = document.querySelector('#newLootForm') as HTMLFormElement;

const chooseAndSendLoot = document.querySelector('#chooseAndSendLoot') as HTMLDivElement;
const existingLootForm = document.querySelector('#existingLootForm') as HTMLFormElement;

createAndSendLoot.addEventListener('click', (event:any) => {
	createAndSendLoot.classList.add('active');
	newLootForm.classList.add('active');

	chooseAndSendLoot.classList.remove('active');
	existingLootForm.classList.remove('active');

	if (event.target.id === 'close_New') {
		createAndSendLoot.classList.remove('active');
		newLootForm.classList.remove('active');
	}
});
chooseAndSendLoot.addEventListener('click', (event:any) => {
	chooseAndSendLoot.classList.add('active');
	existingLootForm.classList.add('active');

	createAndSendLoot.classList.remove('active');
	newLootForm.classList.remove('active');

	if (event.target.id === 'close_Existing') {
		chooseAndSendLoot.classList.remove('active');
		existingLootForm.classList.remove('active');
	}
});
