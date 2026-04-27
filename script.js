import { animate, svg, stagger } from 'https://esm.sh/animejs';

const items = document.querySelectorAll('.gallery-item');
const loader = document.getElementById('portfolio-loader');

// Funzione per l'animazione SVG
function startSvgAnimation() {
    animate(svg.createDrawable('.line'), {
        draw: ['0 0', '0 1', '1 1'],
        ease: 'inOutQuad',
        duration: 2000,
        delay: stagger(50),
        loop: true
    });
}

// --- LOGICA ALL'APERTURA DEL SITO ---
// 1. Facciamo partire l'animazione immediatamente
startSvgAnimation();

// 2. Quando tutto il sito è caricato, nascondiamo il loader
window.addEventListener('load', () => {
    // Aggiungiamo un piccolo delay opzionale per far vedere l'animazione 
    // anche se il sito è velocissimo (es. 1 secondo)
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 1700); 
});


// --- LOGICA AL CLICK SUI PROGETTI (già esistente) ---
items.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault(); 
        const destination = item.getAttribute('data-url');
        if (!destination) return;

        // Mostriamo di nuovo il loader (rimuovendo la classe hidden)
        loader.classList.remove('hidden');
        
        // Il reindirizzamento avviene dopo l'animazione
        setTimeout(() => {
            window.location.href = destination;
        }, 1500); 
    });
});