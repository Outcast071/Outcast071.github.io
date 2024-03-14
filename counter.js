let counter=0;
let number=0;
function count() {
    counter++;
    document.querySelector('p').innerHTML = counter;
    document.querySelector('p2').innerHTML = number;
    if (counter == 33) {
    counter = counter - 33
    number = number + 1
    }
}

function reset() {
    counter= counter - counter;
    number= number - number;
    document.querySelector('p').innerHTML = "0";
    document.querySelector('p2').innerHTML = "0"
}