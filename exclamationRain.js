window.onload = function () {
    const exclamationRain = document.getElementById('exclamation-rain');
    let exclamation = 100; // Number of exclamations to fall

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
        }, 60000);  // Removes after 60 seconds
    }

    // Create exclamations for 60 seconds (repeatedly)
    let interval = setInterval(() => {
        for (let i = 0; i < exclamation; i++) {
            setTimeout(createExclamation, i * 50); // Delay each exclamation creation slightly
        }
    }, 100); // Repeats every 100ms to keep creating new exclamations for 60 seconds

    // Fade out the exclamation rain after 60 seconds
    setTimeout(() => {
        exclamationRain.style.opacity = '0';
        clearInterval(interval); // Stop creating new exclamations
    }, 60000); // The rain lasts for 60 seconds
};
