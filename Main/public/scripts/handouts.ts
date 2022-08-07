console.log('handouts')

const createAndSend = document.querySelector('#createAndSend') as HTMLDivElement;
const newHandoutForm = document.querySelector('#newHandoutForm') as HTMLFormElement;

const chooseAndSend = document.querySelector('#chooseAndSend') as HTMLDivElement;
const existingHandoutsForm = document.querySelector('#existingHandoutsForm') as HTMLFormElement;

const session = document.querySelector('.session') as HTMLDivElement;

createAndSend.addEventListener('click', () => {
	createAndSend.classList.toggle('active');
	newHandoutForm.classList.toggle('active');
})
chooseAndSend.addEventListener('click', () => {
	chooseAndSend.classList.toggle('active');
	existingHandoutsForm.classList.toggle('active');
})
