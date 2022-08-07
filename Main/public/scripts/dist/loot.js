console.log('loot');
var createAndSendLoot = document.querySelector('#createAndSendLoot');
var newLootForm = document.querySelector('#newLootForm');
var chooseAndSendLoot = document.querySelector('#chooseAndSendLoot');
var existingLootForm = document.querySelector('#existingLootForm');
createAndSendLoot.addEventListener('click', function (event) {
    createAndSendLoot.classList.add('active');
    newLootForm.classList.add('active');
    chooseAndSendLoot.classList.remove('active');
    existingLootForm.classList.remove('active');
    if (event.target.id === 'close_New') {
        createAndSendLoot.classList.remove('active');
        newLootForm.classList.remove('active');
    }
});
chooseAndSendLoot.addEventListener('click', function (event) {
    chooseAndSendLoot.classList.add('active');
    existingLootForm.classList.add('active');
    createAndSendLoot.classList.remove('active');
    newLootForm.classList.remove('active');
    if (event.target.id === 'close_Existing') {
        chooseAndSendLoot.classList.remove('active');
        existingLootForm.classList.remove('active');
    }
});
