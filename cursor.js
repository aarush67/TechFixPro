document.addEventListener('DOMContentLoaded', function () {
    let cursor = document.querySelector('.custom-cursor');

    if (!cursor) {
        cursor = document.createElement('div');
        cursor.classList.add('custom-cursor');
        document.body.appendChild(cursor);
    }

    let cursorX = 0, cursorY = 0;
    let targetX = window.innerWidth / 2, targetY = window.innerHeight / 2;
    let easing = 0.2; // Adjust for smoother motion

    function animateCursor() {
        cursorX += (targetX - cursorX) * easing;
        cursorY += (targetY - cursorY) * easing;

        cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;

        requestAnimationFrame(animateCursor);
    }

    document.addEventListener('mousemove', function (e) {
        targetX = e.clientX;
        targetY = e.clientY;
    });

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

    animateCursor(); // Start animation loop
});
