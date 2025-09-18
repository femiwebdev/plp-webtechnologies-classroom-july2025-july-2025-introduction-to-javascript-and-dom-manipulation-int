// script.js

// Function to capture user input and display results
function captureInput() {
    const userInput = document.getElementById('userInput').value;
    const resultSection = document.getElementById('result');
    
    // Decision making using if/else statements
    if (userInput.trim() === '') {
        resultSection.innerHTML = 'Please enter a value.';
    } else {
        resultSection.innerHTML = `You entered: ${userInput}`;
    }
}

// Function to process multiple inputs
function processInputs() {
    const inputs = document.querySelectorAll('.inputField');
    const results = [];
    
    // Loop through inputs and collect values
    inputs.forEach(input => {
        if (input.value.trim() !== '') {
            results.push(input.value);
        }
    });
    
    // Display results
    console.log('Processed Inputs:', results);
    document.getElementById('resultsList').innerHTML = results.join(', ');
}

// This file contains helper functions that perform common tasks such as calculating totals, formatting strings, and toggling content. These functions can 
// be reused throughout the main.js file.

function calculateTotal(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}

function formatString(str) {
    return str.trim().toLowerCase();
}

function toggleVisibility(elementId) {
    const element = document.getElementById(elementId);
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

function isEven(number) {
    return number % 2 === 0;
}

// Event listeners for buttons
document.getElementById('captureButton').addEventListener('click', captureInput);
document.getElementById('processButton').addEventListener('click', processInputs);
