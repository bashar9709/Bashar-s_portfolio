
// EmailJS init (HTML এ script add করার পর এটা চালু হবে)
(function(){
    emailjs.init("kLurcII0x3AHlEcxg"); // এখানে তোমার Public Key বসাও
})();

let button = document.getElementById('sendBtn');

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validation
    if (!name || !email || !message) {
        alert('Please fill out all required fields.');
        return;
    }

    // Button loading state
    button.innerText = "Sending...";
    button.disabled = true;

    // Send email using EmailJS
    emailjs.send("service_hi9u19h", "template_8og7tpk", {
        from_name: name,
        from_email: email,
        phone: phone,
        subject: subject || "New Message",
        message: message
    })
    .then(function(response) {
        alert("✅ Message sent successfully!");
        document.getElementById('myForm').reset();
    })
    .catch(function(error) {
        alert("❌ Failed to send message!");
        console.error(error);
    })
    .finally(function() {
        button.innerText = "Send Message";
        button.disabled = false;
    });
});