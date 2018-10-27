function person(name, age)  {
    return{
    name: name,
    age: age,
    print: function(){
        console.log(this.name, this.age)
    }
}}

const persone1 = person("kamil", 31);
const persone2 = person("tomek", 25);

persone1.print(); // wywołanie funkcji 

const result = persone2.print.call(persone2);
