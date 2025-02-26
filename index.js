
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

  
//part 1
//Check if all numbers are divisible by 5.
//Cache the result in a variable.
  let DivBy5 = ((n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) ) === 0;
  //console.log(DivBy5);
  console.log (`The four numbers are  divisible by 5: ${DivBy5}.`);
  console.log (`*******************`);


//Check if the first number is larger than the last.
//Cache the result in a variable.
let LargThan = n1 > n4 ;
//console.log(LargThan);
console.log (`first number ${n1} is larger than the last ${n4} : ${DivBy5}.`);
console.log (`*******************`);


//Subtract the first number from the second number.
//Multiply the result by the third number.
//Find the remainder of dividing the result by the fourth number
let ArithmiticChain = ((n2 - n1) * n3) % n4 ;
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
