function Person(firstName, lastName, height, weight){ 
    //Below are properties 
    this.firstName = firstName; 
    this.lastName = lastName; 
    this.height = height; 
    this.weight = weight; 
    //Below is a method 
    this.getFullName = function(){ return this.firstName + " " + this.lastName} 
    } 

var person1 = new Person("Pius", "Onobhayedo",1.72, 80); 
var person2 = new Person("Mary", "Joseph", 1.7, 70) 
console.log (person1.firstName); //Prints out Pius 
console.log (person1.getFullName()); //Prints out Pius Onobhayedo 
console.log (person2.firstName); //Prints out Mary 
console.log (person2.getFullName()); //Prints out Mary Joseph

person1.complexion = "light brown"; //Specify complexion value for object instance, person1. 
person2.complexion = "Dark brown";
console.log(person1.complexion);  //Prints out light brown. 
console.log(person2.complexion); //Prints out the default value for complexion i.e. dark brown.

Person.prototype.getComplexion = function ( ){ 
    return this.complexion 
    } 
    Person.prototype.setComplexion = function (complexion){ 
    this.complexion = complexion; 
    } 
    person1.setComplexion('black'); //Use the method just added to blueprint person 
    console.log(person1.getComplexion( )); //Prints out black. 

   /*  Math */
    Math.E; //The static property E holds the value of Euler’s number i.e. 2.718281828459045. 
    Math.PI; //The static property PI holds the value of Pi i.e. 3.141592653589793. 
    Math.cos(45); //Method returns the cosine of number passed as argument. 
    Math.abs(-30); //Method returns the absolute number equivalent of argument. 
    Math.random( ); //Method returns random floating-point number between 0 and 1, inclusive of 0 and exclusive of 1. 
    Math.max(10,5,60); //Method returns the maximum number among the arguments passed.  
    Math.min(10,5,60); //Method returns the minimum number among the arguments passed. 

    /* Date */
    var today = new Date(); //Get today’s date 
    //Instantiate new Date passing year, month-index and day in numbers 
    var birthday = new Date(1980,4,30); //Note that month index is 0-11 for Jan-Dec 
    //Instantiate new Date passing equivalent datetime string with date same as above 
    var birthday = new Date('May 30, 1980 19:00:00'); 
    //Instantiate new Date passing date and time using numbers 
    var birthday = new Date(1980, 4, 30, 19, 0, 0);//Passing year, month-index, day, hour, min, sec as numbers 
    //Below is a simple function that calculates present age 
    function calculateAge(birthday){ 
    var today = new Date(); 
    var difference = today - birthday; //Returns equivalent of time elapsed since 1970 i.e. epoch time 
    //Get the equivalent year for difference 
    var yearEquivalent = new Date(difference).getFullYear(); 
    //Subtract 1970 to get age. 
    return yearEquivalent - 1970; 
    } 
//Invoke function calculateAge() 
var birthday = new Date (1980,12,30); 
console.log(calculateAge(birthday)); //Prints out birthday  

/* Number Object */
a = 10; //Allocate a number literal to variable 
b = Number('10'); //The function converts the string '10' to the number equivalent. b = Number(10) should give 

c = new Number(10); //Instantiates a new Number object. c = new Number ('10') should give the same result c.
d = a.valueOf(); //This works but is superfluous. d = a is enough 
e = b.valueOf(); //This works but is superfluous. e = b is enough 
f = c.valueOf(); //This is necessary for f to hold only the numeric value in c 
console.log(a); //This should output 10 
console.log(b); //This should output 10 
console.log(c); //This should output [Number: 10] 
console.log(d); //This should output 10 
console.log(e); //This should output 10 
console.log(f); //This should output 10

/* error object */
try{ 
    console.output('Provoking an error by calling a non-existent function'); 
    }catch(error){ 
    console.log (error.message); //Outputs the message 'console.output is not a function' 
    console.log (error.name); //Outputs 'TypeError' 
    } 

function multiplier(){ 
    var product = 1; 
    if (arguments.length < 2){ 
        throw new Error("Illegal arguments counts. Arguments must be greater than 1") 
        } 
    for (var x=0; x < arguments.length; x++){ 
        product = product * arguments[x]; 
    } 
    return product; 
} 
//Call function without arguments. Here error will be caught and message output to console 
try{ 
    console.log(multiplier()) 
}catch(error){ 
    console.log(error.message); //This will output the message 'Illegal arguments counts. Arguments must be greater than 1' 
} 
//Call function with arguments. No error here. 
try{ 
    console.log(multiplier(2,3)); //This will output 6 
}catch(error){ 
    console.log(error.message); 
}