const numbers = [2, 3, 4, 5, 6];
// const output = [];
// for(let i = 0;i<numbers.length;i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }

// console.log(output);
// const result = numbers.map(x => x*x);
// console.log(result);
// const bigger = numbers.filter(x => x < 5);
// console.log(bigger); its find the elements in array

const isThere = numbers.find(x => x>5);
console.log(isThere); //its find the only element