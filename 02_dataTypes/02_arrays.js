const marvel_heros = ["THor","Ironman","Spiderman"];
const dc_heros = ["Spiderman","flash","batman"];

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

// const allheros = marvel_heros.concat(dc_heros);
// console.log(allheros)

// const all_new_heros = [...dc_heros,...marvel_heros]
// console.log(all_new_heros)

const complex_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const result = complex_array.flat(Infinity)
console.log(result)