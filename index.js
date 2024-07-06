const myMessage = document.querySelector(".myMessage");
const theMessageButton = document.querySelector(".theMessageButton");
const clearMessageButton = document.querySelector(".clearMessageButton");
const inputBox = document.querySelector('.theInputValue');
const fruitList = document.querySelector(".fruits");
const fruitInput = document.querySelector(".addFruitInput");
const addFruitButton = document.querySelector(".addFruitButton");
const removeFruitButton = document.querySelector(".removeFruitButton");

theMessageButton.addEventListener("click", function () {
  myMessage.innerText = "This is the Message in the DOM!";
});
clearMessageButton.addEventListener("click", function () {
  myMessage.innerText = "";
});
theMessageButton.addEventListener('click', function() {
    myMessage.innerText = inputBox.value;
    myMessage.classList.toggle('italic')
});

const fruits = ['Apples', 'Pears', 'Oranges', 'Grapes', 'Bananas'];
// Initial fruit list
fruits.forEach(createFruitListItem);

function createFruitListItem(fruit) {
    const li = document.createElement('li');
    li.innerHTML = fruit;
    li.addEventListener('click', function() {
      fruitInput.value = fruit; 
    });
    fruitList.appendChild(li);
}

addFruitButton.addEventListener('click', function() {
    const newFruit = fruitInput.value.trim();
    if (newFruit) {
        createFruitListItem(newFruit);
        fruitInput.value = '';
    }
});

removeFruitButton.addEventListener("click", function () {
    const fruitToRemove = fruitInput.value.trim().toLowerCase();
  
    for (const item of fruitList.children) {
        if (item.innerHTML.toLowerCase() === fruitToRemove) {
            item.remove();
            break;
        }
    }
});
