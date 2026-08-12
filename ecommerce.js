// ================= PRODUCTS =================

const products = [

    {
        id: 1,
        name: "Wireless Headphones",
        category: "electronics",
        price: 50,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
    },

    {
        id: 2,
        name: "Smart Watch",
        category: "electronics",
        price: 80,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
    },

    {
        id: 3,
        name: "Laptop",
        category: "electronics",
        price: 750,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
    },

    {
        id: 4,
        name: "T-Shirt",
        category: "clothing",
        price: 25,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
    },

    {
        id: 5,
        name: "Jacket",
        category: "clothing",
        price: 60,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5"
    },

    {
        id: 6,
        name: "Sneakers",
        category: "shoes",
        price: 90,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    },

    {
        id: 7,
        name: "Running Shoes",
        category: "shoes",
        price: 70,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    },

    {
        id: 8,
        name: "Gaming Mouse",
        category: "electronics",
        price: 35,
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db"
    }

];


// ================= VARIABLES =================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const productContainer =
    document.getElementById("productContainer");

const searchInput =
    document.getElementById("searchInput");

const categoryFilter =
    document.getElementById("categoryFilter");

const cartCount =
    document.getElementById("cartCount");

const cartItems =
    document.getElementById("cartItems");

const cartTotal =
    document.getElementById("cartTotal");

const cartPanel =
    document.getElementById("cartPanel");

const overlay =
    document.getElementById("overlay");


// ================= DISPLAY PRODUCTS =================

function displayProducts(productList) {

    productContainer.innerHTML = "";

    if (productList.length === 0) {

        productContainer.innerHTML =
            "<p>No products found.</p>";

        return;
    }


    productList.forEach(product => {

        const card =
            document.createElement("div");

        card.classList.add("product-card");


        card.innerHTML = `

            <img
                src="${product.image}"
                class="product-image"
                alt="${product.name}"
            >

            <h3>
                ${product.name}
            </h3>

            <p>
                Category:
                ${product.category}
            </p>

            <div class="price">
                $${product.price}
            </div>

            <button
                class="add-btn"
                onclick="addToCart(${product.id})"
            >
                Add to Cart 🛒
            </button>

        `;


        productContainer.appendChild(card);

    });

}


// ================= ADD TO CART =================

function addToCart(id) {

    const product =
        products.find(item => item.id === id);

    const existingProduct =
        cart.find(item => item.id === id);


    if (existingProduct) {

        existingProduct.quantity++;

    } else {

        cart.push({

            ...product,

            quantity: 1

        });

    }


    saveCart();

    updateCart();

    alert(product.name + " added to cart!");

}


// ================= UPDATE CART =================

function updateCart() {

    cartItems.innerHTML = "";

    let total = 0;

    let count = 0;


    if (cart.length === 0) {

        cartItems.innerHTML =
            `<p class="empty-cart">
                Your cart is empty.
            </p>`;

    }


    cart.forEach(item => {

        total +=
            item.price * item.quantity;

        count += item.quantity;


        const cartItem =
            document.createElement("div");

        cartItem.classList.add("cart-item");


        cartItem.innerHTML = `

            <div>

                <h4>
                    ${item.name}
                </h4>

                <p>
                    $${item.price}
                    ×
                    ${item.quantity}
                </p>

            </div>

            <button
                class="remove-btn"
                onclick="removeFromCart(${item.id})"
            >
                Remove
            </button>

        `;


        cartItems.appendChild(cartItem);

    });


    cartCount.innerText = count;

    cartTotal.innerText =
        total.toFixed(2);

}


// ================= REMOVE FROM CART =================

function removeFromCart(id) {

    cart =
        cart.filter(item => item.id !== id);

    saveCart();

    updateCart();

}


// ================= CLEAR CART =================

document
    .getElementById("clearCart")
    .addEventListener("click", function () {

        cart = [];

        saveCart();

        updateCart();

    });


// ================= CHECKOUT =================

document
    .getElementById("checkoutBtn")
    .addEventListener("click", function () {

        if (cart.length === 0) {

            alert("Your cart is empty!");

            return;
        }


        alert(
            "Thank you for shopping at Ahsan Store! 🛍️"
        );

    });


// ================= OPEN CART =================

document
    .getElementById("cartBtn")
    .addEventListener("click", function () {

        cartPanel.classList.add("active");

        overlay.classList.add("active");

    });


// ================= CLOSE CART =================

document
    .getElementById("closeCart")
    .addEventListener("click", closeCart);


overlay.addEventListener(
    "click",
    closeCart
);


function closeCart() {

    cartPanel.classList.remove("active");

    overlay.classList.remove("active");

}


// ================= SEARCH =================

searchInput.addEventListener(
    "input",
    filterProducts
);


// ================= CATEGORY FILTER =================

categoryFilter.addEventListener(
    "change",
    filterProducts
);


function filterProducts() {

    const searchText =
        searchInput.value.toLowerCase();

    const category =
        categoryFilter.value;


    const filteredProducts =
        products.filter(product => {

            const matchesSearch =
                product.name
                    .toLowerCase()
                    .includes(searchText);


            const matchesCategory =
                category === "all" ||
                product.category === category;


            return (
                matchesSearch &&
                matchesCategory
            );

        });


    displayProducts(filteredProducts);

}


// ================= LOCAL STORAGE =================

function saveCart() {

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

}


// ================= START APP =================

displayProducts(products);

updateCart();

console.log(
    "Ahsan Store E-Commerce App Loaded Successfully!"
);