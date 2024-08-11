function convertToBinary() {
    // Récupère la valeur du champ de saisie
    const decimalValue = document.getElementById('decimalInput').value;

    // Vérifie si l'entrée est vide ou non valide
    if (decimalValue === '' || isNaN(decimalValue)) {
        document.getElementById('binaryOutput').textContent = 'Veuillez entrer un nombre valide.';
        return;
    }

    // Convertir le nombre décimal en binaire
    const binaryValue = Number(decimalValue).toString(2);

    // Afficher le résultat binaire
    document.getElementById('binaryOutput').textContent = `Résultat binaire : ${binaryValue}`;
}
