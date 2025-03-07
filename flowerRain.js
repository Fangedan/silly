window.onload = function () {
    const flowerRain = document.getElementById('flower-rain');
    let flowers = 100; // Number of flowers to fall

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

        flowerRain.appendChild(flower);

        // Remove flower after animation to clean up the DOM
        setTimeout(() => {
            flower.remove();
        }, 60000);  // Flowers will be removed after 60 seconds
    }

    // Create flowers for the first 5 seconds
    for (let i = 0; i < flowers; i++) {
        setTimeout(createFlower, i * 50); // Delay each flower creation slightly
    }

    // Fade out the flower rain after 60 seconds (adjusted to match the new rain duration)
    setTimeout(() => {
        flowerRain.style.opacity = '0';
    }, 60000); // Flower rain lasts for 60 seconds now
};