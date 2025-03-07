/*window.onload = function () {
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
        }, 25000);  // Removes after 10 seconds
    }

    // Create flowers for the first 5 seconds
    for (let i = 0; i < flowers; i++) {
        setTimeout(createFlower, i * 50); // Delay each flower creation slightly
    }

    // Fade out the flower rain after 5 seconds
    setTimeout(() => {
        flowerRain.style.opacity = '0';
    }, 5000);
};*/
document.addEventListener('DOMContentLoaded', function () {
    // Create a function to generate flowers
    function createFlower() {
        const flower = document.createElement('img');
        flower.src = 'https://github.com/Fangedan/silly/blob/main/baby_s_breath_raw-removebg-preview.png?raw=true';  // Replace with the actual flower image URL
        flower.style.position = 'absolute';
        flower.style.top = '-50px';  // Start above the screen
        flower.style.zIndex = '9999';
        flower.style.pointerEvents = 'none';
        flower.style.width = `${Math.random() * 100 + 100}px`;  // Random flower size between 50px and 100px
        flower.style.animation = 'fallingFlowers 15s linear infinite';

        // Randomize horizontal position of the flower
        flower.style.left = `${Math.random() * window.innerWidth}px`;

        document.body.appendChild(flower);

        // Remove flower after animation ends to prevent clutter
        setTimeout(() => {
            flower.remove();
        }, 15000);
    }

    // Generate multiple flowers
    function generateFlowers() {
        for (let i = 0; i < 30; i++) {  // Increase the number of flowers (30 is just an example, you can adjust it)
            createFlower();
        }
    }

    // Call the generateFlowers function every 100ms for a smooth effect
    setInterval(generateFlowers, 100);  // Adjust the interval time for more/less frequent flowers
});
