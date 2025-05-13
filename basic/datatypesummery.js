//primitive datatype
// 7 types: String , number , boolean , null, undefind , symbol , BigInt

const score =100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
//let userEmail = undefined
let userEmail;

const id = Symbol('123')
const anotherId =Symbol('123')

const bigNumber = 1234358430985846821n

// console.log(id === anotherId);




//Non-primitive or Reference
//array , objects , functions

const heros = ["shaktiman","naagraj","doga"]
let myobj = {
    name:"utkarsha",
    age :23,

}
// function(){}
const myfunction = function(){
    console.log("Hello world");
    
}
console.log(typeof id);

//score - number
//scorevalue - number
//isLoggedIn -boolean
//outsideTemp - object
//userEmail - undefined 
// id    - symbol
//anotherId - symbol
//bigNumber -  BigInt
//function - function