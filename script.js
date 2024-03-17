document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const from_name = document.getElementById('from_name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const thoughts = document.getElementById('thoughts').value;

    if (from_name && email && message && thoughts) {
        emailjs.send("service_gitotp", "template_gitotp", {
            from_name: from_name,
            email: email,
            message: message,
            thoughts: thoughts
        })
        .then(function(response) {
            console.log('Email sent successfully', response.status, response.text);
            redirectToGitHub();
        })
        .catch(function(error) {
            console.log('Email failed to send', error);
            redirectToGitHub();
        });
    } else {
        console.log('Form fields are not filled out correctly.');
        redirectToGitHub();
    }
});

function redirectToGitHub() {
    window.location.href = 'https://github.com/Drishti228';
}
