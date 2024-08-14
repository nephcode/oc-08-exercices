// Fonction pour ajouter un caractère à l'affichage
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

// Fonction pour effacer l'affichage
function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

// Fonction pour calculer le résultat de l'expression
function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Utilisation de eval pour calculer l'expression affichée
        const result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = 'Erreur';
    }
}
