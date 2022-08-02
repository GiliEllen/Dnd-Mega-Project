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

if (createAndSend) {
	createAndSend.addEventListener('click', (event) => {
		createAndSend.style.height = '500px';
		newHandoutForm.style.display = 'flex';
		newHandoutForm.style.visibility = 'visible';
		newHandoutForm.style.opacity = '1';
	});
	chooseAndSend.addEventListener('click', (event) => {
		chooseAndSend.style.height = 'fit-content';
		existingHandoutsForm.style.display = 'flex';
		existingHandoutsForm.style.visibility = 'visible';
		existingHandoutsForm.style.opacity = '1';
	});
}

if (createAndSendLoot) {
	createAndSendLoot.addEventListener('click', (event) => {
		createAndSendLoot.style.height = '500px';
		newLootForm.style.display = 'flex';
		newLootForm.style.visibility = 'visible';
		newLootForm.style.opacity = '1';
	});
	chooseAndSendLoot.addEventListener('click', (event) => {
		chooseAndSendLoot.style.height = 'fit-content';
		existingLootForm.style.display = 'flex';
		existingLootForm.style.visibility = 'visible';
		existingLootForm.style.opacity = '1';
	});
}
