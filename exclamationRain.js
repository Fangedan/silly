window.onload = function () {
    const exclamationRain = document.getElementById('exclamation-rain');
    let exclamationCount = 50; // Number of exclamations to fall

    // Function to create an exclamation element and animate it
    function createExclamation() {
        let exclamation = document.createElement('img');
        exclamation.src = 'https://github.com/Fangedan/silly/blob/main/double-exclamation-mark-removebg-preview.png?raw=true';
        exclamation.alt = 'Exclamation';
        exclamation.classList.add('exclamation');

        // Randomize the starting position and animation delay for each exclamation
        exclamation.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
        exclamation.style.animationDelay = Math.random() * 2 + 's'; // Random delay to stagger fall
        exclamation.style.opacity = 1;

        exclamationRain.appendChild(exclamation);

        // Remove exclamation after animation to clean up the DOM
        setTimeout(() => {
            exclamation.remove();
        }, 60000);  // Removes after 60 seconds (duration of fall animation)
    }

    // Create exclamations every 100ms for 60 seconds
    let interval = setInterval(() => {
        createExclamation();
    }, 100); // Create one exclamation every 100ms

    // Stop creating new exclamations after 60 seconds
    setTimeout(() => {
        clearInterval(interval); // Stop the interval
        exclamationRain.style.opacity = '0'; // Fade out the exclamation rain after 60 seconds
    }, 60000); // Stop after 60 seconds
};