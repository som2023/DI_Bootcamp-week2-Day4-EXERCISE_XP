
/**************---Exercice_1----**************/

// Create a function called infoAboutMe() that takes no parameter.
// The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
// Call the function.

function infoAboutMe()
{
    
  console.log(`My name is SOM POUOTCHE. i'm 28 years old. My hobbies are learning and discovery`);
}
infoAboutMe();

// Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
// The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
// Call the function twice with the following arguments:
// infoAboutPerson("David", 45, "blue")
// infoAboutPerson("Josh", 12, "yellow")

function infoAboutPerson(personName, personAge, personFavoriteColor)
{
    return console.log(`your name is ${personName}, you are ${personAge} years old, your Favorite color is ${personFavoriteColor}`);

}
infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");
*/
/**************---Exercice_2----**************/
/*function calculatetip() {
  const amount = Number(prompt("how much is the bull?")) 
  let tipPercent

  if (amount < 50) tipPercent = 0.2
  if (amount > 50 && amount < 200) tipPercent = 0.15
  if ( amount> 200) tipPercent = 0.1

  const TotalBil = amount * (1 +  tipPercent)
  console.log("bill:",amount)
  console.log("Total bill including  :",TotalBil)

}

calculatetip()

/****************************---EXERCICE_3--*****************************/
// Create a function call isDivisible() that takes no parameter.

// In the function, loop through numbers 0 to 500.

// Console.log all the numbers divisible by 23.

// At the end, console.log the sum of all numbers that are divisible by 23.

// Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 368
// 391 414 437 460 483
// Sum : 5313


// Bonus: Add a parameter divisor to the function.

// isDivisible(divisor)

// Example:
// isDivisible(3) : Console.log all the numbers divisible by 3, and their sum
// isDivisible(45) : Console.log all the numbers divisible by 45, and their sum

function isDivisible(divisor) {
  let sum=0;
  for (let i=0;i<500;i++)
  {
      
      if(i%divisor === 0) 
      {
       console.log(i);
      sum=sum+i;
      }

  }
  console.log("the sum of numbers divisible by 23 is :",sum)
} 
isDivisible(23);

/********************************--Exercice_4******************************* */

// Add the stock and prices objects to your js file.

// Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.

// Create a function called myBill() that takes no parameters.

// The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// The item must be in stock. (Hint : check out if .. in)
// If the item is in stock find out the price in the prices object.

// Call the myBill() function.

// Bonus: If the item is in stock, decrease the item’s stock by 1
const stock={
  "banna":4,
  "apple":0,
  "pear":12,
  "orange":32,
  "blueberry":1
}
const prices={
  "banna":4,
  "apple":2,
  "pear":1,
  "orange":1.5,
  "blueberry":10
}
let shoppinglist={
  "banna":1,
  "orange":1,
  "apple":1,
}
console.log(stock);
function mybill(){
  let amount=0;
  let result=``;
  for(let item in shoppinglist)
  {
    amount=amount+stock[item]*shoppinglist[item];
    if(stock[item]>0)
    {
      stock[item]=stock[item]-shoppinglist[item];
      result+=`${item} est disponible.${item} coûte : ${prices[item]};\n`
    }
    else
    {
      result+=`${item} est indisponible;\n`
    }
  }
  return console.log(`${result}\n cout total: ${amount}`);

}
mybill();
console.log(stock);

/**********************************---EXERCICE_5---***********************************/
// Note: Read the illustration (point 4), while reading the instructions

// Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
// an item price
// and an array representing the amount of change in your pocket.

// In the function, determine whether or not you can afford the item.
// If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
// If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false

// Change will always be represented in the following order: quarters, dimes, nickels, pennies.
// A quarters is 0.25
// A dimes is 0.10
// A nickel is 0.05
// A penny is 0.01


// 4. To illustrate:

// After you created the function, invoke it like this:

// changeEnough(4.25, [25, 20, 5, 0])
// The value 4.25 represents the item’s price
// The array [25, 20, 5, 0] represents 25 quarters, 20 dimes, 5 nickels and 0 pennies.
// The function should return true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50 which is bigger than 4.25 (the total amount due)

function changeEnough(itemPrice, amountOfChange) {
  console.log("the item price is", itemPrice)

 const sum = calculateSum(amountOfChange);
 return (sum > itemPrice) 
  
}

function calculateSum(arr) {
  let sum = 0;

  for (let i = 0;i < arr.length;i++){
     let coinValue;

     const numberOfcoins = arr[i];

     if(i === 0) {
      coinValue = 0.25
    };
     if(i === 1) {
      coinValue = 0.10
    }; 
     if(i === 2) {
      coinValue = 0.05
    };
     if(i === 3) {
      coinValue = 0.01
    };
     console.log("we have", numberOfcoins,"coins that a value of", coinValue);
     
     sum = sum + numberOfcoins * coinValue
  }
  console.log("the total sum is",sum)
  return sum;
}
changeEnough(4.25, [25, 20, 5, 0]);

/********************---EXERCICE_6---*********************** */
// Let’s create functions that calculate your vacation’s costs:

// Define a function called hotelCost().
// It should ask the user for the number of nights they would like to stay in the hotel.
// If the user doesn’t answer or if the answer is not a number, ask again.
// The hotel costs $140 per night. The function should return the total price of the hotel.

// Define a function called planeRideCost().
// It should ask the user for their destination.
// If the user doesn’t answer or if the answer is not a string, ask again.
// The function should return a different price depending on the location.
// “London”: 183$
// “Paris” : 220$
// All other destination : 300$

// Define a function called rentalCarCost().
// It should ask the user for the number of days they would like to rent the car.
// If the user doesn’t answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car. The car costs $40 everyday.
// If the user rents a car for more than 10 days, they get a 5% discount.
// The function should return the total price of the car rental.

// Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
// Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().

// Call the function totalVacationCost()

// Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.




function hotelCost(numberOfNights) {
  
  const costPerNight = 140;
  const totalPrice = Number(numberOfNights) * costPerNight
  return totalPrice;
}

function isOnlyNumbers(str){
  const regex = new RegExp(/^[0-9]*$/);
  return regex.test(str);
}

function includesNumbers(str){
  const regex = new RegExp(/\d/);
  return regex.test(str);
}
function planeRideCost(destination){
  if(destination === "London") return 183
  if(destination === "PAris") return 220
  return 300
}
  function rentalCarCost(carAnswer){
  
    const dailyPrice = 40;
    const numberOfDays = Number(carAnswer);
    
    let discount = 0;
    if (numberOfDays >= 10) discount = 0.05;
    
    const totalPrice = dailyPrice * numberOfDays * (1-discount); 
    return totalPrice;

  }
  function totalVacationCost() {
    let hotelAnswer;
    let carAnswer;
    let destination = "";
    

    while (!isOnlyNumbers(hotelAnswer)) {
        hotelAnswer  = prompt("How many nights would you like to stay?");
    }  
    while (!isOnlyNumbers(carAnswer)) {
         carAnswer = prompt("How many days would you like to rent the car?")
    }
    while (destination == "" || includesNumbers(destination)) {
        destination = prompt("where are you going ?");
    }

    const carPrice = rentalCarCost(carAnswer);
    const hotelPrice = hotelCost(hotelAnswer);
    const planePrice = planeRideCost(destination);

    console.log('hotelPrice:', hotelPrice);
    console.log('carPrice:', carPrice);
    console.log('planePrice:', planePrice);

    const totalPrice = carPrice + hotelPrice + planePrice
    console.log(`total Price: ${totalPrice}`)
}
totalVacationCost();