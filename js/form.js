

let button = document.getElementById('sendBtn');
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
  
    // Simple form validation
    if (!name || !email || !message) {
      alert('Please fill out all required fields.');
      return;
    }
  
    // Log form data to the console (replace with AJAX call if needed)
    console.log({
      name: name,
      email: email,
      phone: phone,
      subject: subject,
      message: message
    });
  
    // Show a success message (you can also clear the form here)
    alert('Your message has been sent successfully!');
    document.getElementById('myForm').reset();
  });