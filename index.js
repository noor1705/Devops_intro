import express from "express";
const app = express();
console.log("Hello World!");

function Hello() {
    console.log("Hello i am in statging environment!");
}
function Hello2() {
    console.log("Hello i am in production environment!");
}
function Hello3() {}
console.log("Hello i am in development environment!");

function week04(){
  console.log("This is week 04 of the course");
}