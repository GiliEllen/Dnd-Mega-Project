console.log('handouts');
var createAndSend = document.querySelector('#createAndSend');
var newHandoutForm = document.querySelector('#newHandoutForm');
var chooseAndSend = document.querySelector('#chooseAndSend');
var existingHandoutsForm = document.querySelector('#existingHandoutsForm');
createAndSend.addEventListener('click', function (event) {
    createAndSend.classList.add('active');
    newHandoutForm.classList.add('active');
    chooseAndSend.classList.remove('active');
    existingHandoutsForm.classList.remove('active');
    if (event.target.id === 'close_New') {
        createAndSend.classList.remove('active');
        newHandoutForm.classList.remove('active');
    }
});
chooseAndSend.addEventListener('click', function (event) {
    chooseAndSend.classList.add('active');
    existingHandoutsForm.classList.add('active');
    createAndSend.classList.remove('active');
    newHandoutForm.classList.remove('active');
    if (event.target.id === 'close_Existing') {
        chooseAndSend.classList.remove('active');
        existingHandoutsForm.classList.remove('active');
    }
});
