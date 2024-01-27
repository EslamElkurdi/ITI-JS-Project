const cartItems = document.querySelector(".cart-items");

function displayCartItem(){
    const items = JSON.parse(localStorage.getItem("cart"));
    items.forEach(item => {
        const cartItem = document.createElement("div")
        cartItem.className = "cart_item";
        cartItem.innerHTML = `
            <p class="cart_id">${item.id}</p>
            <p class="cart_title">${item.title}</p>
            <img src="${item.image}" alt="${item.title}" class="cart_img">
            <p class="cart_price">${item.price}</p>
            <p class="cart_delete">Delete</p>
        `;
        cartItems.appendChild(cartItem);
        
    });
}


displayCartItem();