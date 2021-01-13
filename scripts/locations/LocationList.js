import { useLocation } from "./LocationDataProvider.js"
import { Location } from "./Location.js"

export const LocationList = () => {

  const contentElement = document.querySelector("#containerLeft__travelLocations")
  const locations = useLocation()

  let locationHTMLRepresentations = ""
  for (const location of locations) {
    locationHTMLRepresentations += Location(location)
  }

  contentElement.innerHTML += `
      <article class="contentArticle__locations">
        ${locationHTMLRepresentations}
      </article>
    `
}