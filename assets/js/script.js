const starWarsCharacters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male",
  },
  {
    name: "C-3PO",
    height: "167",
    mass: "750",
    hair_color: "n/a",
    skin_color: "gold",
    eye_color: "yellow",
    birth_year: "112BBY",
    gender: "n/a",
  },
  {
    name: "R2-D2",
    height: "96",
    mass: "32",
    hair_color: "n/a",
    skin_color: "white, blue",
    eye_color: "red",
    birth_year: "33BBY",
    gender: "n/a",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    hair_color: "none",
    skin_color: "white",
    eye_color: "yellow",
    birth_year: "41.9BBY",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    hair_color: "brown",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "19BBY",
    gender: "female",
  },
  {
    name: "Owen Lars",
    height: "178",
    mass: "120",
    hair_color: "brown, grey",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "52BBY",
    gender: "male",
  },
  {
    name: "Beru Lars",
    height: "165",
    mass: "75",
    hair_color: "brown",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "47BBY",
    gender: "female",
  },
  {
    name: "R5-D4",
    height: "97",
    mass: "32",
    hair_color: "n/a",
    skin_color: "white, red",
    eye_color: "red",
    birth_year: "unknown",
    gender: "n/a",
  },
  {
    name: "Biggs Darklighter",
    height: "183",
    mass: "84",
    hair_color: "black",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "24BBY",
    gender: "male",
  },
  {
    name: "Obi-Wan Kenobi",
    height: "182",
    mass: "77",
    hair_color: "auburn, white",
    skin_color: "fair",
    eye_color: "blue-gray",
    birth_year: "57BBY",
    gender: "male",
  },
];

/* ESERCIZIO 1 — Estrai i nomi */

const nomi = [];
for (let i = 0; i < starWarsCharacters.length; i++) {
  nomi.push(starWarsCharacters[i].name);
}
console.log(nomi);

/* ESERCIZIO 2 — Solo i femminili */

const personaggiFemminili = [];
for (let i = 0; i < starWarsCharacters.length; i++) {
  const c = starWarsCharacters[i];
  if (c.gender === "female") {
    personaggiFemminili.push({
      name: c.name,
      hair_color: c.hair_color,
      eye_color: c.eye_color,
    });
  }
}
console.log(personaggiFemminili);

/* ESERCIZIO 3 — Oggetto raggruppamento */

const perColoreOcchi = {
  blue: [],
  yellow: [],
  brown: [],
  red: [],
};
perColoreOcchi["blue-gray"] = [];
console.log(perColoreOcchi);

/* ESERCIZIO 4 — Raggruppa per colore degli occhi */

for (let i = 0; i < starWarsCharacters.length; i++) {
  const c = starWarsCharacters[i];
  switch (c.eye_color) {
    case "blue":
      perColoreOcchi.blue.push(c);
      break;
    case "yellow":
      perColoreOcchi.yellow.push(c);
      break;
    case "brown":
      perColoreOcchi.brown.push(c);
      break;
    case "red":
      perColoreOcchi.red.push(c);
      break;
    case "blue-gray":
      perColoreOcchi["blue-gray"].push(c);
      break;
  }
}
console.log(perColoreOcchi);

/* ESERCIZIO 5 — Massa totale dell'equipaggio (while) */

let i5 = 0;
let massaTotale = 0;
while (i5 < starWarsCharacters.length) {
  massaTotale += Number(starWarsCharacters[i5].mass);
  i5++;
}
console.log(`Massa totale: ${massaTotale} kg`);

/* ESERCIZIO 6 — Classifica il carico */

switch (true) {
  case massaTotale < 500:
    console.log("Carico leggero");
    break;
  case massaTotale >= 500 && massaTotale < 700:
    console.log("Carico medio");
    break;
  case massaTotale >= 700 && massaTotale < 900:
    console.log("Attenzione: oltre 700");
    break;
  case massaTotale >= 900 && massaTotale < 1000:
    console.log("Carico critico");
    break;
  case massaTotale >= 1000:
    console.log("PERICOLO: sovraccarico");
    break;
}

/* ESERCIZIO 7 — Robotizza i n/a */

for (let i = 0; i < starWarsCharacters.length; i++) {
  if (starWarsCharacters[i].gender === "n/a") {
    starWarsCharacters[i].gender = "robot";
  }
}
console.log(starWarsCharacters);

/* ESERCIZIO 8 — Più alto e più basso */

let piuAlto = starWarsCharacters[0];
let piuBasso = starWarsCharacters[0];
for (let i = 1; i < starWarsCharacters.length; i++) {
  const c = starWarsCharacters[i];
  if (Number(c.height) > Number(piuAlto.height)) piuAlto = c;
  if (Number(c.height) < Number(piuBasso.height)) piuBasso = c;
}
console.log(`Più alto: ${piuAlto.name} (${piuAlto.height} cm)`);
console.log(`Più basso: ${piuBasso.name} (${piuBasso.height} cm)`);

/* ESERCIZIO 9 — Rimuovi i femminili dai nomi (cicli annidati) */

console.log(`nomi prima: ${nomi.length}`);
for (let i = 0; i < nomi.length; i++) {
  for (let j = 0; j < personaggiFemminili.length; j++) {
    if (nomi[i] === personaggiFemminili[j].name) {
      nomi.splice(i, 1);
      i--; // splice riduce la lunghezza: torno indietro per non saltare un elemento
      break;
    }
  }
}
console.log(`nomi dopo: ${nomi.length}`);
console.log(nomi);

/* ESERCIZIO 10 — Personaggio casuale */

const indice = Math.floor(Math.random() * starWarsCharacters.length);
const scelto = starWarsCharacters[indice];
console.log(`Personaggio scelto: ${scelto.name}`);

if (scelto.gender === "female") {
  console.log(`Lei è alta ${scelto.height} cm`);
} else {
  console.log(`Lui è alto ${scelto.height} cm`);
}

if (scelto.hair_color !== "n/a" && scelto.hair_color !== "none") {
  console.log(`Capelli: ${scelto.hair_color}`);
} else {
  console.log("Senza capelli");
}

/* --EXTRA-- ESERCIZIO 11 — Conta per colore di occhi */

for (const colore in perColoreOcchi) {
  console.log(`${colore}: ${perColoreOcchi[colore].length} personaggi`);
}
