// Function to update the total price displayed
function updateTotalPrice() {
    const cartItems = document.querySelectorAll(".cart-item");
    let total = 0;
  
    cartItems.forEach(item => {
      const price = parseFloat(item.querySelector(".price").innerText.replace('$', ''));
      const quantity = parseInt(item.querySelector(".quantity").innerText);
      total += price * quantity;
    });
  
    document.getElementById("total-price").innerText = `$${total.toFixed(2)}`;
  }
  
  // Setting up event listeners for each item in the cart
  document.querySelectorAll(".cart-item").forEach(item => {
    // Quantity adjustment
    const quantityElement = item.querySelector(".quantity");
    const plusButton = item.querySelector(".plus");
    const minusButton = item.querySelector(".minus");
  
    // Increase quantity with "+"
    plusButton.addEventListener("click", () => {
      quantityElement.innerText = parseInt(quantityElement.innerText) + 1;
      updateTotalPrice();
    });
  
    // Decrease quantity with "-", minimum of 1
    minusButton.addEventListener("click", () => {
      let quantity = parseInt(quantityElement.innerText);
      if (quantity > 1) {
        quantityElement.innerText = quantity - 1;
        updateTotalPrice();
      }
    });
  
    // Delete item from cart
    const deleteButton = item.querySelector(".delete");
    deleteButton.addEventListener("click", () => {
      item.remove();
      updateTotalPrice();
    });
  
    // Like item (heart icon)
    const likeButton = item.querySelector(".heart");
    likeButton.addEventListener("click", () => {
      likeButton.classList.toggle("liked");
    });
  });
  
  // Initial calculation of the total price
  updateTotalPrice();
  