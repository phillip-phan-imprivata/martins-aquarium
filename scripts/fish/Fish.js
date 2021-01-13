export const Fish = (fish) => {
  return `
      <section class="fishCard">
          <div><img  class="fish__image image--card" src="${fish.image}" /></div>
          <div class="fish__name">Name: <b>${fish.name}</b></div>
          <div class="fish__species">Species: ${fish.species}</div>
          <div class="fish__length">Length: ${fish.length}</div>
          <div class="fish__location">Location: ${fish.location}</div>
          <div class="fish__diet">Food: ${fish.food}</div>
      </section>
  `
}