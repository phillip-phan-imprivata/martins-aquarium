import {useQuote } from "./QuoteDataProvider.js"
import { Quote } from "./Quote.js"

export const QuoteList = () => {

  const contentElement = document.querySelector("#containerLeft__travelQuotes")
  const quotes = useQuote()

  let quoteHTMLRepresentations = ""
  for (const quote of quotes) {
    quoteHTMLRepresentations += Quote(quote)
  }

  contentElement.innerHTML += `
      <article class="contentArticle__quotes">
        ${quoteHTMLRepresentations}
      </article>
    `
}