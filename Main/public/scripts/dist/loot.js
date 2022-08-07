console.log('loot');
var createAndSendLoot = document.querySelector('#createAndSendLoot');
var newLootForm = document.querySelector('#newLootForm');
var chooseAndSendLoot = document.querySelector('#chooseAndSendLoot');
var existingLootForm = document.querySelector('#existingLootForm');
var session = document.querySelector('.session');
createAndSendLoot.addEventListener('click', function () {
    createAndSendLoot.classList.toggle('active');
    newLootForm.classList.toggle('active');
});
chooseAndSendLoot.addEventListener('click', function () {
    chooseAndSendLoot.classList.toggle('active');
    existingLootForm.classList.toggle('active');
});
