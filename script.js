const Joys = [
    { id: 1, name: 'Believe in yourself and all that you are.', author: 'Norman Vincent Peale' },
    { id: 2, name: 'Success is not the key to happiness, happiness is the key to success.', author: 'Albert Schweitzer' },
    { id: 3, name: 'Your limitation—it’s only your imagination.', author: 'Unknown' },
    { id: 4, name: 'Dream it. Believe it. Build it.', author: 'Unknown' }
];

const messageElement = document.querySelector('#message');
const submitButton = document.querySelector('#submit-button');

function generateMessage() {
    const randomItem = Joys[Math.floor(Math.random() * Joys.length)];
    const randomMessage = randomItem.name;
    const author = ` - ${randomItem.author}`;
    
    messageElement.textContent = ""; // Clear the current message for a clean start
    let fullMessage = randomMessage + author; // Combine the message and author
    let index = 0;

    function typeEffect() {
        if (index < fullMessage.length) {
            messageElement.textContent += fullMessage[index];
            index++;
            setTimeout(typeEffect, 50); // Adjust typing speed (in milliseconds)
        }
    }

    typeEffect();
}

submitButton.addEventListener('click', generateMessage);
