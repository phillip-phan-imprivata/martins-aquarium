import { mostHolyFish, nonHolyFish, soldierFish } from "./FishDataProvider.js"
import { Fish } from "./Fish.js"

export const FishList = () => {

    const contentElement = document.querySelector("#containerLeft__fishList")
    const holyFishArr = mostHolyFish()
    const soldierFishArr = soldierFish()
    const nonHolyFishArr = nonHolyFish()

    let holyFishHTMLRepresentations = "<h3>Holy Fish</h3>"
    for (const fish of holyFishArr) {
       holyFishHTMLRepresentations += Fish(fish)
    }

    let soldierFishHTMLRepresentations = "<h3>Soldier Fish</h3>"
    for (const fish of soldierFishArr) {
       soldierFishHTMLRepresentations += Fish(fish)
    }

    let nonHolyFishHTMLRepresentations = "<h3>Non-Holy Fish</h3>"
    for (const fish of nonHolyFishArr) {
       nonHolyFishHTMLRepresentations += Fish(fish)
    }

    // Add a section, and all of the fish to the DOM
    contentElement.innerHTML += `
        <article class="contentArticle__fish">
            ${holyFishHTMLRepresentations}
            ${soldierFishHTMLRepresentations}
            ${nonHolyFishHTMLRepresentations}
        </article>
    `
}