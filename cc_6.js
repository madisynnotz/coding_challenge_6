// Task 1: Function Declaration
function calculateProfit(costPrice, sellingPrice, unitsSold) { //formula calculating total profit
    let profit = (sellingPrice - costPrice) * unitsSold;
    return `Total Profit: $${profit}`;
}

// Test data
console.log(calculateProfit(20, 30, 100));  // Expected output: "Total Profit: $1000"
console.log(calculateProfit(50, 70, 200)); // Expected output: "Total Profit: $4000"

// Task 2: Function Expression
const calculateSalesTax = function(amount, taxRate) { //declared function
    let salesTax = amount * taxRate;
    console.log(`Sales Tax: $${salesTax.toFixed(2)}`);
};

// Test data
calculateSalesTax(100, 0.07); // Expected output: "Sales Tax: $7.00"
calculateSalesTax(500, 0.1);  // Expected output: "Sales Tax: $50.00"

// Task 3: Arrow Function
const calculateBonus = (salary, performanceRating) => { //arrow function to determine a bonus 
    let bonusPercentage = 0;

    if (performanceRating === "Excellent") {
        bonusPercentage = 0.2;
    } else if (performanceRating === "Good") {
        bonusPercentage = 0.1;
    } else if (performanceRating === "Average") {
        bonusPercentage = 0.05;
    }

    let bonus = salary * bonusPercentage;
    console.log(`Bonus: $${bonus.toFixed(2)}`);
};

// Test cases
calculateBonus(5000, "Excellent"); // Expected output: "Bonus: $1000.00"
calculateBonus(7000, "Good");      // Expected output: "Bonus: $700.00"

// Task 4: Parameters and Arguments
const calculateSubscriptionCost = (plan, months, discount = 0) => { //function that calculates cost
    let monthlyCost = 0;

    if (plan === "Basic") {
        monthlyCost = 10;
    } else if (plan === "Premium") {
        monthlyCost = 20;
    } else if (plan === "Enterprise") {
        monthlyCost = 50;
    } else {
        console.log("Invalid plan selected.");
        return;
    }

    let totalCost = (monthlyCost * months) - discount;
    console.log(`Total Cost: $${totalCost.toFixed(2)}`);
};

// Test data
calculateSubscriptionCost("Basic", 6, 10);  // Expected output: "Total Cost: $50.00"
calculateSubscriptionCost("Premium", 12, 0); // Expected output: "Total Cost: $240.00"

// Task 5: Returning Values
const convertCurrency = (amount, exchangeRate) => { //function that returns the converted amount
    let convertedAmount = amount * exchangeRate;
    console.log(`Converted Amount: $${convertedAmount.toFixed(2)}`);
};

// Test data
convertCurrency(100, 1.1);   // Expected output: "Converted Amount: $110.00"
convertCurrency(250, 0.85);  // Expected output: "Converted Amount: $212.50"

// Task 6: Higher-Order Functions
const applyBulkDiscount = (orders, discountFunction) => { //Declare an array orders with at least five order amounts
    return orders.map(discountFunction);
};

// Test data
let orders = [200, 600, 1200, 450, 800];

let discountedOrders = applyBulkDiscount(orders, amount => amount > 500 ? amount * 0.9 : amount); // Expected output: [200, 540, 1080, 450, 720] //applies a 10% discount on orders above $500

console.log(discountedOrders); 

// Task 7: Closures
const createExpenseTracker = () => { //function that returns another function to add expenses and keep a running tota
    let totalExpenses = 0;

    return (amount) => {
        totalExpenses += amount;
        return `Total Expenses: $${totalExpenses}`;
    };
};

// Test data
let tracker = createExpenseTracker();
console.log(tracker(200)); // Expected output: "Total Expenses: $200"
console.log(tracker(150)); // Expected output: "Total Expenses: $350"

// Task 8: Recursion in JavaScript
const calculateYearsToPromotion = (employeeLevel) => { //recursive function
    if (employeeLevel >= 10) {
        return "Years to Level 10: 0"; // Already at or above level 10
    }
    return `Years to Level 10: ${2 + parseInt(calculateYearsToPromotion(employeeLevel + 1).split(": ")[1])}`;
};

// Test cases
console.log(calculateYearsToPromotion(7)); // Expected output: "Years to Level 10: 6"
console.log(calculateYearsToPromotion(5)); // Expected output: "Years to Level 10: 10"
