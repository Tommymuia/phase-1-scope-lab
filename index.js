// Write your solution in this file!
// Write your solution in this file!
// 1. Declare customerName to be 'bob' in the global scope
var customerName = 'bob';

// 2. Function that uppercases the customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// 3. Function that sets bestCustomer (global)
function setBestCustomer() {
  bestCustomer = 'not bob'; // no var/let/const → becomes global
}

// 4. Function that overwrites bestCustomer
function overwriteBestCustomer(newFavorite) {
  bestCustomer = newFavorite;
}

// 5. Declare leastFavoriteCustomer as a const
const leastFavoriteCustomer = 'Larry';

// 6. Function that tries to change the const → will throw an error
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'somebody else'; //  reassigning const
}
