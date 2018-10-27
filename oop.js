function makeCar(color, type, age){
    return {
        color: color,
        type:type,
        age:age,
        start: function(){
            console.log('Jedziemy'+ " "+ type)
        },
        stop: function(){
            console.log('Stop')
        }
    }
}

const result = makeCar("red", "suv", 2008)

console.log(result.start()) //zwraca funckje start()