document.addEventListener('DOMContentLoaded', function () {
    let cursor = document.querySelector('.custom-cursor');

    if (!cursor) {
        cursor = document.createElement('div');
        cursor.classList.add('custom-cursor');
        document.body.appendChild(cursor);
    }

    // Ensure the cursor starts at the correct position and is visible
    cursor.style.opacity = '1';
    cursor.style.position = 'fixed'; // Prevents unnecessary reflows and keeps it fast

    function moveCursor(e) {
        requestAnimationFrame(() => {
            cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        });
    }

    // Track mouse movement and update cursor position
    document.addEventListener('mousemove', moveCursor);

    // Handle clickable elements (buttons, links, etc.)
    document.querySelectorAll('a, button, .clickable').forEach(item => {
        item.addEventListener('mouseenter', () => {
            cursor.style.backgroundImage = 'url("cursor-click.svg")';
        });

        item.addEventListener('mouseleave', () => {
            cursor.style.backgroundImage = 'url("cursor.svg")';
        });
    });

    // Hide the default system cursor
    document.body.style.cursor = 'none';
});
