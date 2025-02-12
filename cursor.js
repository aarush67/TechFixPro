document.addEventListener('DOMContentLoaded', function () {
    let cursor = document.querySelector('.custom-cursor');

    // If the cursor doesn't exist, create it
    if (!cursor) {
        cursor = document.createElement('div');
        cursor.classList.add('custom-cursor');
        document.body.appendChild(cursor);
    }

    function isSmallScreen() {
        return window.innerWidth <= 768; // Adjust for mobile and tablets
    }

    function moveCursor(e) {
        if (isSmallScreen()) return; // Disable on small screens
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY + 'px';
        cursor.style.opacity = '1'; // Ensure visibility
    }

    function toggleCursor() {
        if (isSmallScreen()) {
            cursor.style.display = 'none';
            document.body.style.cursor = 'auto'; // Restore system cursor
        } else {
            cursor.style.display = 'block';
            document.body.style.cursor = 'none'; // Hide system cursor
        }
    }

    // Initialize cursor visibility
    toggleCursor();

    // Update cursor visibility when resizing
    window.addEventListener('resize', toggleCursor);

    // Try to get the last known mouse position from session storage
    const lastX = sessionStorage.getItem('cursorX');
    const lastY = sessionStorage.getItem('cursorY');

    if (lastX && lastY && !isSmallScreen()) {
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
            if (!isSmallScreen()) {
                cursor.style.backgroundImage = 'url("cursor-click.svg")';
            }
        });

        item.addEventListener('mouseleave', function () {
            if (!isSmallScreen()) {
                cursor.style.backgroundImage = 'url("cursor.svg")';
            }
        });
    });
});
