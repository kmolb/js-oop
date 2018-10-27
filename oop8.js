// object assine
const TV = {
    brand: 'Sony',
    tech: 'LED',

}

const Radio = {
    brand: 'LG',
    tech: "FM",
}

const Laptop ={
    brand: 'Acer',
    tech: 'Gaming',
}
const result = Object.assign(TV, Radio, Laptop);



console.log(result);