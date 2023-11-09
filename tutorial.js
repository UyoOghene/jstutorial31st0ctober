// Functions
// Syntax to define a function
// function funcName(){
// do something;
// };

// function grumpy() {
//     console.log('i feel unhappy');
//     console.log('i feel sad');
//     console.log('i feel anxious');
    
// }

// grumpy();
// for (let i=0; i<=10; i++){
//     grumpy();
// }

// example: a die game to generate a random number from 0 to6 each time the function is called.
// function rolldie() {
//     let roll = Math.floor(Math.random()*6)+1;
//     console.log(roll,`rolled`);
// }
// // rolldie()

// function throwdice(numofrolls){
// for(let i =0;i<numofrolls;i++){
//     rolldie();
// }
// }
// throwdice(4)


//  function greet(nickname){
//     console.log(nickname);
//     console.log('hi');
//  }
//  greet("udala");

//  function square(num){
//     console.log(num*num);

//  }
//  square(3);

//  function multi(sum,plus){
//     console.log(sum+plus);
//     // console.log(sum*plus);
//     // let avg=(sum+plus)/2;
//     // console.log(avg,"average")
//  }

//  multi('hi','uyo');

//  example 1 ;
//  Write a isValidpassword function, 
//  it accepts 2 arguments; password and username.
//  password must:
//  - be at least 8 characters
//  -cannot contain spaces
//  -cannot contain username
//  if all requirements are true, return true, otherwise false.

// solution:
// function isValidpassword(password,username){
//     if(password<8){
//         return false;
//     }
//     if(password.indexOf(" ") !==-1){
//         return false;
//     }
//     if(password.indexOf(username)!==-1){
//         return false;
//     }
//     else{
//         console.log('good')
//     } 
    
// }

// alternatively



// function isValidpassword(password,username){
//     if(password<8){
//         return false;
//     }
//     else if(password.indexOf(' ') !==-1){
//         return false;
//     }
//     else if(password.indexOf(username)!==-1){
//         return false;
//     }
//     else{
//         return true;
//     }
// }

// isValidpassword('chickens','baby')
// alternatively

// function isValidpassword(password,username){
//     if(password<8 || password.indexOf(' ')!==-1 || password.indexOf(username) !==-1){
//         console.log('invalid');}
//         else {
//             console.log('valid');
//         }
//     }


// Example 2; Write a function to find the average vallue in an array of numbers.

// solution:
// // loop over each Num,
// add them together,
// divide by number of nums
// function avg(arr){
//     let total=0;
//     for(let num of arr){
//         total +=num;
        
//     }
//     return total/arr.length;
// }

// Example 3
// Write a function called isPangram which 
// checks if a given sentence contains every 
// letter of the alphabet.make sure you ignore string casing

// function isPangram(sentence){
//     let lowercased =sentence.toLowerCase();d
// for(let char of 'abcdefghijklmnopqrstuvwxyz'){
//     console.log(char);
// }
// if(lowercased.indexOf(char)===-1){
//     return false;
// }

//     return true;
// }

// isPangram('sssskk')



// function isPangram(sentence){
//     let lowercased=sentence.toLowerCase();
//     for(let char of 'abcdefghijklmnopqrstuvwxyz'){
//         if(!lowercased.includes(char)){
//             return false;
//         }
//         return true;
//     }
// }