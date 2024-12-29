const noButton = document.getElementById('no');
const yesButton = document.getElementById('yes');

noButton.addEventListener('mouseover', () => {
    // Acak posisi tombol
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});

yesButton.addEventListener('click', () => {
    alert('Are you kidding me?');
});
