const countryList = document.querySelector('.country-list');
const darkMode = document.querySelector('.switcher-btn');
const body = document.querySelector('body');

fetch('https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags')
    .then(res => res.json())
    .then(data => {
        data.forEach((country) => {
            // console.log(country.population);
            const countryCard = document.createElement('a');
            countryCard.href = `./country.html?name=${encodeURIComponent(country.name.common)}`
            countryCard.classList.add('card');
            countryCard.innerHTML = `<img src="${country.flags.svg}" alt="${country.name.common}">
                                    <div class="card-text">
                                        <h3 class="card-title">${country.name.common}</h3>
                                        <p><b>Population: </b>${country.population.toLocaleString()}</p>
                                        <p><b>Region: </b>${country.region}</p>
                                        <p><b>Capital: </b>${country.capital}</p>
                                    </div>`
            countryList.append(countryCard);
            countryCard.style.cursor = 'pointer';
        });
    })


    darkMode.addEventListener('click', () => {
        body.classList.add('dark-mode');
    })

