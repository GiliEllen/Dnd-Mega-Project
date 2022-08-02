console.log(`help`);

const createAndSend = document.querySelector('#createAndSend') as HTMLDivElement;
const newHandoutForm = document.querySelector('#newHandoutForm') as HTMLFormElement;

const chooseAndSend = document.querySelector('#chooseAndSend') as HTMLDivElement;
const existingHandoutsForm = document.querySelector('#existingHandoutsForm')  as HTMLFormElement

const session = document. querySelector('.session') as HTMLDivElement;

createAndSend.addEventListener('click', (event) => {
	createAndSend.style.height = '500px';
	newHandoutForm.style.display = 'flex';
	newHandoutForm.style.visibility = 'visible';
	newHandoutForm.style.opacity = '1';

	console.log(`hi`);
});
chooseAndSend.addEventListener('click', (event) => {
	chooseAndSend.style.height = 'fit-content';
	existingHandoutsForm.style.display = 'flex';
	existingHandoutsForm.style.visibility = 'visible';
	existingHandoutsForm.style.opacity = '1';

	console.log(`hi`);
});
