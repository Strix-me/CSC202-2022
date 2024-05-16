var accumulatedTotal = 0; //Declare and initialize a global variable. 
//Declare function named sum that expects two parameters named number1 and number2. 
function sum(number1, number2){ 
    //The variables named total, number1 and number2 below are function scope variables. 
    //They are not visible from outside the function.  
    var total = number1 + number2; 
    //Update the global variable named accumulatedTotal. 
    //Even though not declared within the function, it is visible. 
    accumulatedTotal = accumulatedTotal + total;  
    return total; 
} 
console.log(sum(2,3)); //Call sum() function and print to console the total returned. 
console.log(sum(10,20)); //Call sum() function and print to console the total returned. 
console.log(accumulatedTotal); //Show the latest value held in the global variable. This should return 35