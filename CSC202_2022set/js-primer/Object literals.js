var myObject = { 
    name: { 
    
    firstName:"Pius", 
    surname:"Onobhayedo" 
        }, 
    expertise: "Software design and development", 
    languages: ["Python","JavaScript","Java","C++"], 
    isRetired: false, 
    favouriteCombination: 3 + 3
    
    }

console.log(myObject.name); //Prints out { firstName: 'Pius', surname: 'Onobhayedo' }. 
console.log(myObject['name']); //Also prints out { firstName: 'Pius', surname: 'Onobhayedo' }. 
console.log(myObject.expertise); //Prints out Software design and development 
console.log(myObject['expertise']); //Also prints out Software design and development 
console.log(myObject.languages); //Prints out [ 'Python', 'JavaScript', 'Java', 'C++' ] 
console.log(myObject['languages']); //Also prints out [ 'Python', 'JavaScript', 'Java', 'C++' ] 
console.log(myObject.isRetired); //Prints out false 
console.log(myObject['isRetired']); //Also prints out false 
console.log(myObject.favouriteCombination); //Prints out 6 
console.log(myObject['favouriteCombination']); //Also prints out 6

//Accessing nested objects 
console.log(myObject.name.firstName); //Prints out Pius. 
console.log(myObject['name']['firstName']); //Also prints out Pius.

myObject.favouriteCombination = 9 + 9; 
console.log(myObject.favouriteCombination); //Prints out 18

var phones = { 
    make: 'Samsung', 
    model: 'S7', 
    cost: 500 
    } 
    console.log('make' in phones); //Prints out true 
    delete phones.make; //Delete property phones.make 
    console.log('make' in phones); //Prints out false 