document.addEventListener('DOMContentLoaded', function () {
    let cursor = document.querySelector('.custom-cursor');

    if (!cursor) {
        cursor = document.createElement('div');
        cursor.classList.add('custom-cursor');
        document.body.appendChild(cursor);
    }

    // Hide cursor until the first movement event to prevent top-left glitch
    cursor.style.opacity = '0';

    // Move cursor instantly with the mouse
    function moveCursor(e) {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        cursor.style.opacity = '1'; // Show cursor when mouse moves
    }

    document.addEventListener('mousemove', moveCursor);

    document.addEventListener('mousedown', function () {
        cursor.classList.add('cursor-click');
    });

    document.addEventListener('mouseup', function () {
        cursor.classList.remove('cursor-click');
    });

    document.querySelectorAll('a, button, .clickable').forEach(item => {
        item.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
        item.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
    });

    document.body.style.cursor = 'none';
});
