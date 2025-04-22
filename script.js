// fonction asynchrone pour recuperer les pays
async function fetchCountries() {
    try {
        // obtention de la liste des pays
        const response = await fetch(`https://restcountries.com/v3.1/all`);
        let countries = await response.json();

        // selection de 20 pays 
        let countriesSelected = countries.slice(12, 32);

        // conteneur pour l'affichage des pays
        let countriesContainer = document.getElementById(`countries`);

    
        countriesSelected.forEach(function (country) {
            // verification de l'existance d'une devise et l'extraire
            let currency = country.currencies ? Object.values(country.currencies)[0].name : `N/A`;

            // affichage des details de chaque pays
            let countryCard = `
            <div class="country-card">
            <img class="country-flag" src="${country.flags.svg}" alt="country.name.common" flag >
            <div class="country-name">${country.name.common}</div>
            <div class="country-info">Capital: ${country.capital ? country.capital[0] : `N/A`}</div>
            <div class="country-info">Devise: ${currency}</div>
            </div>`

            // j'ajoute les details de chaque pays au conteneur
            countriesContainer.innerHTML += countryCard;

        });
    } catch (error) {
        // message d'erreur 
        console.error(`Erreur lors du chargement`, error);
    }
}
// j'appelle ma fonction
fetchCountries();