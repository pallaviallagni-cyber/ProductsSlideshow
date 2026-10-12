const products = [
    {
        id: 1,
        name: "Laptop",
        price: 55000,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500"
    },
    {
        id: 2,
        name: "Smartphone",
        price: 25000,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500"
    },
    {
        id: 3,
        name: "Headphones",
        price: 2999,
        category: "Audio",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
    },
    {
        id: 4,
        name: "Smart Watch",
        price: 4999,
        category: "Wearables",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
    },
    {
        id: 5,
        name: "Camera",
        price: 45000,
        category: "Photography",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500"
    },
    {
        id: 6,
        name: "Tablet",
        price: 22000,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500"
    },
    {
        id: 7,
        name: "Keyboard",
        price: 1999,
        category: "Computer",
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500"
    },
    {
        id: 8,
        name: "Mouse",
        price: 899,
        category: "Computer",
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500"
    },
    {
        id: 9,
        name: "Monitor",
        price: 15000,
        category: "Computer",
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500"
    },
    {
        id: 10,
        name: "Bluetooth Speaker",
        price: 3499,
        category: "Audio",
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500"
    },
    {
        id: 11,
        name: "Backpack",
        price: 1499,
        category: "Accessories",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
    },
    {
        id: 12,
        name: "Running Shoes",
        price: 2999,
        category: "Footwear",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
    },
    {
        id: 13,
        name: "Sunglasses",
        price: 1299,
        category: "Fashion",
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500"
    },
    {
        id: 14,
        name: "Water Bottle",
        price: 699,
        category: "Lifestyle",
        image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500"
    },
    {
        id: 15,
        name: "Coffee Mug",
        price: 399,
        category: "Kitchen",
        image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500"
    }
];

const productsPerSlide = 5;
const slideDuration = 5;

let currentSlide = 0;
let remainingSeconds = slideDuration;

const productContainer = document.getElementById("productContainer");
const slideInfo = document.getElementById("slideInfo");
const timer = document.getElementById("timer");
const previousBtn = document.getElementById("previousBtn");
const nextBtn = document.getElementById("nextBtn");

function displayProducts() {

    productContainer.innerHTML = "";

    const start = currentSlide * productsPerSlide;
    const end = start + productsPerSlide;

    const currentProducts = products.slice(start, end);

    currentProducts.forEach(product => {

        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">

            <h2>${product.name}</h2>

            <p class="category">${product.category}</p>

            <p class="price">
                ₹${product.price.toLocaleString("en-IN")}
            </p>
        `;

        productContainer.appendChild(card);
    });

    slideInfo.textContent =
        `Products ${start + 1} - ${Math.min(end, products.length)}`;
}

function updateTimer() {
    timer.textContent =
        `Next products in: ${remainingSeconds} seconds`;
}

function nextSlide() {

    const totalSlides =
        Math.ceil(products.length / productsPerSlide);

    currentSlide++;

    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    remainingSeconds = slideDuration;

    displayProducts();
    updateTimer();
}

function previousSlide() {

    const totalSlides =
        Math.ceil(products.length / productsPerSlide);

    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    remainingSeconds = slideDuration;

    displayProducts();
    updateTimer();
}

nextBtn.addEventListener("click", nextSlide);
previousBtn.addEventListener("click", previousSlide);

displayProducts();
updateTimer();

setInterval(() => {

    remainingSeconds--;

    if (remainingSeconds <= 0) {
        nextSlide();
    } else {
        updateTimer();
    }

}, 1000);