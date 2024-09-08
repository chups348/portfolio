document.querySelectorAll('.project-item').forEach(item => {
    item.addEventListener('mouseover', () => {
        // When hovering over an item, blur and grayscale all others
        document.querySelectorAll('.project-item').forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.style.filter = 'blur(5px) grayscale(100%)';
                otherItem.style.opacity = '0.5';
            }
        });
    });

    item.addEventListener('mouseleave', () => {
        // When the mouse leaves an item, reset all others
        document.querySelectorAll('.project-item').forEach(otherItem => {
            otherItem.style.filter = 'none';
            otherItem.style.opacity = '1';
        });
    });

    item.addEventListener('click', () => {
        // Reset all items first
        document.querySelectorAll('.project-item').forEach(otherItem => {
            otherItem.style.filter = 'none';
            otherItem.style.opacity = '1';
        });
        // Then apply the blur and grayscale to all others
        document.querySelectorAll('.project-item').forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.style.filter = 'blur(5px) grayscale(100%)';
                otherItem.style.opacity = '0.5';
            }
        });
    });
});

