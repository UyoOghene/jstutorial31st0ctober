// let rating = ;
// if (rating ===2) {
//     console.log('nope');
// }
//    else if(rating >4) { 
//        console.log('yeah');
// }
// else {
//     alert('allright')
// }

// let password = '';

// if (password.length >=6) {
//     if(password.indexOf(' ')=== -1) {
//     console.log("correct")   
// }
// else {
//     console.log('cool')
// }
// }

// 


// let password = "chicken girl";

// if (password.length >=8 && password.indexOf(" ") ===-1) {
//     console.log('valid')
// }
// else {
//     console.log('invalid')
// }


// let num = 99;

// if(num >=1 && num <=10){
//     console.log('yeah')

// }
// else{
//     console.log('nah')
// }

// let age = 76;

// if(age <6 || age>=60) {
//     console.log('free')

// }
// else {
//     console.log('not free')
// }


// let color ='red'
// if(color === "purple" || color==='violet' || color === 'lilac') {
//     console.log('good choice')
// }
// else {
//     console.log('pick again')
// }

// let loggedIn;
// if (loggedIn) {
//     console.log('yep')
// }
// if (!loggedIn) {
//     console.log('nope')
// }


// let flavor = "grape"
// if (flavor !=="grape" && flavor !== 'cherry') {
//     console.log('we dont have thagt flavor')
// }
// else{
//     console.log( 'flavor available')
// }
// if(!(flavor ==='grape' || flavor === 'berry')) {
//     console.log('we dont have this flavor')
// }


// let day= 3;

// if(day ===1) {
//     console.log('monday')
// }
// else if (day ===2 ) {
//     console.log('tuesday')
// }
// else if (day ===3 ) {
//     console.log('wednesday')
// }
// else if (day ===4 ) {
//     console.log('thursday')
// }
// else if (day ===5 ) {
//     console.log('friday')
// }
// else if (day ===6 ) {
//     console.log('sunday')
// }
// else if (day ===7 ) {
//     console.log('saturday')
// }
// else {
//     console.log('no value')
// }


// let day = 9;
// switch(day){
//     case 1:
//         console.log('monday');
//         break;
//     case 2:
//         console.log('tuesday');
//         break;
//     case 1:
//         console.log('wednesday');
//         break;
//     case 1:
//         console.log('thursday');
//         break;
//     case 1:
//         console.log('friday');
//         break;
//     case 1:
//         console.log('saturday');
//         break;
//     case 1:
//         console.log('sunday');
//         break;

//         default: 
//         console.log('no day')
// }

// let emoji ='happy face';

// switch (emoji) {
//     case 'happy face':
//     console.log('yellow');
//     break;
//     case 'excited face':
//     console.log('orange');
//     break;
//     case 'bored face':
//     console.log('black');
//     break;
//     case 'sad face':
//     console.log('blue');
//     break;
//     case 'angry face':
//     console.log('red');
//     break;

// }

// let emoji = 'bored face'
// switch (emoji) {
//     case 'happy face':
//     case 'excited face':    
//     console.log('yellow');
//     break;
//     case 'bored face':
//     case 'sad face':
//     case 'angry face':
//     console.log('red');
//     break;

// }

// 
let sta = 'online';
// let color;
// if (sta === 'online'){
//     color = 'red';

// }
// else {
//     color = 'green'
// }
// alternatively 

// 




// ARRAYS 
  
// let shoppingList= ['tea','bread'];
// shoppingList[1]= 'milk';
// shoppingList[2 ]='beans';
// shoppingList.push('rice');
// const lastitem =shoppingList.pop()
// shoppingList.unshift('oil');
// shoppingList.unshift('stew');

// let fruits =['orange','apple','grape' ] 
// let shop = fruits.concat(shoppingList);
// console.log(shop)

// includes is a boolean method
// fruits.includes('orange')

// fruits.includes('orange',2)

// if (fruits.includes('orange')) {
//     console.log('i have ulcer,cant eat it')
// } ;

let animals=['cow','goat','cat','fish','crab','salmon'];
// let swimmers = animals.slice(3,6);
// alternatively it can slice from the index you input to the end
// let swimmers=animals.slice(3)
// alternative is to use a negative index to select the values 
// let swimmers =animals.slice(-3)
// let mammals =animals.slice(0,3)

// splice (startindex,delete Count,additems)
// animals.splice(2,2,'octopus','rat')

// sort ; it sorts the array in place and returns a sorted array
// animals.sort()

// Nested Arrays

// const animalPairs =[
//     ['doe','buck'],
//     ['ewe','ram'],
//     ['peahen','peacock']
// ];
// animalPairs[2][1]

// Objects 
// the values are accessed by the Key

// const fitbit={
//     totalSteps: 20362,
//     totalmiles: 211.7,
//     avgCalorie: 5755,
//     workOut:   '5 of 7',
//     avgSleep: '2:13' 
// }
// fitbit.totalSteps

// const numbers ={
//     100: 'one hundred',
//     16:  'sixteen',
//     '76 cars': 'great cars',
// }
// // for numbers and strings that are keys, use [] to access the value eg
//  numbers[100]
//  numbers['76 cars']

// const palette ={
//     red : "#eb4d4b",
//     blue : '#efdgb4',
//     yellow : '#h5djd3',
// }
//     let mysteryColor = 'yellow';
    // access mysterycolor by using [] Example
    // palette[mysteryColor]




    // const userReview = {

    // }

    // You can add to an empty object like below
    // userReview['queen']=3.5;
    // userReview.smith78 =2.3;
    
    // you can update the values example
    // example1
    // userReview['queen']=4;
    // example 2
    // userReview.smith78 +=3;


    // Arrays plus objects

// const student ={
//     firstname : 'dave',
//     lastName :'banner',
//     strenght : ['music','arts'],
//     exams : {
//         midterm: 94,
//         final: 89
//     }

// }
// Quiz: find the average of the miderm and finals in the object Above
// Answer
// const avg = (student.exams.midterm + student.exams.final)/2;
// console.log(avg)

// to access arts :
// 

// const cart =[
//     {
//     product : 'jenga',
//     price : 36,
//     quantity: 3,
//     },
//     {
//     product : 'monopoly',
//     price : 426,
//     quantity: 3,
//     },
//     {
//     product : 'jumanji',
//     price : 230,
//     quantity: 4,
//     }
// ]
// // to access jumanji use:
// cart[2].product
// console.log(cart[2].product)

// Note: objects and arrays are reference types to the actual array or object,th . Example ;
// const hues = {
//     red: '#34fmgfk',
//     blue :'#35fg6d',
//     yellow :'#gj643',
// }
//  you can also assign another variable to reference the same object or arrray
// example
//  const hues2 = hues;
//  so if you add a value to hues2, it will also be added to hues 


// Loops
// for()[initial value;
//     condition;
//     increment;
// }

// for (let i=1;i<=10;i++){
//     console.log(i);

// for(let num=1; num<=20; num++) {
//     console.log(`${num}x${num}=${num*num}`);

// }

// Example ; start i at 50, subtract 10 each iteration, keep going until you get 0.
// Answer;
// for(let i=50;i>=0; i-=10){
//     console.log(`${i}-10=${i-10}`);
// }
// Example ; count down from 200 with intervals of 25.
// Answer
// for (let c=200;c>=1;c-=25){
//     console.log(`${c}-25=${c-25}`)
// }
  
// use the index to loop over an array
// const examscore =[98,23,78,57,4,32,77];

// for(let i=0;i<=examscore.length-1;i+=1){
//     console.log(examscore[i]);
    
// }

// const animal =['cat','pig','rat','fish','chicken'];

// for(let i=0;i<=animal.length-1;i++) {
//     console.log(animal[i]);
// }
// Example; create a loop saying the name and grades of each student
// const students= [
//     {
//         name: 'jay',
//         grade: 56
//     },
//     {
//         name: 'kaka',
//         grade: 95
//     },
//     {
//         name: 'pawpaw',
//         grade: 87
//     },
//     {
//         name: 'tobby',
//         grade: 90
//     },
//     {
//         name: 'jane',
//         grade: 91
//     },

// ]

// for(let i=0;i<=students.length-1;i++){
//     console.log(students[i].name+` scored ` +students[i].grade)
// }

// example: loop over the letters in the string below backwards
// const word = 'stressed';
// for(let i=7; i>=0;i--){
// console.log(word[i]);
// }


// example ; find the average of the grades below:
// 
// for(let i=0;i<=10;i++){
// console.log('outer loop',i);
// for(let j=10;j>=0;j--){
//     console.log('innerloop',j)
// }
// }

// const gameboard=[
//     [4,32,8,4],
//     [64,8,32,2],
//     [8,32,16,4],
//     [2,8,4,2]
// ]
// let total=0;
// for(let i=0;i<gameboard.length;i++){
//     // console.log(gameboard[i]);
//     for(let j=0;j<gameboard[i].length;j++){
//        total+=gameboard[i][j];
    
//     }
// }
let j=0;
while(j<=10) {
    console.log(j)
    j++;
}