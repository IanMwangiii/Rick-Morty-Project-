
        async function fetchCharacters() {
            try {
                const response = await fetch('https://rickandmortyapi.com/api/character');
                const data = await response.json();
                const characters = data.results;

                const characterCardsContainer = document.getElementById('character-cards');

                characters.forEach(character => {
                    createCharacterCard(character, characterCardsContainer);
                });
            } catch (error) {
                console.error('Error fetching characters:', error);
            }
        }

        function createCharacterCard(character, container) {
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
            

            characterCard.addEventListener('click', () => {
                displayCharacterInfo(character);
            });

            container.appendChild(characterCard);
        }

        function displayCharacterInfo(character) {
            alert(`Name: ${character.name}\nStatus: ${character.status}\nSpecies: ${character.species}`);
        }

        async function addCharacter(event) {
            event.preventDefault();
            const nameInput = document.getElementById('name');
            const statusInput = document.getElementById('status');
            const speciesInput = document.getElementById('species');
            const imageUrlInput = document.getElementById('image-url');

            const newCharacter = {
                name: nameInput.value,
                status: statusInput.value,
                species: speciesInput.value,
                image: imageUrlInput.value
            };

            createCharacterCard(newCharacter, document.getElementById('character-cards'));

            nameInput.value = '';
            statusInput.value = '';
            speciesInput.value = '';
            imageUrlInput.value = ''; // Clear the image URL input
        }

        fetchCharacters();

        document.getElementById('character-form').addEventListener('submit', addCharacter);
