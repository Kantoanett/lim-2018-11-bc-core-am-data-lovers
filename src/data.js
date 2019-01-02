const createTemplateChampeonsFive = (array) => {
  let newChampionArray = Object.values(array);
  const champions = newChampionArray.reduce(function(result, champion) {
    if (champion.top === 'top5') {
      result.push(champion);
    }
    return result;
  }, []);
  return champions;
};

let mapChampionsPerRole = [];
const createNumbersOfRoles = (array2, role) => {
  /* if (array2 === '') {
    console.log('esta en blanco el arreglo');
  }
  if (role === '') {
    console.log('Rol esta en blanco');
  } */
  let arrayOfRoles = Object.values(array2);
  arrayOfRoles.filter(function(val) {
    val.tags.map((currentRole) => {
      if (currentRole === role) {
        mapChampionsPerRole.push(val);
      }
    });
  }, []);
  return mapChampionsPerRole;
};

<<<<<<< HEAD
<<<<<<< HEAD
const newArray = Object.assign(entriesOfChampeons.map(currentChampeon => currentChampeon[1]).filter(currentChampeon => currentChampeon.top === 'top5'));
console.log(newArray);

// const newArray = Object.assign(entriesOfChampeons.map(currentChampeon => currentChampeon[1]).push(entriesOfChampeons.top = '').filter(currentChampeon => currentChampeon.top ==='top5'))
// console.log(newArray);


// añadir a la data una nueva propiedad a todos los campeones (top) object.push
// random object/array
// ya tenemos los campeones con el top 5
// esos campeones van a tener 2 propiuedad top5
=======
const createCardsRoles = (array2) => {
  let newRoleArray = Object.values(array2);
 /* const rolesOfChampeons = newRoleArray.reduce(function(result, role) {
    if (LOL.tag === 'tank') {
      let result = '';
      result += 1;
    }
=======
const order = (array) => {
  array.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    } 
    if (a.name < b.name) {
      return -1;
    } 
    return 0;
>>>>>>> fab76fb4c31bf2b0cc18e932ede530cb6da1fcc3
  });
};

window.lol = {
  getFiveChampeons: createTemplateChampeonsFive,
<<<<<<< HEAD
  getRoles: createCardsRoles,
};
>>>>>>> edb8af8e380eec0b658b9c0bc9462b8d4c308ac3
=======
  getRoles: createNumbersOfRoles,
  getOrderChampions: order
};
>>>>>>> fab76fb4c31bf2b0cc18e932ede530cb6da1fcc3
