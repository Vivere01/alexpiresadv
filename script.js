// Typewriter Effect for Quote
const quoteText = "Não há causa indigna de defesa. Nem réu que não mereça o benefício da lei, sob pena de a justiça, negada ao pior dos homens, ser negada a todos os justos";
const typeWriterElement = document.getElementById("typewriter-text");
let i = 0;
let isTyping = false;

function typeWriter() {
    if (i < quoteText.length) {
        typeWriterElement.innerHTML += quoteText.charAt(i);
        i++;
        setTimeout(typeWriter, 40); // typing speed
    }
}

// Scroll Reveal
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    var windowHeight = window.innerHeight;
    
    // Start typewriter when hero is visible
    var heroText = document.querySelector(".hero-text-area");
    if(heroText && !isTyping) {
        var elementTop = heroText.getBoundingClientRect().top;
        if(elementTop < windowHeight) {
            isTyping = true;
            // Delay typewriter slightly for effect
            setTimeout(typeWriter, 500);
        }
    }

    for (var j = 0; j < reveals.length; j++) {
        var elementTop = reveals[j].getBoundingClientRect().top;
        var elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            reveals[j].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);
reveal(); // Trigger on load
