import { useLocation } from "./LocationDataProvider.js"
import { Location } from "./Location.js"

export const LocationList = () => {

  const contentElement = document.querySelector("#containerLeft__travelLocations")
  const locations = useLocation()

  contentElement.innerHTML += `
      <article class="contentArticle__locations">
        ${locations.map(location => Location(location)).join("")}
      </article>
    `
}