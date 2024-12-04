// login

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');
    
    if (username === savedUsername && password === savedPassword) {
        // Redirect to 2nd.html if login is successful
        window.location.href = '2nd.html';
    } else {
        alert('Incorrect username or password.');
    }
});

// User's starting balance
let userBalance = 1000; // Starting balance
let cart = [];
let totalCost = 0;

// Function to update the cart section
function updateCart() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";
    totalCost = 0;

    cart.forEach(item => {
        cartItems.innerHTML += `<div>${item.name} - P${item.price}</div>`;
        totalCost += item.price;
    });

    document.getElementById("cart-total").innerText = totalCost.toFixed(2);
}

// Add to cart functionality
document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", (e) => {
        const name = e.target.getAttribute("data-name");
        const price = parseFloat(e.target.getAttribute("data-price"));
        
        cart.push({ name, price });
        updateCart();
        alert(`${name} added to the cart!`);
    });
});

// Buy Now functionality
document.querySelectorAll(".buy-now").forEach(button => {
    button.addEventListener("click", (e) => {
        const name = e.target.getAttribute("data-name");
        const price = parseFloat(e.target.getAttribute("data-price"));
        
        if (userBalance >= price) {
            userBalance -= price;
            alert(`You bought ${name} for P${price}. Remaining balance: P${userBalance.toFixed(2)}`);
        } else {
            alert("Insufficient balance!");
        }
    });
});

// Checkout functionality
document.getElementById("checkout").addEventListener("click", () => {
    if (cart.length > 0 && userBalance >= totalCost) {
        userBalance -= totalCost;

        const receiptSection = document.getElementById("receipt-section");
        const receiptDetails = document.getElementById("receipt-details");
        const totalCostElement = document.getElementById("total-cost");
        const remainingBalanceElement = document.getElementById("remaining-balance");

        receiptDetails.innerHTML = cart.map(item => `<div>${item.name} - $${item.price}</div>`).join("");
        totalCostElement.innerText = totalCost.toFixed(2);
        remainingBalanceElement.innerText = userBalance.toFixed(2);

        receiptSection.style.display = "block";
        cart = [];
        updateCart();
    } else if (cart.length === 0) {
        alert("Your cart is empty.");
    } else {
        alert("Insufficient balance!");
    }
});
// Burger menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});

 



