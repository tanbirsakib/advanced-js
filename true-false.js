//const age = 3; true
//const age = 0; false
//const name ="banku"; true
//const name =""; false
//const name =" ";
//const name ="0"; true "0" is a String
//let name; false-undefined value.
//let name = null; null value will be false.
//let name = NaN; NaN-not a number is fall
//const name=[]; empty array is true.
const name = {}; //empty object is also true
if(name){
    console.log("the condition is true");

}
else{
    console.log("the condiotion is false");
}