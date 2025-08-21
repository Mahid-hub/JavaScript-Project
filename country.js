const countryName = new URLSearchParams(location.search).get('name');
const countryDetails = document.querySelector('.country-details');
const darkMode = document.querySelector('.switcher-btn');
const body = document.querySelector('body');

if (countryName) {
    fetch(`https://restcountries.com/v3.1/name/${encodeURIComponent(countryName)}?fullText=true`)
        .then(res => res.json())
        .then((data) => {
            //  console.log(data)
            data.forEach((country) => {
                const countrySelected = document.createElement('div');
                countrySelected.classList.add('country-details');
                countrySelected.innerHTML = `
                <img class="country-img" src="${country.flags.svg}" alt="flag">
                    <div class="country-text-container">
                    <h1>${country.name.common}</h1>
                        <div class="country-text">
                            <p><b>Native Name: </b>${Object.values(country.name.nativeName)[0].common}</p>
                            <p><b>Population: </b>${country.population.toLocaleString()}</p>
                            <p><b>Region: </b>${country.region}</p>
                            <p><b>Sub Region: </b>${country.subregion}</p>
                            <p><b>Capital: </b>${country.capital}</p>
                            <p><b>Top Level Domain: </b>${country.tld.join(', ')}</p>
                            <p><b>Currencies: </b>${Object.values(country.currencies).map(c => c.name).join(', ')}</p>
                            <p><b>Languages: </b>${Object.values(country.languages)}</p>
                        </div>
                    </div>`
                countryDetails.append(countrySelected);

            });
        })
        .catch(err => console.error(err));

} else {
    console.error("No country name found in the URL");
}


// <div class="border-country">
//     <p><b>Border Countries: </b><a href="">France</a> &nbsp; <a href="">Germany</a></p>
// </div>

darkMode.addEventListener('click', () => {
        body.classList.toggle('dark-mode')
    })

