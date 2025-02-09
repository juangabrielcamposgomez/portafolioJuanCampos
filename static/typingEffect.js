document.addEventListener('DOMContentLoaded', function() {
    const paragraph = document.querySelector('#typing-container');
    let textToType = paragraph.innerHTML.replace(/<[^>]*>/g, "").replace(/(\r\n|\n|\r)/gm, '').trim();
    paragraph.textContent = '';
    let charIndex = 0;

    const typingInterval = setInterval(() => {
        if (charIndex < textToType.length) {
            paragraph.textContent += textToType.charAt(charIndex);
            charIndex++;
        } else {
            clearInterval(typingInterval);
        }
    }, 30);
});