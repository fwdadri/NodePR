class auto{

    constructor(marca, modelo, anoe){
        this.marca=marca;//como definir variables
        this.modelo=modelo;
        this.anoe=anoe;
    }

    mostrarAuto(){
        return `este vehiculo es ${this.marca} ${this.modelo}`//con dole comilla alrevez ctrl+alt+``
    }

} 

const miAuto1= new auto('toyota','corolla',2024);
const miAuto2= new auto('hiunday','elentra',2024);

console.log(miAuto1.mostrarAuto())

