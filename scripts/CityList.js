import { getWalkers } from "./database.js"
import { getCities } from "./database.js"
import { getWalkerCities } from "./database.js"
const cities = getCities()
const walkers = getWalkers()
const walkerCities = getWalkerCities()
// Define function called filterWalkerCities
// Define empty array walkerIdMatch
// Iterate walkerCities
// Nested for of loop walkers
// Create if statement to see if walker.id === walkerCities.walkerId
// Push walker into walkerIdMatch
// Return walkerIdMatch

export const filterWalkerCities = () => {
    const walkerIdMatch = []
        for (const city of walkerCities) {
            for (const walker of walkers) {
                if (city.walkerId === walker.id) {
                    walkerIdMatch.push(city)
            }
        }
    }
    return walkerIdMatch
}


const filteredWalkerCities = filterWalkerCities()
console.log(filteredWalkerCities)

// Define function matchingCities with parameter filteredWalkerCities
// Define empty string cityMatches
// Iterate city of filteredWalkerCities
// Nested for loop city of cities
// If statement city.cityId === city.Id
// Add city name to string city Matches
// Return cityMatches string

export const matchingCities = () => {
    let cityMatches = ""
        for (const filteredCity of filteredWalkerCities) {
            for (const city of cities)
            if (filteredCity.cityId === city.id) {
                cityMatches += `${city.name} `
            }
    }
    return cityMatches
}

const matchedCities = matchingCities(filteredWalkerCities)
console.log(matchedCities)

export const CityList = () => {
    let citiesHTML = "<ol>"

    for (const city of cities) {
        citiesHTML += `<li>${city.name}</li>`
    }

    citiesHTML += "</ol>"

    return citiesHTML
}

