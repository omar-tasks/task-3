alert('welcome to laith al obaidi car center');

var name = prompt('what is you\'r name ?');

var income = prompt('how much is you\'r yearly income ?');
if(income >= 15000 ){
    var rich = confirm('the best choise is germany car!');
}else if (income < 15000){
        var poor = confirm('the best choise is japanies car!');
}else {
    alert('hope we see you again');
}

var quantity = prompt('how many car do you want ?');
var price;
if(rich){ 
    price = quantity * 50000;
}else if (poor){
    price = quantity * 30000;
    console.log(price);
}else{
    alert('thank you for choose us');
}

var buy = confirm('do you want to confirm the order ? ');
if(buy){
    alert('Thank you for choose obaidi cars drive save ');
}
else{
    alert('Thank you for visit us ');
}

document.write('name: ' + name + ' ' +'yearly salary: ' + income + ' ' +'items number: ' + quantity + ' ' +'total price: ' +  price );

