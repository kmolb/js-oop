function x(){
    console.log(this);

}
const obj = {
    fn: x,  //metoda fn
    name: "siema",
}
x();  //wskazuje na okno(nadrzedne miejsce)
obj.fn();  // wskazuje na obiekt 