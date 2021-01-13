const fishCollection = [
  {
      image: "https://lh3.googleusercontent.com/proxy/PL0_p_rcKg7aQRJ0Fjb5iekV8q-tvvYdPwgIfaESeIk4zhl6aHZs0efpJXHCl9JDtlHwkF0arLbcXFRlLrAUMPDz2rELTRHkZoCtwiMK0GNq2LAsagqdeIGX",
      name: "Nemo",
      species: "Amphiprioninae",
      length: "Few Inches",
      location: "Australia",
      food: "Algae",
  }, 
  {
      image: "../../images/don_lino.jpg",
      name: "Don Lino",
      species: "Carcharodon carcharias",
      length: "13ft",
      location: "Sea of Marmara",
      food: "Seals and Otters",
  },
  {
    image: "../../images/patrick_star.png",
    name: "Patrick",
    species: "Asteroidea",
    length: "5 to 10 inches",
    location: "All oceans of the world",
    food: "Clams and Oysters",
  }
]

export const mostHolyFish = (fishes) => {
  // 3, 6, 9, 12, etc... fish
  const holyFish = []

  for (const fish of fishes) {
    if (fish % 3 === 0) {
      holyFish.push(fish)
    }
  }

  return holyFish
}

export const soldierFish = (fishes) => {
  // 5, 10, 15, 20, 25, etc... fish
  const soldiers = []

  for (const fish of fishes) {
    if (fish % 5 === 0) {
      soldiers.push(fish)
    }
  }
  return soldiers
}

export const nonHolyFish = (fishes) => {
  // Any fish not a multiple of 3 or 5
  const regularFish = []

  for (const fish of fishes) {
    if (fish % 3 != 0 && fish % 5 != 0) {
      regularFish.push(fish)
    }
  }
  return regularFish
}

export const useFish = () => {
  return fishCollection.slice()
}