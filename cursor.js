document.addEventListener('DOMContentLoaded', function () {
    let cursor = document.querySelector('.custom-cursor');

    // If the cursor doesn't exist, create it
    if (!cursor) {
        cursor = document.createElement('div');
        cursor.classList.add('custom-cursor');
        document.body.appendChild(cursor);
    }

    function moveCursor(e) {
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY + 'px';
        cursor.style.opacity = '1'; // Ensure visibility
    }

    // Make sure the cursor is visible and starts at the correct position
    cursor.style.opacity = '0';

    // Immediately set the cursor position to the last known mouse position
    if (window.event) {
        moveCursor(window.event);
    }

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
