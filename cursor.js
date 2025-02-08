// cursor.js

// Function to move the custom cursor based on mouse movement
document.addEventListener('mousemove', function (e) {
    const cursor = document.querySelector('.custom-cursor'); // Get the custom cursor element

    // Position the custom cursor at the mouse position
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});

// Change cursor when hovering over clickable elements (links, buttons, etc.)
document.querySelectorAll('a, button, .clickable').forEach(item => {
    item.addEventListener('mouseenter', function () {
        // Change cursor when hovering over clickable elements
        document.body.style.cursor = 'url("cursor-click.svg"), auto';
    });

    item.addEventListener('mouseleave', function () {
        // Reset cursor when leaving the clickable area
        document.body.style.cursor = 'url("cursor.svg"), auto';
    });
});
