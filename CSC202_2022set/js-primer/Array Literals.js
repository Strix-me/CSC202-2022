//Declare a variable named vehicles and assign an array literal that contains three elements 
var vehicles = ["car","lorry","trailer"];  
console.log(vehicles); //Prints out the array literal [ 'car', 'lorry', 'trailer' ] 
//Declare a variable named basket and assign an empty array literal. 
var basket = [ ]; 
console.log(basket); //Prints out the array literal [ ] 
//Declare a variable named myExpressions and assign an array literal which contains expressions. 
var myExpressions = ["car", 2+3, 10, true];  //The second element includes a plus operation 
console.log(myExpressions); //Prints out [ 'car', 5, 10, true] 
console.log(myExpressions[0]); //Prints out 'car' 
console.log(myExpressions[1]); //Prints out 5 
console.log(myExpressions[2]); //Prints out 10 
console.log(myExpressions[3]); //Prints out true 
myExpressions[3] = false; //Change the expression at position 3. 
console.log(myExpressions[3]); //Prints out false
var myExpressions = ["car", , 10, true];  //The second element (i.e. index position 1), is undefined 
console.log(myExpressions[1]); //Prints out undefined