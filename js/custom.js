// Function to update the logo based on the screen size
function updateLogo() {
    const logo = document.getElementById('img_logo');
    const screenWidth = window.innerWidth;

    if (screenWidth <= 767) {
        // Screen width is 767px or less (mobile devices)
        logo.src = 'img/custom_images/logo/ICON WHITE.png';
    } else {
        // Screen width is greater than 767px (laptops/desktops)
        logo.src = 'img/custom_images/logo/WHITE PNG.png';
    }
}

// Initial logo update
updateLogo();

// Update the logo when the window is resized
window.addEventListener('resize', updateLogo);

