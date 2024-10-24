const form = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents page from refreshing

    successMessage.style.display = 'block'; // Showing the success message
    form.reset(); // Clearing the form fields
});