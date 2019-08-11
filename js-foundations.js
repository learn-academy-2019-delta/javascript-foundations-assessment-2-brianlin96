// ASSESSMENT 2: JAVASCRIPT FOUNDATIONS
// Coding practical questions

// 1. Write an arrow function that takes a number as an argument and decides if the number is evenly divisble by three or not. Use the test cases 15, 0, 385, -7. Expected output: "15 is divisible by three", "0 is divisible by three", "385 is not divisble by three", "-7 is not divisble by three".
let divideBy3 = (num) => {
    if(num%3==0){
        return `${num} is divisible by three`
    } else {
       return  `${num} is not divisible by three`
    }
}
console.log(divideBy3(15));
console.log(divideBy3(0));
console.log(divideBy3(385));
console.log(divideBy3(-7));


// 2. Create an object called helloMe. Include your firstName, lastName and TWO OTHER properties of you. Add a method to your object that will return a sentence using the object properties to describe you.
helloMe = {
    firstName: "Brian", 
    lastName: "Lin", 
    height: "6ft", 
    DOB: "2/25/1996", 
    describe: () => {return `I am ${this.firstName} ${this.lastName} and I am ${this.height} tall. My DOB is ${this.DOB}`}
}
console.log(helloMe.describe());


// -------------------------------------------------
// Consider the variable:

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]

// 3a. Write a function that returns every other item as one string. Expected output: "streetlamp teeth nephew database"
everyOther = (arr) => {
    let newArr = arr.filter(string=>arr.indexOf(string)%2==0)
    return newArr.join(" ")
}
console.log(everyOther(randomNouns));


// 3b. Create an arrow function that takes in the variable and returns an array with the number of letters in each string. Expected output: [10, 6, 5, 10, 6, 11, 8]
stringNum = (arr) =>{
    let newArr = arr.map(string=>string.length)
    return newArr
}
console.log(stringNum(randomNouns));


// 3c. Stretch: Create a function called capitalizer that takes in the variable and returns the array with all the words capitalized. Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]
capFirstLetter = (arr) =>{
    let newArr = arr.map(string=>string[0].toUpperCase()+string.substring(1))
    return newArr
}
console.log(capFirstLetter(randomNouns));


// -------------------------------------------------
// Consider the variables:
var testString1 = "learn"
var testString2 = "academy"
var testString3 = "sandiego"

// 4a. Write a function called alphabetSoup that takes one argument and returns a string with all the letters in alphabetical order. Use each of the varibales as test cases. Expected output: "aelnr" "aacdemy" "adeginos"
alphabetSoup = (string) => {
    arrString = string.split('')
    arrString = arrString.sort()
    return arrString.join('')
}
console.log(alphabetSoup(testString1));
console.log(alphabetSoup(testString2));
console.log(alphabetSoup(testString3));


// 4b. Write a function that takes in all three variables and returns a string with all the letters in alphabetical order. Expected output: "aaaacddeeegilmnnorsy"
alphabetSouper = (string1, string2, string3) => {
    let arrString = []
    arrString.push(...string1.split(''), ...string2.split(""), ...string3.split(""))
    arrString = arrString.sort()
    return arrString.join('')
}
console.log(alphabetSouper(testString1, testString2, testString3));



// -------------------------------------------------
// Consider the variables:
var amounts = [9, 1, 8, 16, 5, 1, 42]
var animals = ["ducks", "elephants", "pangolins", "zebras", "giraffes", "penguins", "llamas"]

// 5a. Write a function that takes the two variables and returns a combined string. Expected output: "9 ducks 1 elephants 8 pangolins 16 zebras 5 giraffes 1 penguins 42 llamas"
class noobZoo{
    constructor(number, animals){
        this.number = number
        this.animals = animals
        this.arr1 = []
    }
    getDescription(){
        for(let i =0; i<this.number.length;i++){
            this.arr1.push(this.number[i],this.animals[i])
        }
        console.log(this.arr1.join(' '))
        
        
    }
}

let noobZoo1 = new noobZoo(amounts, animals)
noobZoo1.getDescription()

// 5b. Stretch: Create a function that combines the two variables and updates the animal to be singular if the animal's corresponding number is 1. Expected output: "9 ducks 1 elephant 8 pangolins 16 zebras 5 giraffes 1 penguin 42 llamas"
class Zoo{
    constructor(number, animals){
        this.number = number
        this.animals = animals
        this.arr1 = []
    }
    getDescription(){
        for(let i =0; i<this.number.length;i++){
            this.arr1.push(this.number[i],this.animals[i])
        }

        for(let j=0; j<this.arr1.length;j+=2){
            if(this.arr1[j]==1){
                this.arr1[j+1] = this.arr1[j+1].substring(0,this.arr1[j+1].length-1)
            }
            
        }
        console.log(this.arr1.join(' '))
        
        
    }
}

let zoo1 = new Zoo(amounts, animals)
zoo1.getDescription()