//console.table(LOL);
//var propiedad = LOL.hasOwnProperty("data")
//console.log(propiedad);

const objLOL = LOL.data;
const arrLLavesLol = Object.keys(LOL.data);

console.log(objLOL[arrLLavesLol[0]])

for(let i = 0; i < 4; i++){
  objLOL[arrLLavesLol[i]]
  console.log(objLOL[arrLLavesLol[i]])

}
