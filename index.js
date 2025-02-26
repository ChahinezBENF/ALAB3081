
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
//console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

  //console.log(dontDoThis);

  

  console.log (`*******PART 1******`);

//part 1
//Check if all numbers are divisible by 5.
//Cache the result in a variable.
 const DivBy5 = ((n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) ) === 0;
  //console.log(DivBy5);
  console.log (`The four numbers are  divisible by 5: ${DivBy5}.`);
  console.log (`*******************`);


//Check if the first number is larger than the last.
//Cache the result in a variable.
const LargThan = n1 > n4 ;
//console.log(LargThan);
console.log (`first number ${n1} is larger than the last ${n4} : ${DivBy5}.`);
console.log (`*******************`);


//Subtract the first number from the second number.
//Multiply the result by the third number.
//Find the remainder of dividing the result by the fourth number
const ArithmiticChain = ((n2 - n1) * n3) % n4 ;
//console.log(ArithmiticChain);
console.log (`Subtraction of the first number ${n2} from the second number ${n1} is: ${(n2 - n1)}.`);
console.log (`Multiple the result by the third number ${n3} is: ${(n2 - n1)*n3}.`);
console.log (`Remainder of dividing the result by the fourth number ${n4} is: ${((n2 - n1) * n3) % n4}.`);
console.log (`*******************`);


//Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. 
// Rename the variable as appropriate.
//i applied the NOT operation on all the logical operation and it gives the oposit of everithing 
const isLessOrEqual25 = n1 <= 25 && n2 <= 25 && n3 <= 25 && n4 <= 25;
//console.log(isLessOrEqual25);
console.log (`All the nember are Less or Equal than 25 : ${isLessOrEqual25}.`);
console.log (`*******************`);

console.log (`*******PART 2******`);

//Part 2 
//The distance of the trip, in total, is 1,500 miles.
const distance = 1500;
//You have a fuel budget of $175.
const budget = 175; 
//The average cost of fuel is $3 per gallon.
const price = 3;

//At 55 miles per hour, you get 30 miles per gallon.
const at55mph = 30;

//At 60 miles per hour, you get 28 miles per gallon.
const at60mph = 28;

//At 75 miles per hour, you get 23 miles per gallon.
const at75mph = 23;

// for 55 miles per hour : 
const gallonNeed55mph = distance / at55mph;
console.log (`For 55 miles per hour you need : ${gallonNeed55mph} for the entire trip`);
const coverAt55mph = (price * gallonNeed55mph) <= budget;
console.log (`the buget will be : ${price * gallonNeed55mph} $ wich is enough`);
const timeIn55mph = distance / 55;
console.log (`the trip will take : ${timeIn55mph}  hour`);
console.log (`*******************`);

// for 60 miles per hour : 
const gallonNeed60mph = distance / at60mph;
console.log (`For 60 miles per hour you need : ${gallonNeed60mph} for the entire trip`);
const coverAt60mph = (price * gallonNeed60mph) <= budget;
console.log (`the buget will be : ${price * gallonNeed60mph} $ wich is enough`);
const timeIn60mph = distance / 60;
console.log (`the trip will take : ${timeIn60mph}  hour`);
console.log (`*******************`);

// for 75 miles per hour : 
const gallonNeed75mph = distance / at55mph;
console.log (`For 55 miles per hour you need : ${gallonNeed75mph} for the entire trip`);
const coverAt75mph = (price * gallonNeed75mph) <= budget;
console.log (`the buget will be : ${price * gallonNeed75mph} $ wich is enough`);
const timeIn75mph = distance / 75;
console.log (`the trip will take : ${timeIn75mph}  hour`);
console.log (`*******************`);