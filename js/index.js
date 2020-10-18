let myElement = document.getElementById("bids");
let myString = localStorage.getItem("LocalStorageBidArray");
let myArray = JSON.parse(myString) || [];
console.log(myArray);
myElement.innerText = myArray;

function bid1() {
    let bidElem = document.getElementById("input1");
    let bidAmount = bidElem.value;
    save("Bidder #1: $" + bidAmount);
    myElement.innerText = myArray;
}

function bid2() {
    let bidElem = document.getElementById("input2");
    let bidAmount = bidElem.value;
    save("Bidder #2: $" + bidAmount);
    myElement.innerText = myArray;
}

function save(addToArr) {
 myArray.push(addToArr);
 localStorage.setItem("LocalStorageBidArray", JSON.stringify(myArray));
}