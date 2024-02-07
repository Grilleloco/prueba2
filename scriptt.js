document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const originalColor = '#F4F4F4'; // Color original del banner
    const scrollColor = '#FFFFFF'; // Color cuando se hace scroll
    const borderBottomStyle = '1px solid #D5DBDB'; // Estilo de borde inferior

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            header.style.backgroundColor = scrollColor;
            header.style.borderBottom = borderBottomStyle; // Aplica el borde inferior al hacer scroll
        } else {
            header.style.backgroundColor = originalColor;
            header.style.borderBottom = 'none'; // Elimina el borde inferior en la parte superior de la página
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Tu código existente...
    
    // Código para el carrusel de imágenes
    const carruseles = document.querySelectorAll('.seccion-central');
    
    carruseles.forEach(carrusel => {
        let imagenes = carrusel.querySelectorAll('.carrusel-imagen');
        let indiceActual = 0;

        setInterval(() => {
            // Oculta la imagen actual
            imagenes[indiceActual].classList.remove('activa');
            
            // Incrementa el índice o vuelve al inicio si es el final
            indiceActual = (indiceActual + 1) % imagenes.length;
            
            // Muestra la nueva imagen actual
            imagenes[indiceActual].classList.add('activa');
        }, 5000); // 5000 milisegundos = 5 segundos
    });
});