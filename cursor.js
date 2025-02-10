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

    // Immediately show the cursor instead of hiding it initially
    cursor.style.opacity = '1';

    // Try to get the last known mouse position from session storage
    const lastX = sessionStorage.getItem('cursorX');
    const lastY = sessionStorage.getItem('cursorY');

    if (lastX && lastY) {
        cursor.style.left = lastX + 'px';
        cursor.style.top = lastY + 'px';
    }

    // Track mouse movement and update cursor position
    document.addEventListener('mousemove', function (e) {
        moveCursor(e);
        // Save the cursor position to session storage before navigating away
        sessionStorage.setItem('cursorX', e.pageX);
        sessionStorage.setItem('cursorY', e.pageY);
    });

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
