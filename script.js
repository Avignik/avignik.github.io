// Contact form submission handler using Formspree for automatic email sending
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const form = this;
    const formData = new FormData(form);
    
    // Replace 'YOUR_FORM_ID' with your actual Formspree form ID
    fetch('https://formspree.io/f/xlgjewyw', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            // Show success message
            document.getElementById('success-message').style.display = 'block';
            // Reset the form
            form.reset();
        } else {
            alert('Oops! There was a problem submitting your form. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Oops! There was a problem submitting your form. Please try again.');
    });
});