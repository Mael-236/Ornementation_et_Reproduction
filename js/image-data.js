// Image data with categories and related images
const imageData = {
    'img/deco-mural-mirroir/IMG_20220530_174915_840.jpg': {
        category: 'deco-mural-mirroir',
        title: 'Décoration Murale - Miroir',
        images: [
            'img/deco-mural-mirroir/IMG_20220530_174915_840.jpg',
            'img/deco-mural-mirroir/IMG_20220329_115659.jpg',
            'img/deco-mural-mirroir/WhatsApp Image 2024-06-17 à 17.48.50_db92453c.jpg',
            'img/deco-mural-mirroir/WhatsApp Image 2024-06-17 à 17.48.51_6c291b24.jpg',
            'img/deco-mural-mirroir/WhatsApp Image 2024-06-17 à 17.48.52_59f92e51.jpg'
            // Add more related images here
        ]
    },
    'img/paris-chantier/IMG_20220407_115251.jpg': {
        category: 'paris-chantier',
        title: 'Chantier Paris',
        images: [
            'img/paris-chantier/IMG_20220407_115251.jpg',
            'img/paris-chantier/IMG_20220405_142220.jpg',
            'img/paris-chantier/IMG_20220112_155343.jpg',
            'img/paris-chantier/IMG_20220113_115810.jpg',
            'img/paris-chantier/IMG_20220114_130931.jpg',
            'img/paris-chantier/WhatsApp Image 2024-06-17 à 17.34.41_e9305f18.jpg',
            'img/paris-chantier/WhatsApp Image 2024-06-17 à 17.34.44_8cee3914.jpg',
            // Add more related images here
        ]
    },
    'img/fontaineb-AS/WhatsApp Image 2024-06-18 à 16.39.19_a3c1c8d6.jpg': {
        category: 'fontaineb-AS',
        title: 'Fontainebleau - Après-Service',
        images: [
            'img/fontaineb-AS/WhatsApp Image 2024-06-18 à 16.39.19_a3c1c8d6.jpg',
            'img/fontaineb-AS/WhatsApp Image 2024-06-18 à 16.39.18_bd04ce97.jpg',
            // Add more related images here
        ]
    },
    'img/restau-paris/restau-paris1.jpg': {
        category: 'restau-paris',
        title: 'Restaurant Paris',
        images: [
            'img/restau-paris/restau-paris1.jpg',
            // Add more related images here
        ]
    },
    'img/IMG_20220726_172400.jpg': {
        category: 'general',
        title: 'Réalisation Générale',
        images: [
            'img/IMG_20220726_172400.jpg',
            // Add more related images here
        ]
    },
    'img/fontaineb-AS/WhatsApp Image 2024-06-18 à 16.39.18_bd04ce97.jpg': {
        category: 'fontaineb-AS',
        title: 'Fontainebleau - Après-Service',
        images: [
            'img/fontaineb-AS/WhatsApp Image 2024-06-18 à 16.39.18_bd04ce97.jpg',
            'img/fontaineb-AS/WhatsApp Image 2024-06-18 à 16.39.19_a3c1c8d6.jpg',
            // Add more related images here
        ]
    }
};

// Function to get image data
function getImageData(imagePath) {
    return imageData[imagePath] || null;
}