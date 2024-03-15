document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('p').innerHTML = localStorage.getItem('counter');
});
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('p2').innerHTML = localStorage.getItem('number');
});
if (!localStorage.getItem('counter')){
    localStorage.setItem('counter',0);
}
if (!localStorage.getItem('number')){
    localStorage.setItem('number',0);
}

function count() {
    let counter= localStorage.getItem('counter');
    let number = localStorage.getItem('number')
    counter++;
    document.querySelector('p').innerHTML = counter;
    localStorage.setItem('counter', counter)
    document.querySelector('p2').innerHTML = number;
    if (counter >= 33) {
    counter= counter - counter
    number++;
    localStorage.setItem('number', number);
    localStorage.setItem('counter', counter);
    }
}

function reset() {
    localStorage.setItem('counter', 0);
    localStorage.setItem('number', 0);
    document.querySelector('p').innerHTML = "0";
    document.querySelector('p2').innerHTML = "0"
}
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector("#button1").onclick = count;
});
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector("#button2").onclick = reset;
});
