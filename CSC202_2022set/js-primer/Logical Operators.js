a = 1; 
b = 2; 
console.log(a < 3 && b < 3); //Prints true as both a and b contain values that are less than 3. 
console.log(a > 3 && b < 3); //Prints false as the first condition (a > 3) is not true. 
console.log(a > 3 || b < 3); //Prints true as at least one condition (b < 3) is true. 
console.log(!(a < 3)); //Prints false as condition (NOT a < 3) is false. 
console.log(!(a < 3) || !(b > 3)); //Prints true as one of the conditions (NOT b > 3) is true.
