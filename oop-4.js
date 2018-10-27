const x = {
    name: 'Kamil',
    fn: function(){
        console.log(this, this.name);
    }
}

const y = {
    name: 'Tomek',
   /* fn: function(){
        console.log(this, this.name);
    }*/
}

x.fn();
x.fn.call(y);
// y.fn();

