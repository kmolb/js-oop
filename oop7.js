/* function animal(name, age)  {  // factory function do stworzenia opektu//
    return{
    name: name,
    age: age,
    print: function(param1, param2){
        console.log(this.name, this.age, param1, param2)
    }
}}
*/
const animal = {
    name: function () {
        console.log('animal')
    },
    food: "meat",
    color: 'black',
       }

const mammal = Object.create(animal);

mammal.color = 'grey';
mammal.food = "grass";
mammal.eats = function() {
    console.log(this.food);
}

const delfin = Object.create(mammal)
delfin.food="fish";
console.log(delfin.eats());