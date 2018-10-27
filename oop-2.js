/*function x(){
    console.log(this);

}*/

const x = () => {
    console.log(this);
}
const obj = {
    name: "siema",
    fn: x, //metoda fn
    
}
x(); //wskazuje na okno(nadrzedne miejsce)
obj.fn(); // wskazuje na obiekt

//w momencie deklaracji odtrzymujesz kontekst wywołania this
// 