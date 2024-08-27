const logo = document.getElementById('logo');

logo.addEventListener('mouseover', () => {
    logo.style.transform = 'scale(1.1)';
    logo.style.filter = 'brightness(1.2)';
});

logo.addEventListener('mouseout', () => {
    logo.style.transform = 'scale(1)';
    logo.style.filter = 'brightness(1)';
});
