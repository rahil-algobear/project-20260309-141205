document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.gallery-card');

    cards.forEach(card => {
        const palette = card.dataset.palette.split(',');
        const accentColor = palette[0];

        card.addEventListener('mouseenter', () => {
            card.style.borderColor = accentColor;
        });

        card.addEventListener('mouseleave', () => {
            card.style.borderColor = 'transparent';
        });
    });
});