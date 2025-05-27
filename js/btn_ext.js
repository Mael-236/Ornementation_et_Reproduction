document.addEventListener('DOMContentLoaded', function() {
    // Charger le fichier JSON
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const gridContainer = document.getElementById('grid-container');

            // Parcourir les données JSON et créer les éléments grid-item
            data.forEach((item, index) => {
                const gridItem = document.createElement('div');
                gridItem.classList.add('grid-item');

                const img = document.createElement('img');
                img.src = item.images[0]; // Utiliser la première image de l'item
                img.alt = item.title;
                img.dataset.id = item.id;

                img.addEventListener('load', function() {
                    const aspectRatio = img.naturalWidth / img.naturalHeight;
                    if (aspectRatio > 2) {
                        // Image en format paysage avec un aspect ratio supérieur à 2:1
                        gridItem.classList.add('gallery img');
                    } else if (aspectRatio < 1) {
                        // Image en format portrait avec un aspect ratio inférieur à 1:2
                        gridItem.classList.add('gallery img:hover');
                    }
                });

                const title = document.createElement('h2');
                title.textContent = item.title;
                infos.appendChild(title);

                const extendBtn = document.createElement('a');
                extendBtn.classList.add('extend-btn');
                extendBtn.href = '#';
                extendBtn.innerHTML = '<img src="../img/system-uicons--scale-extend-light.png" alt="Extend">';
                infosButtons.appendChild(extendBtn);

            });
        });
});