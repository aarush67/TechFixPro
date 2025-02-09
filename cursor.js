document.addEventListener('DOMContentLoaded', function () {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    function moveCursor(e) {
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY + 'px';
    }

    // Get the current mouse position immediately on load
    document.addEventListener('mousemove', function (e) {
        moveCursor(e);
    }, { once: true });

    // Keep tracking mouse movement
    document.addEventListener('mousemove', moveCursor);

    // Ensure cursor starts at the correct position
    if ('ontouchstart' in window === false) {
        document.addEventListener('mouseenter', function (e) {
            moveCursor(e);
        });
    }

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
