function person(name, age)  {
    return{
    name: name,
    age: age,
    print: function(param1, param2){
        console.log(this.name, this.age, param1, param2)
    }
}}

const persone1 = person("kamil", 31);
const persone2 = person("tomek", 25);
/*
persone1.print(); // wywołanie funkcji 
*/
persone1.print.call(persone2, 'param1', 'param2');

persone1.print.call(persone2, ['param1', 'param2']);

