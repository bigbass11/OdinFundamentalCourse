// Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: "Real G's move in silence like lasagna.",
    person: "Lil Wayne"
},{
    quote: "I'm not a gangster, bro.",
    person: "A$AP Rocky"
},{
    quote: "Got so many chains, they call me Chaining Tatum.",
    person: "Drake"
},{
    quote: "She got a big booty, so I call her Big Booty.",
    person: "2 Chainz"
}]

let random = 0;
let previousRandom;

btn.addEventListener('click', function(){
    do {
        previousRandom = random;
        random = Math.floor(Math.random() * quotes.length);
    } while (random == previousRandom);
    console.log(random);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})