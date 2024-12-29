// Pastikan elemen "no" dan "yes" tersedia
const noButton = document.getElementById('no');
const yesButton = document.getElementById('yes');

// Fungsi untuk mengacak posisi tombol "No"
noButton.addEventListener('mouseover', () => {
    // Hitung posisi acak dalam batas viewport
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);

    // Set posisi baru tombol "No"
    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});

// Tindakan ketika tombol "Yes" diklik
yesButton.addEventListener('click', () => {
    alert('Are you kidding me?'); // Pesan troll
});

// Tambahkan handler untuk navigasi berbasis hash (opsional)
window.addEventListener('hashchange', () => {
    console.log('Navigasi ke:', window.location.hash);
    // Bisa tambahkan logika lain jika ada halaman tambahan
});
