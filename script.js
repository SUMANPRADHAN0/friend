document.getElementById("revealButton").addEventListener("click", function() {
    document.getElementById("messageContainer").style.display = "block";
    this.style.display = "none"; // Hide button after clicking

    // Start Falling Hearts & Roses
    startFalling();

    // Start Typing Effect
    startTyping();

    // Play Background Music
    document.getElementById("bgMusic").play();
});

function startFalling() {
    const outsideContainer = document.getElementById("falling-container");
    const insideContainer = document.getElementById("falling-inside");

    setInterval(() => {
        createFallingElement(outsideContainer);
        createFallingElement(insideContainer);
    }, 300);
}

function createFallingElement(container) {
    const element = document.createElement("div");
    element.classList.add("falling");

    // Randomly choose a heart or a rose
    element.innerHTML = Math.random() > 0.5 ? "❤️" : "🌹";

    // Random position and animation duration
    element.style.left = Math.random() * 100 + "vw";
    element.style.animationDuration = (Math.random() * 2 + 3) + "s"; // 3s - 5s

    container.appendChild(element);

    // Remove element after animation
    setTimeout(() => {
        element.remove();
    }, 5000);
}

function startTyping() {
    const message = document.getElementById("message");
    const text = `Hey Pookiee💕,

My love, even when we are miles apart, I want you to know that my love for you is growing stronger every day. You are my favorite person to talk to, and I cherish every text, call, and memory we create together. I am so lucky to have you in my life, and you are always in my heart. You are my bestie, my mirey ,my everything  and the person I love most in this world.

In a world that can feel chaotic, you are my tranquil oasis. Your love wraps around me like a gentle breeze, calming my restless spirit and bringing peace to my soul 💖 

You are my greatest gift, my biggest supporter, and the love of my life . I can't begin to explain how much you mean to me and how much you've changed my life for the better. Being with you feels like a dream come true. You make me laugh when I don't feel like smiling,  and you love me in ways I never thought possible. I feel so lucky to call you mine. I promise to always cherish you, to love you unconditioally

With love,  
Ekta`;

    let index = 0;
    function typeLetter() {
        if (index < text.length) {
            message.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeLetter, 135); // Typing speed
        } else {
            message.style.borderRight = "none"; // Remove blinking cursor
            showMoreLink(); // Show "Click here for more" after typing ends
        }
    }

    typeLetter();
}

// Function to show "Click here for more" link
function showMoreLink() {
    const moreLink = document.createElement("p");
    moreLink.innerHTML = `<a href="#" target="_blank" class="more-link">❤️❤️</a>`;
    document.getElementById("messageContainer").appendChild(moreLink);
}
