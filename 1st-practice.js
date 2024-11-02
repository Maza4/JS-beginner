// Task: Managing a waiting List System

// 1: Create an empty array called waitingList
const waitingList = [];

function displayWaitingList() {
  const listElement = document.getElementById("waitingListDisplay");
  listElement.innerHTML = "";

  // Checking if the waiting list is empty
  if (waitingList.length === 0) {
    listElement = "<li>No customers are are waiting.</li>";
  } else {
    waitingList.forEach((customer, index) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${index + 1}. ${customer}`;
      listElement.appendChild(listItem);
    });
  }
}

// 2:
function addCustomerToFront(name) {
  waitingList.unshift(name); // Add customer name to front
  displayWaitingList();
}

// 4:
function addCustomerToEnd(name) {
  waitingList.push(name); // Add customer name to end
  displayWaitingList();
}

// 5:
function serveFirstCustomer() {
  if (waitingList.length > 0) {
    const servedCustomer = waitingList.shift(); //Removes first customer
    alert(`Served: ${servedCustomer}`); //Alerts the name of the customer served
    displayWaitingList();
  } else {
    alert("No customers to serve.");
  }
}

// 6:
function serveLastCustomer() {
  if (waitingList.length > 0) {
    const servedCustomer = waitingList.pop(); // Removes last customer
    alert(`Served: ${servedCustomer}`); // Alerts the name of the customer served
    displayWaitingList();
  } else {
    alert("No customers are waiting.");
  }
}

document.getElementById("addFrontButton").addEventListener("click", () => {
  const customerName = document.getElementById("customerName").value;
  if (customerName) {
    addCustomerToFront(customerName);
    document.getElementById("customerName").value = "";
  }
});

document.getElementById("addEndButton").addEventListener("click", () => {
  const customerName = document.getElementById("customerName").value;
  if (customerName) {
    addCustomerToEnd(customerName);
    document.getElementById("customerName").value = "";
  }
});

document
  .getElementById("serveFirstButton")
  .addEventListener("click", serveFirstCustomer);
document
  .getElementById("serveLastButton")
  .addEventListener("click", serveLastCustomer);
