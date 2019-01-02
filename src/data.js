const createTemplateChampeonsFive = (array) => {
  // console.log('Esto es' + array);
  
  let newChampionArray = Object.values(array);
  const champions = newChampionArray.reduce(function(result, champion) {
    if (champion.top === 'top5') {
      result.push(champion);
    }
    return result;
  }, []);
  return champions;
};


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
  });
  return rolesOfChampeons;*/
};

window.lol = {
  getFiveChampeons: createTemplateChampeonsFive,
  getRoles: createCardsRoles,
};
>>>>>>> edb8af8e380eec0b658b9c0bc9462b8d4c308ac3
