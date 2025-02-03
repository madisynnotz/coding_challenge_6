// Task 1: Function Declaration
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    let profit = (sellingPrice - costPrice) * unitsSold;
    return `Total Profit: $${profit}`;
}

// Test cases
console.log(calculateProfit(20, 30, 100));  // Expected output: "Total Profit: $1000"
console.log(calculateProfit(50, 70, 200));

// Task 2: Function Expression
const calculateSalesTax = function(amount, taxRate) {
    let salesTax = amount * taxRate;
    console.log(`Sales Tax: $${salesTax.toFixed(2)}`);
};

// Test cases
calculateSalesTax(100, 0.07); // Expected output: "Sales Tax: $7.00"
calculateSalesTax(500, 0.1);  // Expected output: "Sales Tax: $50.00"

// Task 3: Arrow Function
const calculateBonus = (salary, performanceRating) => {
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
const calculateSubscriptionCost = (plan, months, discount = 0) => {
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

// Test cases
calculateSubscriptionCost("Basic", 6, 10);  // Expected output: "Total Cost: $50.00"
calculateSubscriptionCost("Premium", 12, 0); // Expected output: "Total Cost: $240.00"

// Task 5: Returning Values
const convertCurrency = (amount, exchangeRate) => {
    let convertedAmount = amount * exchangeRate;
    console.log(`Converted Amount: $${convertedAmount.toFixed(2)}`);
};

// Test cases
convertCurrency(100, 1.1);   // Expected output: "Converted Amount: $110.00"
convertCurrency(250, 0.85);  // Expected output: "Converted Amount: $212.50"

// Task 6: Higher-Order Functions
const applyBulkDiscount = (orders, discountFunction) => {
    return orders.map(discountFunction);
};

// Test data
let orders = [200, 600, 1200, 450, 800];

let discountedOrders = applyBulkDiscount(orders, amount => amount > 500 ? amount * 0.9 : amount);

console.log(discountedOrders); // Expected output: [200, 540, 1080, 450, 720]