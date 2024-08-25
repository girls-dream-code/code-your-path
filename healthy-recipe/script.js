document.getElementById('searchButton').addEventListener('click', function() {
    const ingredient = document.getElementById('ingredientInput').value;
    if (ingredient) {
        fetchRecipes(ingredient);
    }
});

function fetchRecipes(ingredient) {
    const apiKey = 'db096bd95c54e640728f1a5fbb0632b2';
    const appId = 'a5388ad5';
    const apiUrl = `https://api.edamam.com/search?q=${ingredient}&app_id=${appId}&app_key=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayRecipes(data.hits))
        .catch(error => console.error('Error fetching recipes:', error));
}

function displayRecipes(recipes) {
    const recipesContainer = document.getElementById('recipesContainer');
    recipesContainer.innerHTML = '';

    recipes.forEach(recipeData => {
        const recipe = recipeData.recipe;
        const recipeElement = document.createElement('div');
        recipeElement.classList.add('recipe');

        const recipeTitle = document.createElement('h2');
        recipeTitle.textContent = recipe.label;

        const recipeIngredients = document.createElement('p');
        recipeIngredients.textContent = `Ingredients: ${recipe.ingredientLines.join(', ')}`;

        recipeElement.appendChild(recipeTitle);
        recipeElement.appendChild(recipeIngredients);
        recipesContainer.appendChild(recipeElement);
    });
}
