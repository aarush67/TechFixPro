document.addEventListener('DOMContentLoaded', function () {
    let cursor = document.querySelector('.custom-cursor');

    if (!cursor) {
        cursor = document.createElement('div');
        cursor.classList.add('custom-cursor');
        document.body.appendChild(cursor);
    }

    // Move cursor instantly with the mouse
    document.addEventListener('mousemove', function (e) {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
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
});
