// Primitive datatypes
// divided into 7 categories
// 1- string // call by value
// 2- number
// 3- null
// 4- undefined
// 5- symbol
// 6- bigint
// 7- boolean

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('1234')
const anotherId = Symbol('1234') 
const bigNumber = 323098438308340302804840803803409438309n 

// console.log(typeof bigNumber)
// console.table([
//     score,
//     scoreValue,
//     isLoggedIn,
//     outsideTemp,
//     userEmail,
//     id,
//     anotherId
// ])

// Non premitive - reference
// Array
const heros = ["pakistan","afghanistan","iran","india"]
// Objects
let myObj = {
    name:"waseem",
    age:22
}
// Functions

const myFunciton = function (){
    console.log("hello worlds")
}



