printErr=(errMsg)=>console.log(errMsg);
getAllCountries = async () => {
    //gitting 250 countries
    return fetch("https://restcountries.eu/rest/v2/all?fields=name")
        .then(res => res.json())
        .then(countries => countries)
        .catch(printErr);
}
getCountry = async (rnd) => {
    try {
        let countries = await getAllCountries()
        let country = countries[rnd];
        console.log(country);
        return country;
    }
    catch (err) {
        printErr(err)
    }
}
getAllBorders = async (country) => {
    //getting the borders of the randed country
    return fetch(`https://restcountries.eu/rest/v2/name/${country.name}?fields=borders`)
        .then(res => res.json())
        .then(borders => borders[0].borders)
        .catch(printErr);
}

showAllFlags = async (borders) => {
    try{
    for (let i = 0; i < borders.length; i++)
        await showFlag(borders[i]);
    }
    catch(err){
        printErr(err);
    }
}
showFlag = async (border) => {
    //getting the flags of this border
    fetch(`https://restcountries.eu/rest/v2/name/${border}?fields=flag`)
        .then(res => res.json())
        .then(flags => {
            for (let i = 0; i < flags.length; i++) {
                document.getElementById("result").innerHTML +=
                    `<img src="${flags[i].flag}"/>`
            }
        })
        .catch(printErr);
}
onload = async () => {
    document.getElementById("result").innerHTML +="<p>start</p>";
    let rnd = Math.floor(Math.random() * 250);
    let country = await getCountry(rnd);
    let borders = await getAllBorders(country);
    await showAllFlags(borders);
}