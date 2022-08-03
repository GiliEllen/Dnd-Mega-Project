console.log("help");
var createAndSend = document.querySelector('#createAndSend');
var newHandoutForm = document.querySelector('#newHandoutForm');
var chooseAndSend = document.querySelector('#chooseAndSend');
var existingHandoutsForm = document.querySelector('#existingHandoutsForm');
var createAndSendLoot = document.querySelector('#createAndSendLoot');
var newLootForm = document.querySelector('#newLootForm');
var chooseAndSendLoot = document.querySelector('#chooseAndSendLoot');
var existingLootForm = document.querySelector('#existingLootForm');
var session = document.querySelector('.session');
createAndSend.addEventListener('click', function () {
    createAndSend.classList.toggle('active');
    newHandoutForm.classList.toggle('active');
});
chooseAndSend.addEventListener('click', function () {
    chooseAndSend.classList.toggle('active');
    existingHandoutsForm.classList.toggle('active');
});
