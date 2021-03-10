/*
    Synchronous VS. Asynchronous


    "Synchronous"
    Program in Javascript that will execute each row
    in default. 

    The process being executed in default will be synchronous
    , which means the next row will be executed after the previous row
    will be executed.

    A synchronous process can also be said as "Blocking", because
    we have to wait for each process to finish before we can start the next.

    "Asynchronous"
    Although a process being executed in JavaScript is synchronous in default
    but we can also set it to be asynchronous.

    Differing from synchronous, in asynchronous, javascript will not wait for
    the process to finish, instead, it carrys on with the next row without having
    to wait for the previous one.

    If asynchronous is done, it returns the result in a "callback".

    The asynchronous process can also be known as "Non-Blocking".

    "Callback"
    What is a callback?

    Callbacks are mechanisms to call back the code available in the javascript
    program from the asynchronous process.

    These callbacks are usually made in a form of a function, and this function is 
    executed when the asynchronous process is done.

    Using the callback, programs can receive information needed from the running
    processes asynchronously.
*/

//Examples:
// //synchronous process
// const second = () => {
//     console.log('Second');
// }


// const first = () => {
//     console.log('First');
//     second(); //calls the "second" function
//     console.log('The End');
// }

// first();
// //If you see the code above, it runs accordingly
// //Starts out from the first to the end.


// //We use setTimeout for an asynchronous process
// const second = () => {
//     setTimeout(() => {
//         console.log('Second');
//     }, 2000)
// }

// const first = () => {
//     console.log('First');
//     second(); //calls the "second" function
//     console.log('The End');
// }

// first();
// //This one behaves asynchronously, where the second comes after 2 seconds
// //Starts out from the first then the end, and lastly comes second

// //Another example:
// const second = () => {
//     const num = 10;
//     setTimeout(() => {
//         console.log('Second');
//         console.log(num);
//     }, 2000, num)
// }

// const first = () => {
//     console.log('First');
//     second();
//     console.log('The End');
// }

// first();
// /*  This code shows similar to the one above
//     for asynchronous, and both the second and
//     the num will appear after 2 seconds, and 
//     will not be in order instead in an asynchronous way
// */

// //Problems with callback
// //Callback Hell Example
// const second = () => {
//     setTimeout(() => {
//         console.log('Async 1');
//         const numbers = [1, 2, 3];
//         setTimeout(id => {
//             console.log('Async 2');
//             console.log(id);
//             setTimeout(() => {
//                 console.log('Async 3');
//             }, 2000)
//         }, 2000, numbers[1])
//     }, 2000)
// };

//We have what we call a "Promise"
/*  It is a proxy for future values that are not yet known when 
    when the Promise is being made.

    It's like an object that does tracking to see if an even has
    happened yet or not

    Promise is usually used for Async process.
*/

//Making Promise
/*
    3 states: Pending, Fulfilled, Rejected
    3 results: Undefined, Value, Error
*/ 

//Example in making Promise

// const getData = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve();  //This is for succes/resolve 
//         //reject(); //This is for error

//         //You can also put in if else instead in here
//         /*const error = false;
//                 if (error) {
//                     reject();  =>//It can also receive parameters
//                 } else {
//                     resolve(); =>// It can also receive parameters
//                 }
//         */
//     }, 2000)
// });
// //Above is the promise

// //then is for resolve, catch is for reject
// getData.then(() => {console.log('Success') });
// getData.catch(() => {console.log('Error') });

// //Examples using if-else and parameters for a promise
// const getData = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const error = false;
//         if (error) {
//             reject('Success!!!');
//         } else {
//             resolve('Error!!!');
//         }
//     }, 2000);
// })

// getData.then(success => console.log(success));
// getData.catch(error => console.log(error));

//Another example:
const getData = new Promise((resolve, reject) => {
    setTimeout(() => {
        const error = false;
        if (error) {
            reject('Error!!!');
        } else {
            resolve(10);
        }
    }, 2000);
})

const getName = id => {
    return new Promise((resolve, reject) => {
         setTimeout(() => {
             resolve(`ID: ${id} Success`)
         }, 2000)
    })
}

// getData()
//         .then(id => getName(id).then(success=> console.log(success)));
//          .catch(error => console.log(error));


// getData()
//     .then(id => getName(id));
//     .then(success => console.log(success));
//     .catch(error) => console.log(error));


const getNameById = async () => {
    const id = await getData();
    const success = await getName(id);
    console.log(success);
}

getNameById();

//If error then use this:
const getNameById = async () => {
    try{
        const id = await getData();
        const success = await getName(id);
         console.log(success); 
    } catch (error) {
        console.log(error)
    }
    
}

getNameById();

