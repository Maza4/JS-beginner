function myName() {
  console.log("hi");
  console.log("My name I Muiz");
}

myName();

function sum(a, b) {
  console.log(a + b);
}

sum(2, 3);

function myAge(x, y) {
  return x + y;
}

const result = myAge(29, 11);
console.log(result);

function printPerson(theperson) {
  console.log(theperson);
}
const theperson = "Kyle";
printPerson(theperson);

let sum2 = (a, b) => a + b;

sum = (2, 4);
console.log(sum2);

//Array

const a = ["A", "B", "C", "D"];

a.push(3);
console.log(a);

// Task: Managing a waiting List System
// 1
const waitingList = [];

function addCustomerToFront(name) {
  waitingList.unshift(name);j
  return waitingList;
}

// 2
function addCustomerToEnd(name) {
  waitingList.push(name);
  return waitingList;
}

// 3
function serveFirstCustomer() {j
  const firstServed = waitingList.shift();
  return {
    firstServed,
    updatedWaitingList: waitingList,
  };
}

// 4
function serveLastCustomer() {
  const secondServed = waitingList.pop();
  return {
    secondServed,
    updatedWaitingList: waitingList,
  };  h
}

console.log(waitingList);j
