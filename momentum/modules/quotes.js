const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

export default async function getQuotes() {
    try {
        const quotes = 'quotes.json'
        const res = await fetch(quotes);
        const data = await res.json();
        function getRandomNum(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        const id = getRandomNum(0, 9);
        quote.textContent = data[id].en.text;
        author.textContent = data[id].en.author;
    }
    catch (err) {
        console.log(err);
        quote.textContent = "The quote could not be showed. Please, try again";
    }    
}