import { getWalkers } from "./database.js"
import { filterWalkerCities } from "./CityList.js"
import { matchingCities } from "./CityList.js"
import { getWalkerCities } from "./database.js"
const walkers = getWalkers()
const walkerCities = getWalkerCities()
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("walker")) {
            const [,walkerId] = itemClicked.id.split("--")

            for (const walker of walkers) {
                if (walker.id === parseInt(walkerId)) {
                    const assignments = filterWalkerCities()
                    const cities = matchingCities()
                    window.alert(`${walker.name} services ${cities}`)
                }
            }
        }
    }
)

export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }

    return walkerHTML += "</ul>"

}

