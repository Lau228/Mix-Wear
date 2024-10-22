let selectedItems = []; // Supprimé le double let ici
let gender = ''; // Pour stocker le genre sélectionné

function setGender(selectedGender) {
    gender = selectedGender;

    // Afficher les catégories spécifiques selon le genre
    document.getElementById('category-hauts').style.display = 'block';
    document.getElementById('category-bas').style.display = 'block';
    document.getElementById('category-accessoires').style.display = 'block';
}

const moodForm = document.getElementById('moodForm');
const articlesContainer = document.querySelector('.articles-grid');

moodForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche la soumission par défaut du formulaire
    const mood = document.querySelector('input[name="mood"]:checked').value;
    displayArticles(mood); // Appelle la fonction pour afficher les articles
});

function displayArticles(mood) {
    // Effacer les articles précédents
    articlesContainer.innerHTML = '';

    // Créer une liste d'articles en fonction de l'humeur et du genre
    let articles = [];
    if (mood === 'heureux(se)') {
        articles = [
            { name: 'Chemise 1', image: 'chemise_femme1.jpeg'},
            { name: 'Chemise 4', image: 'chemise_homme4.jpeg'},
        ];
        document.addEventListener('DOMContentLoaded', function() {
            const mood = 'heureux(se)'; // ou un autre mood que vous gérez
            displayArticles(mood);
        });
        
        
    } else if (mood === 'décontracté(e)') {
        articles = [
            { name: 'T-shirt 2', image: 'tshirt_femme2.jpeg'},
            { name: 'T-shirt 3', image: 'tshirt_homme3.jpeg'},
        ];
        document.addEventListener('DOMContentLoaded', function() {
            const mood = 'décontracté(e)'; // ou un autre mood que vous gérez
            displayArticles(mood);
        });
        
    } else if (mood === 'sportif(ve)') {
        articles = [
            { name: 'T-shirt 4', image: 'tshirt_homme4.jpeg'},
            { name: 'T-shirt 2', image: 'tshirt_femme2.jpeg'},
        ];
        document.addEventListener('DOMContentLoaded', function() {
            const mood = 'sportif(ve)'; // ou un autre mood que vous gérez
            displayArticles(mood);
        });        
    }

    const mood = moodInput.value;
    console.log(`Humeur sélectionnée : ${mood}`); // Debug: Affiche l'humeur sélectionnée
    displayArticles(mood); // Appelle la fonction pour afficher les articles

    console.log(`Articles à afficher :`, articles); // Debug: Affiche les articles à afficher

    // Afficher les articles sous forme de cartes
    articles.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.classList.add('clothing-item');
        articleElement.innerHTML = `
            <img src="${article.image}" alt="${article.name}" class="clothing-image">
            <p>${article.name}</p>
            <button class="fun-button" onclick="selectItem('${article.name}')">Ajouter</button>
        `;
        articlesContainer.appendChild(articleElement);
    });
}

function selectItem(item) {
    // Ajouter ou retirer l'article de la sélection
    if (!selectedItems.includes(item)) {
        selectedItems.push(item);
    } else {
        selectedItems = selectedItems.filter(i => i !== item);
    }
    updatePreview();
}

function updatePreview() {
    // Mettre à jour l'aperçu des articles sélectionnés
    const preview = document.getElementById('preview');
    preview.innerHTML = selectedItems.length > 0 
        ? 'Articles sélectionnés : ' + selectedItems.join(', ')
        : 'Aucune pièce sélectionnée.';
}

function resetSelection() {
    selectedItems = [];
    updatePreview();
}

// Création des articles
function createArticle(title, imagePath, description) {
    const articleDiv = document.createElement('div');
    articleDiv.classList.add('article-frame');
    
    const titleElement = document.createElement('h2');
    titleElement.textContent = title;
    
    const imgElement = document.createElement('img');
    imgElement.src = imagePath;
    imgElement.alt = title;
    
    const descElement = document.createElement('p');
    descElement.textContent = description;
    
    articleDiv.appendChild(titleElement);
    articleDiv.appendChild(imgElement);
    articleDiv.appendChild(descElement);
    
    return articleDiv;
}

function displayArticles(mood) {
    // Effacer les articles précédents
    articlesContainer.innerHTML = '';


    // Afficher les articles sous forme de cartes
    articles.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.classList.add('clothing-item');
        articleElement.innerHTML = `
            <img src="${article.image}" alt="${article.name}" class="clothing-image">
            <p>${article.name}</p>
            <p>Prix: ${article.price.toFixed(2)} €</p>
            <button class="fun-button" onclick="selectItem('${article.name}')">Ajouter</button>
        `;
        articlesContainer.appendChild(articleElement);
    });
    
    // Articles sélectionnés pour la tenue
    if (selectedItems.length > 0) {
        suggestionBox.innerHTML += `<h3>Articles dans votre tenue :</h3>`;
        selectedItems.forEach(item => {
            suggestionBox.innerHTML += `<p>${item}</p>`;
        });
    }
    
}
