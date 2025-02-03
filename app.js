// Select DOM elements
const expenseForm = document.getElementById("expense-form");
const expenseName = document.getElementById("expense-name");
const expenseAmount = document.getElementById("expense-amount");
const totalExpense = document.getElementById("total-expense");
const expenseList = document.getElementById("expense-list");

// Initialize an empty array to store expenses
let expenses = [];

// Event listener for adding an expense
expenseForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get the expense name and amount
    const name = expenseName.value;
    const amount = parseFloat(expenseAmount.value);

    // Add the expense to the array
    expenses.push({ name, amount });

    // Update the UI
    updateUI();

    // Clear the form fields
    expenseName.value = "";
    expenseAmount.value = "";
});

// Function to update the UI with the current expenses
function updateUI() {
    // Update the total expense
    const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);
    totalExpense.textContent = total.toFixed(2);

    // Clear the expense list
    expenseList.innerHTML = "";

    // Display the expense list
    expenses.forEach((expense, index) => {
        const li = document.createElement("li");
        li.textContent = `${expense.name}: $${expense.amount.toFixed(2)}`;
        expenseList.appendChild(li);
    });
}
