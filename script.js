// === HAMBURGER MENU ===
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
        // Animate hamburger spans
        const spans = hamburger.querySelectorAll('span');
        if (mobileMenu.classList.contains('open')) {
            spans[0].style.transform = 'translateY(7px) rotate(45deg)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
        } else {
            spans[0].style.transform = '';
            spans[1].style.opacity = '';
            spans[2].style.transform = '';
        }
    });

    // Close menu when a link is clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = '';
            spans[1].style.opacity = '';
            spans[2].style.transform = '';
        });
    });
}

// === SCROLL REVEAL ===
function reveal() {
    const reveals = document.querySelectorAll('.reveal, .reveal-right');
    const windowHeight = window.innerHeight;

    reveals.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 80) {
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', reveal);
reveal(); // trigger on load

// === HEADER SHRINK ON SCROLL ===
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
        header.style.borderBottom = '1px solid var(--border)';
        header.style.boxShadow = '0 4px 30px rgba(0,0,0,0.05)';
    } else {
        header.style.borderBottom = '';
        header.style.boxShadow = '';
    }
});

// === SMOOTH ACTIVE NAV HIGHLIGHT ===
const sections = document.querySelectorAll('section[id], footer[id]');
const navLinks = document.querySelectorAll('.nav a');

function highlightNav() {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === '#' + current) {
            link.style.color = 'var(--primary-red)';
        }
    });
}

window.addEventListener('scroll', highlightNav);
