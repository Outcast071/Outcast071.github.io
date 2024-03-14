let counter=0;
let number=0;
function count() {
    counter++;
    document.querySelector('h1').innerHTML = counter;
    document.querySelector('h2').innerHTML = number;
    if (counter == 33) {
    counter = counter - 33
    number = number + 1
    }
}

function reset() {
    counter= counter - counter;
    number= number - number;
    document.querySelector('h1').innerHTML = "0";
    document.querySelector('h2').innerHTML = "0"
}