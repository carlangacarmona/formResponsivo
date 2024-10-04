document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    $('#confirmationModal').modal('show');
});

document.getElementById('confirmSubmit').addEventListener('click', function() {
    $('#confirmationModal').modal('hide');

    // Set default values if fields are empty
    const fields = ['nombre', 'apellido', 'ciudad'];
    fields.forEach(field => {
        const input = document.getElementById(field);
        if (!input.value) {
            input.value = input.defaultValue;
        }
    });

    // Simulate form submission
    window.open('confirmacion.html', '_blank');
});

