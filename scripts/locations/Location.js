export const Location = (location) => {
  return `
      <section class="locationCard">
          <div class="location__city">City: ${location.city}</div>
          <div class="location__country">Country: ${location.country}</div>
          <div class="location__bodyWater">Body of Water: ${location.bodyWater}</div>
          <div class="location__landmark">Landmark: ${location.landmark}</div>
          <div><img class="location__image image--card" src="${location.image}" /></div>
      </section>
  `
}