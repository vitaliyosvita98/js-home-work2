const credits = 23500;
const pricePerDroid = 3000;
const numTovar = prompt("Введіть скільки вам потрібно ТВ ?");
if(numTovar == null){
    console.log("Операцію скасовано");
}
else {
   const totalPrice = pricePerDroid * numTovar;
   console.log(totalPrice);
   if(totalPrice > credits) {
    console.log("Недостатньо коштів на рахунку");
    }
    else {
    const resultLast = credits - totalPrice;
    console.log(`Ви купили ${numTovar} телевізорів,на рахунку залишилось ${resultLast} кредитів`);
    }
}

