for (let i = 0; i < 7; i++) {
  console.log(i);
}

const names = [`Mario`, `Nicola`, `Marci`, `Flavio`, `Gabriel`];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

for (let i = names.length; i >= 0; i--) {
  console.log(names[i]);
}

for (let i = names.length; i >= 0; i--) {
  console.log(names[i]);
}

for(const name of names){
    console.log(names);
}

const user = {
    name: `Mario`,
    surname: `Red`,
    age: 25,
    active: true,
    address:{
        street:`Via Roma`,
        number: 20,
        city: `Roma`,
    }
};

for (const key in user) {
    if (key === "address") {
        for (const subKey in user.address) {
            console.log(`${subKey} = ${user.address[subKey]}`);
        }
    } else {
        console.log(`${key} = ${user[key]}`);
    }
}

console.log('----DO/WHILE----');
let x = 11;
do {
    console.log(x);
    x++;
} while (x <= 10);

let name = ["Marco", "Giulia", "Maria", "Sara"];
let i = 0;
while (i < names.length && names[i] !== 'Maria') {
    console.log(names[i]);
    i++;
}

const numbers = [1, 26, 24, 32, 8, 48];

for (const number of numbers) {
    if (number > 30) {
        console.log(`Trovato ${number}`);
        break;
    }
    console.log(number);
}

for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) continue;
    console.log(i);
}

for (let i = 0; i < names.length; i++) {
    if (!names[i].startsWith('A')) continue;
    console.log(names[i]);
}