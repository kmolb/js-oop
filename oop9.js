
function cat(name, sound,makeSound)
{
    this.name = name,
    this.sound = sound,
    this.makeSound = console.log("miaauuu")
};


cat.prototype.listen = function(){
    console.log(this.sound);
}
const newCat = new Cat ('John', 'wrr', makeSound);
console.log(newCat);

