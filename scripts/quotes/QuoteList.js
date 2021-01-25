import {useQuote } from "./QuoteDataProvider.js"
import { Quote } from "./Quote.js"

export const QuoteList = () => {

  const contentElement = document.querySelector("#containerLeft__travelQuotes")
  const quotes = useQuote()

  contentElement.innerHTML += `
      <article class="contentArticle__quotes">
        ${quotes.map(quote => Quote(quote)).join("")}
      </article>
    `
}