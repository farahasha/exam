'use strict';

let Total=0;
let bookArr = [];
function Book(name, price) {
    this.name = name;
    this.price = price;
    bookArr.push(this);
    this.page=[];
    Total=Total+price;


}

// ==============form=====================

let form = document.getElementById('form');
form.addEventListener('submit', handelSubmit);

function handelSubmit(event) {
    event.preventDefault();
    const price = event.target.name.value;

    const newBook = new Book(name, price);
    // newBook.getpage();
    console.log(bookArr);
    newBook.renderBookArr();
    Book.getPage();
    saveTole();
    Book.renderBookArr();
}

// ==========prototype===========
Book.prototype.getPage = function () {
    this.page.push(Math.floor(Math.random() * (500 - 1 + 1) + 1));
}


// ==================table====================
let parent = document.getElementById('table');
Book.prototype.renderBookArr = function () {

    

        let trEl = document.createElement('tr');
        parent.appendChild(trEl);
        trEl.textContent = `${this.name}`;

        let tdEl1 = document.createElement('td');
        trEl.appendChild(tdEl1);
        tdEl1.textContent = `${this.page}`;

        let tdEl = document.createElement('td');
        trEl.appendChild(tdEl);
        tdEl.textContent = `${this.price}`;

        let tdEl3=document.createElement('td');
        trEl.appendChild(tdEl3);
        tdEl3.textContent=`Total:${Total}`

    }



function saveTole() {
    
    const convert = JSON.stringify(bookArr);
    localStorage.setItem('key', convert);
}

function getIte() {
    const data = localStorage.getItem('key');
    const parsed = JSON.parse(data);

    let reIn;
    if (parsed !== null) {
        for (let i = 0; i < bookArr.length; i++) {
            reIn = new Book(new [i].name, new [i].price, new [i].page);
            reIn.getPage();



        }
        reIn.renderBookArr();
    }
}
getIte();



