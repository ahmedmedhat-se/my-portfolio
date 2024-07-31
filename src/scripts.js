document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.navbar-toggler');
    const collapseContent = document.querySelector('#navbar-items');

    toggleButton.addEventListener('click', function() {
        if (collapseContent.style.display === 'block') {
            collapseContent.style.display = 'none'; // Hide the content
        } else {
            collapseContent.style.display = 'block'; // Show the content
        }
    });
});
