// Task: Managing a waiting List System
// 1
const waitingList = [];

function addCustomerToFront(name) {
  waitingList.unshift(name);
  return waitingList;
}

// 2
function addCustomerToEnd(name) {
  waitingList.push(name);
  return waitingList;
}

// 3
function serveFirstCustomer() {
  j;
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
  };
  h;
}

console.log(waitingList);
j;
