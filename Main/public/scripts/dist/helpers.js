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
if (createAndSend) {
    createAndSend.addEventListener('click', function (event) {
        createAndSend.style.height = '500px';
        newHandoutForm.style.display = 'flex';
        newHandoutForm.style.visibility = 'visible';
        newHandoutForm.style.opacity = '1';
    });
    chooseAndSend.addEventListener('click', function (event) {
        chooseAndSend.style.height = 'fit-content';
        existingHandoutsForm.style.display = 'flex';
        existingHandoutsForm.style.visibility = 'visible';
        existingHandoutsForm.style.opacity = '1';
    });
}
if (createAndSendLoot) {
    createAndSendLoot.addEventListener('click', function (event) {
        createAndSendLoot.style.height = '500px';
        newLootForm.style.display = 'flex';
        newLootForm.style.visibility = 'visible';
        newLootForm.style.opacity = '1';
    });
    chooseAndSendLoot.addEventListener('click', function (event) {
        chooseAndSendLoot.style.height = 'fit-content';
        existingLootForm.style.display = 'flex';
        existingLootForm.style.visibility = 'visible';
        existingLootForm.style.opacity = '1';
    });
}
