class animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.paws = 4; 
    }

    sound(){
        console.log(`animal. sound by. ${this.name}`);
        return 0;
    }
}

const obj1 = new animal ("perrito", 10);
obj1.sound()
console.log(obj1.paws);

class dog extends animal {

}
const perrito = new dog("PerridoOtro", 20);
console.dir(perrito)
perrito.sound();

const {nameDog, nameAge} = perrito;
console.log(nameDog, nameAge);

const miObjeto = {
    "attr1" : 1,
    "attr2" : "spring"
}


const perrito2 = {...perrito}; 
objeto2.attr3 = "unNuevo atributo"
console.log(objeto3)
console.log(perrito)

const objetoDeep = JSON.parse(JSON.stringify(miObjeto))
