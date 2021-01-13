export const Quote = (quote) => {
  return `
      <section class="quoteCard">
          <div class="quote__quote"><i>"${quote.quote}"</i></div>
          <div class="quote__author">- <b>${quote.author}</b></div><br>
          <div class="quote__date">${quote.date}</div><br>
          <div class="quote__location">${quote.location}</div>
      </section>
  `
}