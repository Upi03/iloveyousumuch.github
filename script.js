// Floating Hearts Animation
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '💕';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
    heart.style.fontSize = (Math.random() * 10 + 15) + 'px';
    
    const heartsContainer = document.querySelector('.floating-hearts');
    heartsContainer.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// Create hearts periodically
setInterval(createFloatingHeart, 800);

// Smooth scroll for better UX
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

// Photo Gallery Enhancement
// Function to handle image upload (for when user adds photos)
function handleImageUpload(input, galleryId) {
    const files = input.files;
    const gallery = document.getElementById(galleryId);
    const placeholders = gallery.querySelectorAll('.photo-placeholder');
    
    Array.from(files).forEach((file, index) => {
        if (index < placeholders.length && file.type.startsWith('image/')) {
            const reader = new FileReader();
            const placeholder = placeholders[index];
            
            reader.onload = function(e) {
                const img = document.createElement('img');
                img.src = e.target.result;
                img.alt = 'Foto kenangan';
                placeholder.appendChild(img);
                placeholder.classList.add('has-image');
            };
            
            reader.readAsDataURL(file);
        }
    });
}

// Add click to upload functionality to photo placeholders
document.querySelectorAll('.photo-placeholder').forEach(placeholder => {
    placeholder.addEventListener('click', function() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.multiple = false;
        
        input.onchange = function(e) {
            const file = e.target.files[0];
            if (file && file.type.startsWith('image/')) {
                const reader = new FileReader();
                const placeholder = e.target.closest('.photo-placeholder');
                
                reader.onload = function(event) {
                    // Remove existing image if any
                    const existingImg = placeholder.querySelector('img');
                    if (existingImg) {
                        existingImg.remove();
                    }
                    
                    const img = document.createElement('img');
                    img.src = event.target.result;
                    img.alt = 'Foto kenangan';
                    placeholder.appendChild(img);
                    placeholder.classList.add('has-image');
                };
                
                reader.readAsDataURL(file);
            }
        };
        
        input.click();
    });
    
    // Add hover effect text
    placeholder.title = 'Klik untuk menambahkan foto';
});

// YouTube player enhancement - pause other videos when one plays
let youtubePlayers = [];

// Initialize YouTube API when available
function onYouTubeIframeAPIReady() {
    const iframes = document.querySelectorAll('.youtube-player iframe');
    iframes.forEach((iframe, index) => {
        try {
            const player = new YT.Player(iframe, {
                events: {
                    'onStateChange': function(event) {
                        // When a video starts playing, pause others
                        if (event.data === YT.PlayerState.PLAYING) {
                            youtubePlayers.forEach((otherPlayer, otherIndex) => {
                                if (otherIndex !== index && otherPlayer && typeof otherPlayer.pauseVideo === 'function') {
                                    otherPlayer.pauseVideo();
                                }
                            });
                        }
                    }
                }
            });
            youtubePlayers.push(player);
        } catch (e) {
            console.log('YouTube API not loaded yet');
        }
    });
}

// Load YouTube IFrame API
if (typeof YT === 'undefined') {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    
    // Set callback when API is ready
    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
} else {
    onYouTubeIframeAPIReady();
}

// Add parallax effect on scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const stars = document.querySelector('.stars');
    const stars2 = document.querySelector('.stars2');
    const stars3 = document.querySelector('.stars3');
    
    if (stars) stars.style.transform = `translateY(${scrolled * 0.5}px)`;
    if (stars2) stars2.style.transform = `translateY(${scrolled * 0.3}px)`;
    if (stars3) stars3.style.transform = `translateY(${scrolled * 0.7}px)`;
});

// Add fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Initialize - set first section visible immediately
const hero = document.querySelector('.hero');
if (hero) {
    hero.style.opacity = '1';
    hero.style.transform = 'translateY(0)';
}

console.log('💕 Website untuk Asyabila Meyla Nur Madina telah dimuat dengan penuh cinta! 💕');

