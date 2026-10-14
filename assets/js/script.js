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