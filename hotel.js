import Reservacion from "./reservacion.js";

export default class Hotel{
    /**
     * 
     * @param {String} nombre Nombre del hotel
     */

    constructor(nombre){
        this.nombre = nombre;
        this.reservaciones = new Array ();
    }

    getNumHuespedes(){
        let x=0;
        this.reservaciones.forEach((reservacion, i) =>{
            x = reservacion.getNumHuespedes() + x;
        })
    }

    print() {
        this.reservaciones.forEach((reservacion) => {
            console.log(reservacion.print());
            reservacion.listarHuespedes();
        });
    }
}

let hotel1 = new Hotel ("Concierge", new Reservacion ())