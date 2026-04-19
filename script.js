const items = document.querySelectorAll('.gallery-item');
const loader = document.getElementById('portfolio-loader');
const loaderText = document.getElementById('loader-text');

// --- SEQUENZA DI IMMAGINI ---
const imageSequence = [
    'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1534196511436-921a4e99f297?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop'
];

let currentImageIndex = 0;
let imageInterval;

function cycleImages() {
    loaderText.style.backgroundImage = `url('${imageSequence[currentImageIndex]}')`;
    currentImageIndex = (currentImageIndex + 1) % imageSequence.length;
}

items.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault(); 
        
        const destination = item.getAttribute('data-url');
        if (!destination) return;

        // 1. Attiva il loader
        loader.classList.add('active');
        
        // 2. Inizia la sequenza immagini
        // MODIFICATO: 300 invece di 150 (più lento)
        imageInterval = setInterval(cycleImages, 170);

        // 3. Durata totale del caricamento
        // MODIFICATO: 1500 invece di 2500 (più veloce, dura 1.5 secondi)
        setTimeout(() => {
            clearInterval(imageInterval);
            window.location.href = destination;
        }, 1700); 
    });
});