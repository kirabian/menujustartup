let currentLang = 'id';

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Scroll animations
const scrollElements = document.querySelectorAll('.animate-on-scroll');

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend;
};

const displayScrollElement = (element) => {
    element.classList.add('is-visible');
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElement(el);
        }
    });
};

window.addEventListener('scroll', handleScrollAnimation);
handleScrollAnimation();

// Language switcher
function toggleLanguage() {
    currentLang = currentLang === 'id' ? 'en' : 'id';
    document.documentElement.lang = currentLang;
    
    const elements = document.querySelectorAll('[data-en][data-id]');
    elements.forEach(el => {
        el.textContent = currentLang === 'en' ? el.getAttribute('data-en') : el.getAttribute('data-id');
    });
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


// === KODE BARU UNTUK FIXING MENU MOBILE ===
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

// 1. Tambahkan event listener ke tombol hamburger
mobileMenuBtn.addEventListener('click', () => {
    // 2. Toggle class 'nav-active' pada .nav-links
    navLinks.classList.toggle('nav-active');
});

// 3. (Opsional) Tutup menu saat link di-klik (berguna untuk single page)
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('nav-active')) {
            navLinks.classList.remove('nav-active');
        }
    });
});
// === AKHIR DARI KODE BARU ===