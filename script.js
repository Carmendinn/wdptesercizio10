//esercizio 1

const titolo = document.getElementById("titolo");
titolo.textContent = "Hello";
console.log(titolo.textContent);

//esercizio 2
let isColored = false;
const body = document.getElementsByTagName("body")[0];
body.addEventListener("click", function () {
    body.style.backgroundColor = "darkGrey";
});

function cambiaColore(colore) {
    if (isColored) {
        body.style.backgroundColor = "white";
    } else {
        body.style.backgroundColor = "darkGrey";
    }

    isColored = !isColored;
};
//esercizio 3

const indirizzo = document.getElementById("indirizzo");
indirizzo.textContent = "xxx via xxx";
console.log(indirizzo.textContent);

//esercizio 4

const links = document.getElementsByTagName('a');
for (let i = 0; i < links.lenght; i++){
    links[i].classList.add("links")
};
console.log("links")

//esercizio 5

const immaginiTabella = document.getElementById("img");

function toggleImg() {
      immaginiTabella.forEach(function(img) {
        img.classList.toggle("nascosta");
      });
    }

console.log(img);

//esercizio 6

const prezzi = document.querySelectorAll('.prezzo');
prezzi.forEach(function(prezzo) {
    let coloreCasuale = '#' + Math.floor(Math.random()*16777215).toString(16);
    prezzo.style.color = coloreCasuale;
});

console.log(prezzi);


