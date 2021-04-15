const heroes = [
  {
    name: "Batman",
    publisher: "DC Comics",
    alter_ego: "Bruce Wayne",
    first_appearance: "Detective Comics #27",
    weight: "210"
  },
  {
    name: "Superman",
    publisher: "DC Comics",
    alter_ego: "Kal-El",
    first_appearance: "Action Comics #1",
    weight: "220"
  },
  {
    name: "Flash",
    publisher: "DC Comics",
    alter_ego: "Jay Garrick",
    first_appearance: "Flash Comics #1",
    weight: "195"
  },
  {
    name: "Green Lantern",
    publisher: "DC Comics",
    alter_ego: "Alan Scott",
    first_appearance: "All-American Comics #16",
    weight: "186"
  },
  {
    name: "Green Arrow",
    publisher: "DC Comics",
    alter_ego: "Oliver Queen",
    first_appearance: "All-American Comics #16",
    weight: "195"
  },
  {
    name: "Wonder Woman",
    publisher: "DC Comics",
    alter_ego: "Princess Diana",
    first_appearance: "The Incredible Hulk #180",
    weight: "165"
  },
  {
    name: "Blue Beetle",
    publisher: "DC Comics",
    alter_ego: "Dan Garret",
    first_appearance: "Mystery Men Comics #1",
    weight: "145"
  },
  {
    name: "Spider Man",
    publisher: "Marvel Comics",
    alter_ego: "Peter Parker",
    first_appearance: "Amazing Fantasy #15",
    weight: "167"
  },
  {
    name: "Captain America",
    publisher: "Marvel Comics",
    alter_ego: "Steve Rogers",
    first_appearance: "Captain America Comics #1",
    weight: "220"
  },
  {
    name: "Iron Man",
    publisher: "Marvel Comics",
    alter_ego: "Tony Stark",
    first_appearance: "Tales of Suspense #39",
    weight: "250"
  },
  {
    name: "Thor",
    publisher: "Marvel Comics",
    alter_ego: "Thor Odinson",
    first_appearance: "Journey into Myster #83",
    weight: "200"
  },
  {
    name: "Hulk",
    publisher: "Marvel Comics",
    alter_ego: "Bruce Banner",
    first_appearance: "The Incredible Hulk #1",
    weight: "1400"
  },
  {
    name: "Wolverine",
    publisher: "Marvel Comics",
    alter_ego: "James Howlett",
    first_appearance: "The Incredible Hulk #180",
    weight: "200"
  },
  {
    name: "Daredevil",
    publisher: "Marvel Comics",
    alter_ego: "Matthew Michael Murdock",
    first_appearance: "Daredevil #1",
    weight: "200"
  },
  {
    name: "Silver Surfer",
    publisher: "Marvel Comics",
    alter_ego: "Norrin Radd",
    first_appearance: "The Fantastic Four #48",
    weight: "unknown"
  }
];

// 1. Array of all super hero names
const heroNames = heroes.map(hero => hero.name);

console.log(heroNames);


// 2. Array of all light weight super heroes < 190 pounds
const lightWeightHeroes = heroes.filter(hero => hero.weight < 190);

console.log(lightWeightHeroes.length);


// 3. Aarray of all names of super heroes with the weight 200 pounds
const heavyWeightHeroes = heroes.filter(hero => hero.weight == 200);
const heavyWeightSuperHeroNames = heavyWeightSuperHeroes.map(hero => hero.name);

console.log(heavyWeightSuperHeroNames);

// 3. Solutions from Winc: Chaining
const heavySuperHeroNamesChained = heroes
  .filter(hero => hero.weight == 200)
  .map(hero => hero.name);

console.log(heavySuperHeroNamesChained);


// 4. Array first apprearances
const firstAppearance = heroes.map(hero => hero.first_appearance);

console.log("firest appearance:", firstAppearance);


// 5. Array DC Comics and Marvel Comics
const DCComics = heroes.filter(hero => hero.publisher === "DC Comics");
const marvelComics = heroes.filter(hero => hero.publisher === "Marvel Comics");

console.log("DC Comics:", DCComics, "Marvel Comics:", marvelComics);


// 6. Total weight DC Comics heroes
const addedWeightDC = DCComics.map(hero => {
  return hero.weight !== "unknown" ? parseInt(hero.weight, 10) : 0;
}).reduce((weight1, weight2) => weight1 + weight2);

console.log("TotalWeight of DC Comics - supersmall version:", addedWeightDC);


// 7. Total weight Marvel heroes
const addedWeightMarvel = marvelComics
  .map(hero => {
    return hero.weight !== "unknown" ? parseInt(hero.weight, 10) : 0;
  })
  .reduce((weight1, weight2) => weight1 + weight2, 0);

console.log("TotalWeight of Marvel:", addedWeightMarvel);


// 8. Heaviest super hero
const allHeroes = heroes.map(hero => {
  const weight = hero.weight !== "unknown" ? parseInt(hero.weight) : 0;
  hero.weight = weight;
  return hero;
});

const heaviestHero = allHeroes.reduce(
  (currentHeaviestHero, currentHero) => {
    if (currentHero.weight > currentHeaviestHero.weight) {
      return currentHero;
    } else {
      return currentHeaviestHero;
    }
  },
  allHeroes[0]
);

console.log("Heaviest her0000o:", heaviestHero);