document.addEventListener('mousemove', (e) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    if (Math.abs(e.clientX - centerX) > 100 || Math.abs(e.clientY - centerY) > 100) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = e.clientX - 10 + 'px';
        heart.style.top = e.clientY - 10 + 'px';
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 800);
    }
});
