document.addEventListener('DOMContentLoaded', function () {
    const cursor = document.querySelector('.custom-cursor');

    function moveCursor(e) {
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY + 'px';
    }

    // Set initial cursor position to prevent it from appearing in the top-left corner
    document.addEventListener('mousemove', function (e) {
        moveCursor(e);
    }, { once: true }); // Runs once to set the initial position

    // Keep tracking mouse movement
    document.addEventListener('mousemove', moveCursor);

    // Handle clickable elements (buttons, links, etc.)
    document.querySelectorAll('a, button, .clickable').forEach(item => {
        item.addEventListener('mouseenter', function () {
            cursor.style.backgroundImage = 'url("cursor-click.svg")';
        });

        item.addEventListener('mouseleave', function () {
            cursor.style.backgroundImage = 'url("cursor.svg")';
        });
    });

    // Hide the default system cursor
    document.body.style.cursor = 'none';
});
