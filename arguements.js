function add(num1,num2){
    console.log([...arguments]);
    return num1 + num2+arguments[4];
}

const result = add(4,42,3,55,34);
console.log(result);