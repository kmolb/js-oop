const x = {
    name: 'Kamil',
    fn: function(lastname, age){
        console.log(this, this.name, lastname, age);
    }
}

const y = {
    name: 'Tomek',
 
}
/*
x.fn('koszykowski' , '25');
x.fn.call(y,'koszykowsi','25');          // do zmiany this
x.fn.apply(y,['koszykowski', '25'] );    // do zmiany this

*/
const fn =x.fn.bind(y, 'koszykowski' , '25')
fn();
console.log()
