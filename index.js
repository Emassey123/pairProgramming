// // Write a JavaScript function that takes in a random array and
// //   odd arrays and 
// //   even arrays.
// //  outputs two new arrays of
// // Example:
// // Input: [2, 4, 7, 11, 15, 16]

// // Output: Even arrays: [2, 4, 16]
// // 	  Odd arrays: [7, 11, 15]

// //Easy 1 


let array = Array(10) // generates a random array of up to 10 index
				.fill() // fills each index of said array
				.map(() =>  Math.floor(Math.random() * 50)+ 1); // arrays from 0-50 (exclusive)

//create the function that will take in a paramater for arrays variable
const gutCheck = (x) => {
    //create two variables that are arrays
    const odd = [];
    const even = [];
    //create a forLoop to loop through whatever array is passed 
    for (let i = 0; i < x.length; i++){
        //checks if the number in the arrays index is an even number, if not it will be passed as odd.
        x[i] % 2 === 0 ? even.push(x[i]) : odd.push(x[i]);
    }
    //create an object that will hold the two new arrays we created
    const returnArrays = {
        odd,
        even,
    };
    //the function will return the ${returnArrays} object holding the new arrays of even and odd numbers.
    return returnArrays;
};

console.log(gutCheck(array));


// //Easy 2
// //Create a function that checks an array for prime numbers then inserts any pimes into a new array.                    

var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]
//empty array that will contain prime values
var primeArray = []
function primenumber(number=[]){
    //initialize at i = 0
    //iterate until index is equal or greater than length of aray
    for (var i = 0; i < number.length; i++) {
// if the number in the aray equals 2 and exclusively does not equal 1
//includes 2 in array
        if (number[i] === 2 && number[i]!= 1) {
          primeArray.push(number[i])
          console.log("This is a prime number");
          console.log(number[i]);
        }
        else if (number[i] % 2 !=0 && number[i]!= 1){
         //push the number that meets the condition to primeArray
              primeArray.push(number[i])
              console.log("This is a prime number");
              console.log(number[i]);
          }
        }
      }
primenumber(numArray)
console.log(primeArray)


// // Medium 1
// // Create a Function Called “vowelChecker” that takes in a single argument (x) and logs weather or not the input is a vowel

// // creating a function that accepts a "parameter" in car case
const vowelChecker = (x) => {
    //car is vowels array the forLoop will check against to see if the argument passed is a value.
    const vowels = ["a", "e", "i", "o", "u", "y"];
    //the forLoop will take in the argument passed and iterate through the vowelsnarray checking if the passed argument matches any of the vowels array index values
    for (i = 0; i < vowels.length; i++){
        // if the argument matches any of the vowels array index it will consoleLog car...
        
       
        if (x === vowels[i]){
            q = `${x} is a vowel`;
            // if not it will consoleLog car...
        }else{
             q =` ${x} is not a vowel`;
        }
    } 
    return q;
};

console.log(vowelChecker("w"));


// //Medium 2
// // Create a function that accepts two strings, then determines whether or not the first string is an anagram of the second string by returning a boolean.

const takeAway = (string) => {
  
    const punc = [".", "'", "!", ":", ";", " ", ",", "@"];
// value of x is      
    for(i = 0; i< punc.length; i++){
     string =  string.replaceAll(punc[i], "")
        }
        return string;
    } 


const anagramChecker = (a,b) => {
    firstParam = a.toLowerCase().split("").sort().join(""); // im a dot in place
    secondParam = b.toLowerCase().split("").sort().join(""); // a decimal point    
    puncRmv1 = takeAway(firstParam);                
    puncRmv2 = takeAway(secondParam);
    let result = puncRmv1 === puncRmv2 

    return result;
}
console.log(anagramChecker("a decimal point", "I'm a dot in place."));



// Medium 3
// Write a function that takes in two numbers and determines the largest positive integer that divides the two numbers without a remainder
// MEDIUM 3 
// this function takes in two parameters
function gcd(num1, num2) {
    //this part starts the while loop which takes in the paramater of "num2"
    while(num2) { 
        //x is a variable created to hold the value of num2
        x = num2;
        //num2 is then told to hold the value of said equation num1 % num2(in the case that num1 is less then num2 the function will multiply num2 by 0 and add num1, that vallue will still be stored in the num2 variable)
        num2 = num1 % num2;
    //   num1 then takes the place of num2 in the x variable 
        num1 = x;
    //   console.log(num1);//126 78 48 30 18 12 6
    }
    return x;
}

console.log(gcd(78, 126));
console.log(gcd(360, 243));



//Medium 4
// // Create a car object with the items: Make, Model, Year, Milage, and Color. Then create 3 methods in the object; A driveToWork method, driveAroundTheWorld method, and runErrands method. Each of these methods should affect the car’s mileage adding to it each time and console logging the old mileage and the new mileage.
// driveToWork = 33 miles
// driveAroundTheWorld = 24,000 miles
// runErrands = 30 miles 
// Example 1:
// car.driveToWork();
// Output: old mileage: 2000 | new mileagea: 2033
// Explanation: 2000 + 33 = 2033
// Example 2:
// car.driveAroundTheWorld();
// Output: old mileage: 2033 | new mileagea: 26033 
// Example 2:
// car.runErrands();
// Output: old mileage: 26033 | new mileagea: 26063

const car = {
    Make: "Nissan",
    Model: "Maxima",
    Year: 2017,
    Mileage: 30000,
    Color: "Pearl White",
    driveToWork: function () {
       const oldMileage = this.Mileage;
            this.Mileage += 33
           
      r = `Old mileage: ${oldMileage} | New mileage: ${car.Mileage}`;
        return r;
        },
    driveAroundTheWorld: function () {
        const oldMileage = this.Mileage;
         this.Mileage += 24000
       r = `Old Mileage: ${oldMileage} | New Mileage: ${car.Mileage}`;
       return r;
        },
    runErrands: function () {
        const oldMileage = this.Mileage;
        this.Mileage += 30
       r =  `Old Mileage: ${oldMileage} | New Mileage: ${car.Mileage}`;
       return r;
        }
    };

    console.log(car.driveToWork());
    console.log(car.driveAroundTheWorld());
    console.log(car.runErrands());




//Hard
// // Write a function that takes in a string and returns a boolean value whether or not the string contains a pair of matching brackets ({}, [], ()). These brackets must be nested appropriately in order to return a true value
// Example 1:
// Input: str = “{hello world}” brackets(srt)
// Output: True

// Example 2:
// Input: str = “{hello world]” brackets(srt)
// Output: False
// created a function that takes in a string
  function brackets(str){
    //this is called a regular expression (/[^{}()[|]]+/g, "")
    // all this does is remove all the characters and returns just whatever brackets was used in the string. The only thing that could break this function is using an extra bracket somewhere in the string. Therefore they can put the brakets anywhere except just the first and last charecter.
    str = str.replace(/[^{}()[\]]+/g, "");
    // console.log(str)
    // if the returned string matches one of these conditions it will return "true" if not "false"
    if(str === "{}" || str === "[]" || str === "()"){
        return true;
    }
    else{
        return false;
    }
}

str = "{H!el.lo !.world}";
console.log(brackets(str));
  







// function brackets(string) {
//     //conditions if specific brackets are the same from beginning to end  return true
//       if(string[0] === "{" && string[string.length - 1] === "}"){
//           return true;
//       }else if(string[0] === "[" && string[string.length - 1] === "]"){
//           return true;
//       }else if(string[0] === "(" && string[string.length - 1] === ")"){
//           return true;
//       }else{
//          return false;
//       }
//   }
//   var string1 = "{hello world}";
//   var string2 = "{hello world]";
//   console.log(brackets(string1));
//   console.log(brackets(string2));
  











// // MEDIUM 2
// function anagramCheck (string1, string2) {
//     // string1 = string1.replace(/\s+/g, '');
//     // string2 = string2.replace(/\s+/g, ''); // dont need to replace all spaces anymore as next 2 lines get rid of everything that isnt a letter
//     string1 = string1.replace(/[^a-z]+/gi, "");
//     string2 = string2.replace(/[^a-z]+/gi, "");

//     string1 = string1.toLowerCase();
//     string2 = string2.toLowerCase();

//     let stringArray1 = Array.from(string1);
//     let stringArray2 = Array.from(string2);

//     stringArray1 = stringArray1.sort();
//     stringArray2 = stringArray2.sort();

//     for (let i = 0; i < stringArray1.length; i++){
//         if (stringArray1[i] != stringArray2[i]){
//             return false;
//         }
//     }
//     return true;
// }

// let string1 = "So dark the con of man";
// let string2 = "Madonna of the Rocks.";

// console.log(anagramCheck(string1, string2));