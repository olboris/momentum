const perm = document.querySelector('#permanent');
const temp = document.querySelector('#temporary');
const comb = document.querySelector('#combined');
const basicNumberField = document.querySelector('#basic-number');
const seniorNumberField = document.querySelector('#senior-number');
const number = document.querySelector('.tickets__number');
const sumField = document.querySelector('#sum-tickets');
const form = document.querySelector('.tickets__order-container');
basicNumberField.value = Number(localStorage.getItem('basicNum')) || Number(1);
seniorNumberField.value = Number(localStorage.getItem('seniorNum')) || Number(1);
let amount = localStorage.getItem('amount') || 30;
perm.checked = localStorage.getItem('perm') || true;
temp.checked = localStorage.getItem('temp') || false;
comb.checked = localStorage.getItem('comb') || false;

console.log(perm.checked, localStorage.getItem('perm'));
console.log(temp.checked, localStorage.getItem('temp'));
console.log(comb.checked, localStorage.getItem('comb'));
sumField.textContent = `Total &#8364; ${amount}`;


function totalAmount(){
        if (perm.checked) { 
            perm.value = +20;
        } else {
            perm.value = 0;
        }
        if (temp.checked) { 
            temp.value = +24; 
        } else {
            temp.value = 0;
        }
        if (comb.checked) { 
            comb.value = +40; 
        } else {
            comb.value = 0;
        }
        let typeTickets = (+perm.value + +temp.value + +comb.value);
        let sum = (typeTickets * basicNumberField.value) + (typeTickets * seniorNumberField.value / 2);
        localStorage.setItem('basicNum', basicNumberField.value);
        localStorage.setItem('seniorNum', seniorNumberField.value);
        localStorage.setItem('amount', sum);
        localStorage.setItem('perm', Boolean(perm.checked));
        localStorage.setItem('temp', Boolean(temp.checked));
        localStorage.setItem('comb', Boolean(comb.checked));

        console.log(perm.checked, localStorage.getItem('perm'));
        console.log(temp.checked, localStorage.getItem('temp'));
        console.log(comb.checked, localStorage.getItem('comb'));
        return sum;
    }

form.addEventListener('change' , totalAmount);