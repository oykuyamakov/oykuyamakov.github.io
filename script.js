// JavaScript for changing content
function changeContent(pageId) {
    // Hide all content sections
    const pages = document.querySelectorAll('.content-section');
    pages.forEach(page => {
        page.classList.remove('active'); // Remove active class (hides the section)
    });

    // Show the selected content section
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.classList.add('active'); // Add active class (shows the section)
    }
}

// Optional: Set default page to be shown when the page loads
window.onload = function() {
    changeContent('about'); // Default page is About
};



//degisen resimler installations icin


// JavaScript for changing images in the installations grid
function changeInstallationsImages() {
    const images = [
        'images/image1.jpg',
        'images/image2.jpg',
        'images/image3.jpg',
        'images/image4.jpg',
        'images/image5.jpg',
        'images/image6.jpg'
    ];

    const gridItems = document.querySelectorAll('#installations .grid-item');

    gridItems.forEach(item => {
        // Select a random image from the images array
        const randomImage = images[Math.floor(Math.random() * images.length)];
        item.style.backgroundImage = `url(${randomImage})`; // Update the image
    });
}

// Optional: Set interval to change the images every 3 seconds
setInterval(changeInstallationsImages, 8000); // Change images every 3 seconds
