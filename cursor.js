document.addEventListener('DOMContentLoaded', function () {
    const cursor = document.querySelector('.custom-cursor');

    // Function to update cursor position
    function moveCursor(e) {
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY + 'px';
    }

    // Set the initial position to the mouse's current position when the page loads
    document.addEventListener('mousemove', function (e) {
        moveCursor(e);
    }, { once: true }); // Runs only once to set initial position

    // Handle continuous mouse movement
    document.addEventListener('mousemove', moveCursor);

    // Handle clickable elements
    document.querySelectorAll('a, button, .clickable').forEach(item => {
        item.addEventListener('mouseenter', function () {
            cursor.style.backgroundImage = 'url("cursor-click.svg")';
        });

        item.addEventListener('mouseleave', function () {
            cursor.style.backgroundImage = 'url("cursor.svg")';
        });
    });

    // Hide the system cursor
    document.body.style.cursor = 'none';
});
