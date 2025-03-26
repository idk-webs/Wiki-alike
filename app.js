document.addEventListener("DOMContentLoaded", function() {
    const card = document.querySelector('.card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                card.classList.add('fade-in');
                observer.unobserve(card); // Stop observing after the card has faded in
            }
        });
    });

    observer.observe(card);
});