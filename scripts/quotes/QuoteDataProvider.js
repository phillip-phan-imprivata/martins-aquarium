const quoteCollection = [
  {
    quote: "i love fish",
    author: "Martin",
    location: "Martin's Aquarium",
    date: "Everyday",
  },
  {
    quote: "fish are friends, not food",
    author: "Some Sharks",
    location: "South Pacific Ocean",
    date: "May 30, 2003",
  },
  {
    quote: "five star dishes, different exotic fishes",
    author: "Kanye West",
    location: "Hawaii",
    date: "November 22, 2010",
  },
]

export const useQuote = () => {
  return quoteCollection.slice()
}