const obj = {
    name: 'Name obj',
    fn: () => {

        console.log(this);
        const obj2 = {
            name: 'Name obj2',
            fn2 = function(){
                console.log(this)
            }
        }
        obj2.fn2()
    }
}

obj.fn()