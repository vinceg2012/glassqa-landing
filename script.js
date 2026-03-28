/* ============================================
   GlassQA — Interaction & Animation Script
   ============================================ */

(function () {
    'use strict';

    // --- Fade-in on scroll (Intersection Observer) ---

    const fadeElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.15,
            rootMargin: '0px 0px -40px 0px',
        }
    );

    fadeElements.forEach((el) => observer.observe(el));

    // --- Button ripple feedback ---

    document.querySelectorAll('.btn').forEach((btn) => {
        btn.addEventListener('click', function (e) {
            const ripple = document.createElement('span');
            const rect = btn.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.15);
                transform: scale(0);
                animation: rippleEffect 0.6s ease-out forwards;
                pointer-events: none;
            `;

            btn.appendChild(ripple);
            ripple.addEventListener('animationend', () => ripple.remove());
        });
    });

    // Inject ripple keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes rippleEffect {
            to {
                transform: scale(2.5);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // --- Feature card hover glow tracking ---

    document.querySelectorAll('.feature-card').forEach((card) => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty(
                'background',
                `radial-gradient(circle at ${x}px ${y}px, rgba(100, 210, 255, 0.06), rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0.03))`
            );
        });

        card.addEventListener('mouseleave', () => {
            card.style.removeProperty('background');
        });
    });

    // --- Play button interaction ---

    const playButton = document.querySelector('.play-button');
    if (playButton) {
        playButton.addEventListener('click', () => {
            playButton.style.transform = 'scale(0.95)';
            setTimeout(() => {
                playButton.style.transform = '';
            }, 150);
        });
    }
})();
