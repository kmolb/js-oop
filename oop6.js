// PROPOTYPE  - tworznie obiektów i dziedziczenie 
// object.create - tworzenie obiektu
const base = {
    name: function () {
        console.log('cyk')
    },
    age: 22,
}

const newBase = Object.create(base);

newBase.age = 25;

 const newBase2 = Object.create(newBase);

 newBase2.age = 50;

console.log(newBase2);