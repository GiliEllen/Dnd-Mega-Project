console.log("help");
var createAndSend = document.querySelector('#createAndSend');
var newHandoutForm = document.querySelector('#newHandoutForm');
var chooseAndSend = document.querySelector('#chooseAndSend');
var existingHandoutsForm = document.querySelector('#existingHandoutsForm');
var session = document.querySelector('.session');
createAndSend.addEventListener('click', function (event) {
    createAndSend.style.height = '500px';
    newHandoutForm.style.display = 'flex';
    newHandoutForm.style.visibility = 'visible';
    newHandoutForm.style.opacity = '1';
    console.log("hi");
});
chooseAndSend.addEventListener('click', function (event) {
    chooseAndSend.style.height = 'fit-content';
    existingHandoutsForm.style.display = 'flex';
    existingHandoutsForm.style.visibility = 'visible';
    existingHandoutsForm.style.opacity = '1';
    console.log("hi");
});
