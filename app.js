//We have an array of cities. Assign each city in different individual variable. 
//hint ['LA', 'new york', 'karachi','islamabad']


// const cities = ['LA', 'new york', 'karachi','islamabad'];

// let [c1,c2,c3,c4] = cities;

// alert(c3);

///////////////////////////////////////////////////////////////////////

//We have a student object. Assign each property in different and individual variable
// in JS {name:'Marry',age:20,rollNo:2}

// let student = {
//     name1 : 'Marry',
//     age : 20,
//     rollNo: 2,
// }

// let {name1,age,rollNo} = student;

// alert(`My student name is ${name1}, her age is ${age} and roll number is ${rollNo}.`);

/////////////////////////////////////////////////////////////////////

//A function is taking 5 arguments and You have to pass it through an array.
//let arr = [1,2,3,4,5]

// const fruit =['mango','banana','orange','cherry','melon'];
// let x = fruit.map((a)=>{

// return a
// }) 

// document.write(x)

/////////////////////////////////////////////////////////////////


//Given an array of firstname and an array of last name. First check both array size is equal or 
//not, if equal then make third new array which has first last name concat value

// let firstName =['Huma','Naheed','Hafsa','Samia'];
// let lastName =['Sahar','Fatima','Farooqui','Altaf'];

// let x = firstName.map((i )=>{
//     return i

// })
// var y = lastName.map((i )=>{
//     return i

// })
// if (x.length == y.length){
//     var v =x.map((a)=>{
//         return a+lastName

//     })
//     document.write(v)
//     }

///////////////////////////////////////////////////////////////////


//Create an arrow function that takes array as an input and make each element double and 
//then return an array 

// var num = [2,3,4,5,6,7,8,9];
//  let doubleNum = num.map((a) =>{
//       return a*2
//  })
//  document.write(doubleNum)

////////////////////////////////////////////////////////////////////

//Create an arrow function that takes a number and return square of a number


// let double = a =>{
//     return a*a
// }
// let v = double(2)

// alert(v)
////////////////////////////////////////////////////////////////////

/*question: `var authenticated=true;
var allowed = authenticated ? (alert('you r allowed')) : (alert('you are not allowed))
which alert will run
*/

//(alert('you r allowed')) 


//////////////////////////////////////////////////////////////////////


/*question: ` What is the value of canDrive
        var age = 12;
        var canDrive = age > 18 ? 'yes' : 'no';
        `,
        answers: ['12', '18', 'yes', 'no'],
        which is correct answer
        */

//Answer: 'no'

//////////////////////////////////////////////////////////////////////////

/*
question: `const dog='snickers'
        logdog(dog);
        function logdog(dog){
            console.log(dog)
        }
         function go(){
             const dog='sunny';
             logdog(dog)
         }`,
        answers: ['snickers sunny','sunny snickers','snickers snickers','sunny sunny'] */



/*const dog='snickers'
logdog(dog);
function logdog(dog){
document.write(dog)
}
 function go(){
     const dog='sunny';
     logdog(dog)
     document.write(dog)
 }  
 go()*/

//Ans : Snickers sunny sunny

/////////////////////////////////////////////////////////////

//let text = `He's often called "Johnny"`;
// console.log(text)// write the answer here


//Ans: (He's often called "Jhony")
//////////////////////////////////////////////////////////////////////

/*function welcomeMsg(name = "Everyone") {
    let msg = "Welcome " + name
    console.log(msg)
}
welcomeMsg("Faiza")
 welcomeMsg()

 
 I have called funtion twice , share the answer what is printed each time
 */

//Answer: (Welcome Faiza)
//(welcome every one)

// make a promise that resolves after 5 sec. Use setTimeOut for resolve.      


// let prom = (complete) => {
//     return new Promise(function (resolve, reject) {
//         document.write('wait,data is on working')
//         setTimeout(() => {
//             if (complete) {
//                 resolve('I am successful')
//             } reject('Iam failed')

//         }, 5000);
//     });
// }

// prom(true).then((result) => {
//     document.write(result)
// }) .catch((error)=> {document.write(error)
// })
