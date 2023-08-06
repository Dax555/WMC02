document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Gather form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const match = document.getElementById("match").value;
    const numTickets = parseInt(document.getElementById("numTickets").value);

    // Perform validation
    if (name === "" || email === "" || match === "" || numTickets <= 0) {
        alert("Please fill in all the required fields.");
        return;
    }

    // Calculate total amount (for demonstration purposes, $10 per ticket)
    const totalAmount = numTickets * 10;
    document.getElementById("totalAmount").textContent = totalAmount;

    // Show the payment form and hide the booking form
    document.getElementById("bookingForm").style.display = "none";
    document.getElementById("paymentForm").style.display = "block";
});


function buy(){
    const fname = document.getElementById('fname').value;
    const femail = document.getElementById('femail').value;
    const adr = document.getElementById('adr').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zip = document.getElementById('zip').value;
    const cname = document.getElementById('cname').value;
    const ccnum = document.getElementById('ccnum').value;
    const expmonth = document.getElementById('expmonth').value;
    const expyear = document.getElementById('expyear').value;
    const cvv = document.getElementById('cvv').value;
  
    if (fname.trim() == ''  && femail.trim() == '' && adr.trim() == '' && city.trim() == '' && state.trim() == '' && zip.trim() == '' && cname.trim() == '' && ccnum.trim() == '' && expmonth.trim() == '' && expyear.trim() == '' && cvv.trim() == '' ) {
      // Show alert if all fields are filled
      alert('All the input fields are mandatory to fill');
    } else {
     document.getElementById("confirmPayment").addEventListener("click", function() {
    // You would handle the actual payment processing and confirmation here
    // For demonstration purposes, we will simply show a success message
    alert("Payment confirmed! Your tickets are booked successfully.");
    document.getElementById("bookingForm").reset();

    // Reset the form and go back to booking form
    document.getElementById("paymentForm").style.display = "none";
    document.getElementById("bookingForm").style.display = "block";
});
    }
  }
  
  
  