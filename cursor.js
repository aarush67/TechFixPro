// Handle mouse movement
document.addEventListener('mousemove', function (e) {
    const cursor = document.querySelector('.custom-cursor'); // Custom cursor element

    // Position the custom cursor at the mouse's X and Y coordinates
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});

// Handle clickable areas (e.g., links, buttons, navbar)
document.querySelectorAll('a, button, .clickable').forEach(item => {
    item.addEventListener('mouseenter', function () {
        // Change cursor to click version when hovering over clickable elements
        document.querySelector('.custom-cursor').style.backgroundImage = 'url("cursor-click.svg")';
    });

    item.addEventListener('mouseleave', function () {
        // Change cursor back to default version when leaving clickable elements
        document.querySelector('.custom-cursor').style.backgroundImage = 'url("cursor.svg")';
    });
});

// Optional: You could also add the functionality to hide the default system cursor
// and make sure the custom cursor is visible.
document.body.style.cursor = 'none'; // Hide system cursor for the body
