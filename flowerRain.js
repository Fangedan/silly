window.onload = function () {
    const flowerRain = document.getElementById('flower-rain');
    let flowers = 100; // Number of flowers to fall

    // Define the minimum and maximum size for the flowers
    const minSize = 30; // Minimum size of the flower in pixels
    const maxSize = 80; // Maximum size of the flower in pixels

    // Function to create a flower element and animate it
    function createFlower() {
        let flower = document.createElement('img');
        flower.src = 'https://github.com/Fangedan/silly/blob/main/baby_s_breath_raw-removebg-preview.png?raw=true';  // Change this URL to your flower image
        flower.alt = 'Flower';
        flower.classList.add('flower');

        // Randomize the starting position and animation delay for each flower
        flower.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
        flower.style.animationDelay = Math.random() * 2 + 's'; // Random delay to stagger fall
        flower.style.opacity = 1;

        // Randomize the flower size between minSize and maxSize
        let flowerSize = Math.random() * (maxSize - minSize) + minSize;  // Random flower size between minSize and maxSize
        flower.style.width = flowerSize + 'px';
        flower.style.height = flowerSize + 'px'; // Ensure the flower maintains its aspect ratio

        flowerRain.appendChild(flower);

        // Remove flower after animation to clean up the DOM
        setTimeout(() => {
            flower.remove();
        }, 25000);  // Removes after 25 seconds
    }

    // Create flowers for the first 5 seconds
    for (let i = 0; i < flowers; i++) {
        setTimeout(createFlower, i * 50); // Delay each flower creation slightly
    }

    // Fade out the flower rain after 5 seconds
    setTimeout(() => {
        flowerRain.style.opacity = '0';
    }, 5000);
};
