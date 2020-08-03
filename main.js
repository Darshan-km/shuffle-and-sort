let cards = document.querySelector('.cards');
let shuffle = document.querySelector('#shuffle-btn');
let sort = document.querySelector('#sort-btn');
let sortArry = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let shuffleArray = [];


function appendToDom(arr) {
    let appToDOM = '';
    arr.forEach(element => {
        appToDOM += `<div class="card bgColor-${element}">${element}</div>`
    });
    cards.innerHTML = appToDOM;
}

function appendSortedToDom(arr) {
    arr.sort((a, b) => a - b);
    appendToDom(arr);
}


//On load Window Event 
window.addEventListener('DOMContentLoaded', (event) => {
    appendSortedToDom(sortArry);
});


//Button Events
//Shuffle Event
shuffle.addEventListener('click', function () {
    shuffleArray = sortArry.sort(() => Math.random() - 0.5);
    appendToDom(shuffleArray);
});

//Sort Event
sort.addEventListener('click', function () {
    appendSortedToDom(sortArry);
});