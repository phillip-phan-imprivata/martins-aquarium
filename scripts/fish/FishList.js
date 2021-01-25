import { mostHolyFish, nonHolyFish, soldierFish } from "./FishDataProvider.js"
import { Fish } from "./Fish.js"

export const FishList = () => {

    const contentElement = document.querySelector("#containerLeft__fishList")
    const holyFishArr = mostHolyFish()
    const soldierFishArr = soldierFish()
    const nonHolyFishArr = nonHolyFish()

    // Add a section, and all of the fish to the DOM
    contentElement.innerHTML += `
        <article class="contentArticle__fish">
            ${holyFishArr.map(fish => Fish(fish)).join("")}
            ${soldierFishArr.map(fish => Fish(fish)).join("")}
            ${nonHolyFishArr.map(fish => Fish(fish)).join("")}
        </article>
    `
}