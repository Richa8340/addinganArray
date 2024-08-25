const myArray = [1, 2, 3];

// Function to add any number of arguments to myArray
function addToArray(...newElements) {
    myArray.push(...newElements);
}

// Usage example
addToArray(4, 5, 6);
console.log(myArray); // Output: [1, 2, 3, 4, 5, 6]
