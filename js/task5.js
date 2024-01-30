const countryNum = prompt("Введіть країну");
const country1 = "Китай";
const country2 = "Чилі";
const country3 = "Австралія";
const country4 = "Індія";
const country5 = "Ямайка";
let price = 0;

if(countryNum.toUpperCase() == country1.toUpperCase()) {
    let price = 100;
    console.log(`Доставка в ${country1} буде коштувати ${price}`)
}
else if(countryNum.toUpperCase() == country2.toUpperCase()) {
    let price = 250;
    console.log(`Доставка в ${country2} буде коштувати ${price}`)
}
else if(countryNum.toUpperCase() == country3.toUpperCase()) {
    let price = 170;
    console.log(`Доставка в ${country3} буде коштувати ${price}`)
}
else if(countryNum.toUpperCase() == country4.toUpperCase()) {
    let price = 80;
    console.log(`Доставка в ${country4} буде коштувати ${price}`)
}
else if(countryNum.toUpperCase() == country5.toUpperCase()) {
    let price = 120;
    console.log(`Доставка в ${country5} буде коштувати ${price}`)
}
else {
    console.log("В вашій країні доставка не доступна");
}
