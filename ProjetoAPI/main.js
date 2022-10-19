const endpoint = 'http://data.fixer.io/api/latest?access_key=8a68958b25126e21306507320e9bd239';

const euroField = document.querySelector(".euro");
const RealField = document.querySelector(".real");

function conversor(){
    
    fetch(endpoint)
    .then(Response => Response.json())
    .then(date => {
        const euroAmount = date.rates.BRL;
        const euro = euroField.value;
        const real = (euro * euroAmount).toFixed(2);
        RealField.value = real;
    });
}

document.querySelector(".convertButton").addEventListener("click", conversor);
euroField.addEventListener("input", conversor);