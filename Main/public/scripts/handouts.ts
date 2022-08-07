console.log('handouts');

const createAndSend = document.querySelector('#createAndSend') as HTMLDivElement;
const newHandoutForm = document.querySelector('#newHandoutForm') as HTMLFormElement;

const chooseAndSend = document.querySelector('#chooseAndSend') as HTMLDivElement;
const existingHandoutsForm = document.querySelector('#existingHandoutsForm') as HTMLFormElement;

createAndSend.addEventListener('click', (event) => {
	createAndSend.classList.add('active');
	newHandoutForm.classList.add('active');

	chooseAndSend.classList.remove('active');
	existingHandoutsForm.classList.remove('active');

	if (event.target.id === 'close_New') {
		createAndSend.classList.remove('active');
		newHandoutForm.classList.remove('active');
	}
});
chooseAndSend.addEventListener('click', (event) => {
	chooseAndSend.classList.add('active');
	existingHandoutsForm.classList.add('active');

	createAndSend.classList.remove('active');
	newHandoutForm.classList.remove('active');

	if (event.target.id === 'close_Existing') {
		chooseAndSend.classList.remove('active');
		existingHandoutsForm.classList.remove('active');
	}
});
