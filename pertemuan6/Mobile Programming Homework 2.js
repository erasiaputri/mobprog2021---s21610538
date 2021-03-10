//For each of the exercises below, assume you are starting with the following programming object.
let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

//1. Write the command to add the language "Go" to the end of the languages array.
programming.languages.push("Go");
console.log(programming.languages);

//2. By using the bracket notation, change the difficulty to the value of 7.
programming.difficulty = [7];
console.log(programming.difficulty);

//3. Using the delete keyword, write the command to remove the jokes key from the programming object.
delete programming.jokes;
console.log(programming);

//4. By using the dot notation, write the command to add a new key called isFun and a value of true to the programming object.
programming.isFun = true;
console.log(programming.isFun);

//5. Using a map(), iterate through the languages array 
//and update each element to be “0 - JavaScript, 1 - Python, … ”, 
//where 0 represents the index of the array, and console.log the output.
  
let output = programming.languages.map(function (item) {
  return (item);
});

console.log("Array output : ", output);


