// Attendre que le DOM soit chargé
document.addEventListener("DOMContentLoaded", function() {
    // Sélectionner toutes les images du puzzle
    var images = document.querySelectorAll('#puzzleImages img');

    // Cacher toutes les images au départ
    images.forEach(function(image) {
        image.style.display = 'none';
        image.style.width = '300px'; // Définir la largeur des images à 300px
        image.style.transition = 'opacity 1s'; // Ajouter une transition pour le fondu enchaîné
    });

    // Fonction pour démarrer le puzzle
    function startPuzzle() {
        var index = 0;

        function displayImage() {
            if (index < images.length) {
                images[index].style.position = 'absolute';
                images[index].style.left = '50%';
                images[index].style.display = 'inline';
                images[index].style.opacity = '1'; // Rendre l'image invisible avec une opacité de 0
                images[index].style.zIndex = '9999'; // Définir le z-index sur une valeur élevée
                //setTimeout(function() {
                    //images[index].style.opacity = '1'; // Faire apparaître l'image en fondu
                //}, 100); // Délai pour le fondu
                index++;
                setTimeout(displayImage, 2000); // Délai de 1 seconde entre chaque image
            //} else {
                // Toutes les images ont été affichées, les cacher en fondu
                images.forEach(function(image, i) {
                    if (i !== images.length) {
                        setTimeout(function() {
                            image.style.opacity = '0'; // Mettre l'opacité à 0 pour le fondu
                        }, 1000); // Délai pour le fondu
                    }
                });
            }
        }

        // Appeler la fonction displayImage immédiatement
        displayImage();
    }

    // Ajouter un gestionnaire d'événement au bouton
    var button = document.getElementById('puzzle');
    button.addEventListener('click', startPuzzle);
});
