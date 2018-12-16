// const add = function(a , b) {
//     return a+b;
// }
// console.log(add(55,1))

const user = {
    name : 'Divya',
    cities : ['Dallas', 'Detroit', 'Kent'],
    printPlacesLivedIn : function(){
        console.log(this.name);
        console.log(this.cities);
    }
};
user.printPlacesLivedIn();

const multiplier = {
    numbers : [1,2,3,4,5,6],
    multiplyBy : 8,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};
console.log(multiplier.multiply());