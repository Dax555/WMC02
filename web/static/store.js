let cartItems = [];
let total = 0;

function addToCart(productName, price) {
  cartItems.push({ name: productName, price: price });
  total += price;
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cartItems");
  cartList.innerHTML = "";

  cartItems.forEach(item => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.name} - $${item.price}`;
    cartList.appendChild(listItem);
  });

  document.getElementById("total").textContent = total;
}

function checkout() {
  const cart = document.querySelector(".cart");
  const checkoutForm = document.getElementById("checkoutForm");
  cart.classList.add("hidden");
  checkoutForm.classList.remove("hidden");
}

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("address").value;

  if (cartItems.length === 0) {
    alert("Your cart is empty. Please add items before checking out.");
  } else if (!name || !email || !address) {
    alert("Please fill out all the fields in the form.");
  } else {
    // In a real application, you would process the order here
    alert("Order placed successfully!");
    cartItems = [];
    total = 0;
    updateCart();

    // Reset the form
    document.querySelector("form").reset();

    // Show the cart again after successful checkout
    const cart = document.querySelector(".cart");
    const checkoutForm = document.getElementById("checkoutForm");
    checkoutForm.classList.add("hidden");
    cart.classList.remove("hidden");
  }
});




function buy(){
    const fname = document.getElementById('fname').value;
    const email = document.getElementById('email').value;
    const adr = document.getElementById('adr').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zip = document.getElementById('zip').value;
    const cname = document.getElementById('cname').value;
    const ccnum = document.getElementById('ccnum').value;
    const expmonth = document.getElementById('expmonth').value;
    const expyear = document.getElementById('expyear').value;
    const cvv = document.getElementById('cvv').value;
  
    if (fname.trim() !== ''  && email.trim() !== '' && adr.trim() !== '' && city.trim() !== '' && state.trim() !== '' && zip.trim() !== '' && cname.trim() !== '' && ccnum.trim() !== '' && expmonth.trim() !== '' && expyear.trim() !== '' && cvv.trim() !== '' ) {
      // Show alert if all fields are filled
      alert('Your Order has been placed successfully!');
    } else {
      // Show modal box if any field is empty
      const modalBox = document.getElementById('modalBox');
      modalBox.style.display = 'block';
    }
  }
  
  function closeModal() {
    const modalBox = document.getElementById('modalBox');
    modalBox.style.display = 'none';
  }
  