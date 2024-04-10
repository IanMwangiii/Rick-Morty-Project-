async function fetchCharacters() {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        const characters = data.results;

        const characterCardsContainer = document.getElementById('character-cards');

        characters.forEach(character => {
            const characterCard = document.createElement('div');
            characterCard.classList.add('character-card');

            const img = document.createElement('img');
            img.src = character.image;
            img.alt = character.name;

            const name = document.createElement('p');
            name.textContent = character.name;

            const status = document.createElement('p');
            status.textContent = `Status: ${character.status}`;

            const species = document.createElement('p');
            species.textContent = `Species: ${character.species}`;

            characterCard.appendChild(img);
            characterCard.appendChild(name);
            characterCard.appendChild(status);
            characterCard.appendChild(species);

            characterCardsContainer.appendChild(characterCard);
        });
    } catch (error) {
        console.error('Error fetching characters:', error);
    }
}

fetchCharacters();
