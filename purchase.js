alert('welcome to laith al obaidi car center');

var name = prompt('what is you\'r name ?');

var income = prompt('how much is you\'r yearly income ?');

if (income >= 15000 ) {
    var rich = confirm('the best choise is germany car!');
} else if (income < 15000 && income >= 10000) {
    var poor = confirm('the best choise is japanies car!');
} else {
    alert('hope we see you again');
}

if (income >= 10000) {
    var quantity = prompt('how many car do you want ?');
    var price;
    if (rich) { 
        price = quantity * 50000;
    } else if (poor) {
        price = quantity * 30000;
    }
    
    var buy = confirm('do you want to confirm the order ? ');
    if (buy) {
        alert('Thank you for choose obaidi cars drive save ');
    } else {
        alert('Thank you for visit us ');
    }
}


var element = document.getElementById('output');

var newelement = document.createElement('h1');
newelement.textContent = 'name:' + ' ' + name; 
element.appendChild(newelement);


var h2 = document.createElement('h2');
h2.textContent = 'salary: ' + income;
element.appendChild(h2);

var h3 = document.createElement('h3');
h3.textContent = 'quantity: ' + quantity;
element.appendChild(h3);

var h4 = document.createElement('h4');
h4.textContent = 'price: ' + price;
element.appendChild(h4);

quantity = parseInt(quantity);
for (var i = quantity; i > 0; i-- ){
    var qun = document.createElement('p');
    qun.textContent = 'car ' + i;
    element.appendChild(qun);
}

console.log(typeof quantity);


for (var i=2; i <= 10; i = i + 2 ) {
console.log(i);
}
