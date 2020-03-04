import Huesped from "./huesped.js";

export default class Reservacion {
    /**
     * 
     * @param {number} numeroHabitacion El número que identifica a la habiltación
     * @param {number} dia Valor 1 .. 31
     * @param {number} mes Valor 1 .. 12
     * @param {number} año Año de la fecha de reservacion
     * @param {number} noches Número de noches reservadas
     * @param {Huesped} huespedes Las personas que estarán hospedadas en esta habitación
     */

    constructor(numeroHabitacion, dia, mes, año, noches, huespedes){
        this.numeroHabitacion = numeroHabitacion;
        this.fechaLlegada = fechaLlegada;
        this.noches = noches;
        this.huespedes = new Array ();
    }

    getFechaFormatoCorto(){
        return `${this.fechaLlegada.getDate()}`+"/"+`${this.fechaLlegada.getMonth()+1}`+"/"+`${this.fechaLlegada.getFullYear()}`;
    }

    addHuesped(huesped){
        this.huespedes.push(huesped);
    }

    getNumHuespedes(){
        this.huespedes.forEach((huesped, i)  =>{
            console.log(`${i} ${huesped.getDescripcion()}`);
        });
    }

    numerarHuespedes() {
        this.huespedes.forEach((huesped, i) => {
            console.log(`${i} ${huesped.getDescripcion()}`);
        });
    }

    print(){
        console.log(`Habitacion: ${this.numeroHabitacion}`);
        console.log(`Fecha de llegada: ${this.getFechaFormatoCorto()}`);
        console.log(`${this.noches} noches reservadas`);
        console.log(`${this.huespedes}`);
    }
}

/**
let reservacion2 = new Reservacion (123, 20, 1, 2021, 5, new Huesped ("Juan Perez", "Masculino"))

console.log(reservacion2.getFechaFormatoCorto());
console.log(reservacion2.getNumHuespedes());
console.log(reservacion2.print());
 */

