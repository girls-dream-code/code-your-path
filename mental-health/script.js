document.getElementById('supportForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been received.`);
        document.getElementById('supportForm').reset();
    } else {
        alert('Please fill out all fields.');
    }
});
