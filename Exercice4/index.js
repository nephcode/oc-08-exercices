// Sélectionne le bouton et le paragraphe par leur ID
const button = document.getElementById('button');
const messageParagraph = document.getElementById('message');

// Ajoute un observateur d'événement pour le clic sur le bouton
button.addEventListener('click', () => {
    // Change le contenu du paragraphe pour afficher le message
    messageParagraph.textContent = 'Bonjour, vous avez cliqué sur le bouton !';
});