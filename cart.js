function showToast(message) {
  const toast = document.getElementById("toast");
  if (toast) {
    toast.textContent = message;
    toast.classList.remove("hidden");
    setTimeout(() => toast.classList.add("hidden"), 2000);
  }
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const countSpan = document.querySelector(".cart-count");
  if (countSpan) countSpan.textContent = cart.length;
}

function addToCart(product) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  showToast(`${product.name} added to cart`);
}

function removeCartItem(index) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  location.reload();
}

// Run this on every page that includes the cart icon
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
});
