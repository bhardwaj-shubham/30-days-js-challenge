// Dummy Products data
const products = [
	{
		id: 1,
		name: "Wireless Headphones",
		price: 99.99,
		description:
			"High-quality wireless headphones with noise cancellation.",
		imageUrl:
			"https://images.pexels.com/photos/610945/pexels-photo-610945.jpeg?auto=compress&cs=tinysrgb&w=600",
	},
	{
		id: 2,
		name: "Smart Watch",
		price: 149.99,
		description:
			"Stylish smart watch with fitness tracking and notifications.",
		imageUrl:
			"https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600",
	},
	{
		id: 3,
		name: "Bluetooth Speaker",
		price: 49.99,
		description:
			"Portable Bluetooth speaker with deep bass and long battery life.",
		imageUrl:
			"https://images.pexels.com/photos/20802448/pexels-photo-20802448/free-photo-of-back-of-harman-kardon-onyx-studio-7-bluetooth-speaker.jpeg?auto=compress&cs=tinysrgb&w=600",
	},
	{
		id: 4,
		name: "4K Action Camera",
		price: 199.99,
		description:
			"Capture every moment in stunning 4K resolution with this compact action camera.",
		imageUrl:
			"https://images.pexels.com/photos/2335048/pexels-photo-2335048.jpeg?auto=compress&cs=tinysrgb&w=600",
	},
	{
		id: 5,
		name: "Gaming Mouse",
		price: 59.99,
		description:
			"Precision gaming mouse with customizable buttons and RGB lighting.",
		imageUrl:
			"https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=600",
	},
	{
		id: 6,
		name: "Laptop Stand",
		price: 29.99,
		description: "Ergonomic laptop stand for better posture and cooling.",
		imageUrl:
			"https://images.pexels.com/photos/968631/pexels-photo-968631.jpeg?auto=compress&cs=tinysrgb&w=600",
	},
	{
		id: 7,
		name: "USB-C Hub",
		price: 39.99,
		description:
			"Multi-port USB-C hub with HDMI, USB 3.0, and SD card reader.",
		imageUrl:
			"https://images.pexels.com/photos/4195407/pexels-photo-4195407.jpeg?auto=compress&cs=tinysrgb&w=600",
	},
	{
		id: 8,
		name: "Wireless Charger",
		price: 24.99,
		description:
			"Fast wireless charger compatible with all Qi-enabled devices.",
		imageUrl:
			"https://images.pexels.com/photos/15921116/pexels-photo-15921116/free-photo-of-top-view-of-an-iphone-lying-on-an-inductive-charger.jpeg?auto=compress&cs=tinysrgb&w=600",
	},
];

// Array to store cart items
let cart = [];

function displayProducts(products) {
	const productGrid = document.getElementById("product-grid");
	productGrid.innerHTML = "";

	products.forEach((product) => {
		const productCard = `
            <div class="product-item">
                <img src="${product.imageUrl}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p class="price">$${product.price.toFixed(2)}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
		productGrid.innerHTML += productCard;
	});
}

function addToCart(productId) {
	const product = products.find((product) => product.id === productId);
	const existingItem = cart.find((item) => item.id === productId);

	if (existingItem) {
		existingItem.quantity += 1;
	} else {
		cart.push({ ...product, quantity: 1 });
	}

	updateCartDisplay();
}

function updateCartDisplay() {
	const cartItemsContainer = document.getElementById("cart-items");
	cartItemsContainer.innerHTML = "";

	let total = 0;

	cart.forEach((item) => {
		total += item.price * item.quantity;
		const cartItem = `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>Price: $${item.price.toFixed(2)}</p>
                    <div class="quantity-control">
                        <button onclick="decreaseQuantity(${
							item.id
						})">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="increaseQuantity(${
							item.id
						})">+</button>
                    </div>
                </div>
                <p class="cart-item-price">$${(
					item.price * item.quantity
				).toFixed(2)}</p>
                <button class="cart-item-remove" onclick="removeFromCart(${
					item.id
				})">Remove</button>
            </div>
        `;
		cartItemsContainer.innerHTML += cartItem;
	});

	document.getElementById("cart-total").innerText = `$${total.toFixed(2)}`;
}

function increaseQuantity(productId) {
	const cartItem = cart.find((item) => item.id === productId);
	if (cartItem) {
		cartItem.quantity += 1;
		updateCartDisplay();
	}
}

function decreaseQuantity(productId) {
	const cartItem = cart.find((item) => item.id === productId);
	if (cartItem) {
		if (cartItem.quantity > 1) {
			cartItem.quantity -= 1;
		} else {
			removeFromCart(productId);
		}
		updateCartDisplay();
	}
}

function removeFromCart(productId) {
	cart = cart.filter((item) => item.id !== productId);
	updateCartDisplay();
}

function showCheckoutForm() {
	const checkoutForm = document.getElementById("checkout-form");
	checkoutForm.style.display = "block";
}

function submitForm(event) {
	event.preventDefault();

	alert("Order placed successfully!");
}

function submitForm(event) {
	event.preventDefault();

	const name = document.getElementById("name").value;
	const address = document.getElementById("address").value;
	const city = document.getElementById("city").value;
	const state = document.getElementById("state").value;
	const zip = document.getElementById("zip").value;
	const cardNumber = document.getElementById("card-number").value;
	const expiryDate = document.getElementById("expiry-date").value;
	const cvv = document.getElementById("cvv").value;

	setTimeout(() => {
		const confirmationMessage = `
            <h2>Order Confirmation</h2>
            <p><strong>Thank you, ${name}!</strong></p>
            <p>Your order has been successfully placed.</p>
            <h3>Order Details:</h3>
            <p><strong>Address:</strong> ${address}, ${city}, ${state} ${zip}</p>
            <p><strong>Card Number:</strong> ${cardNumber}</p>
            <p><strong>Expiry Date:</strong> ${expiryDate}</p>
            <p><strong>CVV:</strong> ${cvv}</p>
            <h3>Order Summary:</h3>
            <div id="order-summary">${generateOrderSummary()}</div>
        `;

		document.getElementById("checkout-form").innerHTML =
			confirmationMessage;
	}, 1000);

	cart = [];
	updateCartDisplay();
}

function generateOrderSummary() {
	let summary = "";
	cart.forEach((item) => {
		summary += `
            <div class="order-item">
                <p><strong>Product:</strong> ${item.name}</p>
                <p><strong>Quantity:</strong> ${item.quantity}</p>
                <p><strong>Price:</strong> $${item.price.toFixed(2)}</p>
                <p><strong>Total:</strong> $${(
					item.price * item.quantity
				).toFixed(2)}</p>
                <hr>
            </div>
        `;
	});

	const totalPrice = cart.reduce(
		(total, item) => total + item.price * item.quantity,
		0
	);
	summary += `
        <div class="order-total">
            <p><strong>Total Price:</strong> $${totalPrice.toFixed(2)}</p>
        </div>
    `;

	return summary;
}

displayProducts(products);
