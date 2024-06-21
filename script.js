const phrases = [
    "Nuestras camisas combinan elegancia y comodidad, perfectas para cualquier ocasión.",
    "Cada camisa está confeccionada con materiales de alta calidad, garantizando durabilidad y un ajuste perfecto.",
    "Descubre el lujo diario con nuestras camisas, diseñadas meticulosamente para ofrecer un confort excepcional y un estilo sofisticado.",
    "Eleva tu guardarropa con nuestras camisas, donde la atención a los detalles y los diseños exclusivos crean una prenda verdaderamente única.",
    "Experimenta la comodidad y estilo incomparables con nuestras camisas de última generación.",
    "Nuestras camisas están diseñadas para destacar en cualquier situación, ofreciendo versatilidad y elegancia."
];

function getRandomPhrase() {
    return phrases[Math.floor(Math.random() * phrases.length)];
}

function showNextPhrase() {
    const phraseContainer = document.getElementById('phrase-container');
    const phraseElement = document.createElement('div');
    phraseElement.className = 'phrase';
    phraseElement.textContent = getRandomPhrase();

    phraseContainer.innerHTML = ''; // Limpiar el contenedor
    phraseContainer.appendChild(phraseElement);

    // Mostrar la frase con una transición suave
    setTimeout(() => {
        phraseElement.style.display = 'block';
        setTimeout(() => {
            phraseElement.style.opacity = 1;
        }, 10);
    }, 10);
}

// Mostrar una frase al cargar la página
showNextPhrase();

// Cambiar las frases cada 5 segundos
setInterval(showNextPhrase, 5000);