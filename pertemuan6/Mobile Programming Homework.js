//Mobile Programming Assignments

// For each of the exercises below, assume you are starting with the following people array.
let people = ["Greg", "Mary", "Devon", "James"];

//1. Using a for-loop, iterate through this array and console.log all of the people.
for(let i = 0; i<people.length; i++){
    console.log(people[i]);
}

//2. Using a forEach(),  iterate through this array and console.log all of the people.
function showList(people) {
    console.log(people);
  }
  people.forEach(showList);
  
// 3. Write the command to remove "Greg" from the array.
people.shift();
people.forEach(showList);

// 4. Write the command to remove "James" from the array.
people.pop();
people.forEach(showList);

// 5. Write the command to add "Matt" to the front of the array.
people.unshift("Matt");
people.forEach(showList);

// 6. Write the command to add your name to the end of the array.
people.push("Putri");
people.forEach(showList);

// 7. Using a for-loop, iterate through this array and after console.log-ing "Mary", exit from the loop. (hint: use break keyword to exit loop)
for(let i = 0; i<people.length; i++){
    console.log(people[i + 1]);
    break;
}

// 8. Write the command to make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".
let getTheNames = people.slice(2);
//console.log(getTheNames);

function getNames(getTheNames) {
    console.log(getTheNames);
  }
  getTheNames.forEach(getNames);


// 9. Redefine the people variable with the value you started with. 
people = new Array();
(people.push("Greg", "Mary", "Devon", "James"));
people.forEach(showList);

    //Using the splice command, remove "Devon" from the array
    let removeName = people.splice(2,1);
    console.log(removeName); //Devon is removed from the list

    people.forEach(showList); //The list only shows Greg Mary and James

    //add "Elizabeth" and "Artie". 
    people.splice(2,0,"Elizabeth","Artie");
    console.log(people);
    people.forEach(showList);
    //Your array should look like this when you are done ["Greg", "Mary", "Elizabeth", "Artie", "James"].
    //Done

// 10. Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob"
let withBob = people.concat("Bob");
console.log(withBob.toString());

