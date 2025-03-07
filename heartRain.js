window.onload = function () {
    const heartRain = document.getElementById('heart-rain');
    let heart = 100; // Number of heart to fall

    // Function to create a heart element and animate it
    function createHeart() {
        let heart = document.createElement('img');
        heart.src = 'https://github.com/Fangedan/silly/blob/main/pink_heart-removebg-preview.png?raw=true';
        heart.alt = 'Heart';
        heart.classList.add('heart');

        // Randomize the starting position and animation delay for each heart
        heart.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
        heart.style.animationDelay = Math.random() * 2 + 's'; // Random delay to stagger fall
        heart.style.opacity = 1;

        heartRain.appendChild(heart);

        // Remove heart after animation to clean up the DOM
        setTimeout(() => {
            heart.remove();
        }, 60000);  // Hearts will be removed after 60 seconds
    }

    // Create hearts for the first 5 seconds
    for (let i = 0; i < heart; i++) {
        setTimeout(createHeart, i * 50); // Delay each heart creation slightly
    }

    // Fade out the heart rain after 60 seconds (adjusted to match the new rain duration)
    setTimeout(() => {
        heartRain.style.opacity = '0';
    }, 60000); // heart rain lasts for 60 seconds now
};