//Make a function that will return random number if the maximum random number is parameter//

function randomNumber(maxNumber){
    return Math.floor(Math.random() * maxNumber)
  }
  
  randomNumber(9)
  
  /*Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.*/
  
  for (let i = 1; i < 100; i++){
  
     if(i % 3 === 0){
       console.log("Fizz")
     } else if (i % 5 === 0){
         console.log("Buzz")
       } else if (i % 3 === 0 && i % 5 === 0){
         console.log("FizzBuzz")
       } else {
         console.log(i)
       }
  }
  //function that will return 
  
  function starName(name){
  let newName;
  for (let i = 0; i < name.length; i++){
   name[i] = "*";
   newName = name[i];
  }
  newName[i]
  }
  starName("Aida")
  
  //Make a function that will have array of numbers and divider as a parameter and it will return array of numbers divided by divisor//
  
  function divisibleNumbers(numbers, divider){
    let num = []
    for (let i = 0; i < numbers.length; i++){
      if (numbers[i] % divider === 0){
       num.push(numbers[i])
      }
    }
    return num
  }
  
  // divisibleNumbers([1,2,4,5,6],2)
  
  let counter = 0;
  //const animalArray = ["dog", "cat", "fish"];
  
  while (counter < animalArray.length){
    console.log(`Counter (index): ${counter} - element: ${animalArray[counter]}`);
    counter++;
  }
  
  
  
  const animalArray = ["dog", "cat", "fish"];
  
  // option 1 - ES5 (still in use so good to know):
  // animal is just a placeholder, can be any word
  animalArray.forEach(function(animal){
    console.log(`option 1: ${animal}`);
  });
  
  // option 2 - ES6 (new and cool way that uses arrow function ( => ) - we will talk about this in the course)
  // arrayElement is just a placeholder, can be any word
  animalArray.forEach(arrayElement => {
    console.log(`option 2: ${arrayElement}`);
  });
  