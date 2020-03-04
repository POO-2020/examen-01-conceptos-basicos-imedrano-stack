import Huesped from "./huesped.js";
import Reservacion from "./reservacion.js";
import Hotel from "./hotel.js"

class Main {
    constructor(){}

    //Test Huesped//
    getDescripcion(){
        let huesped1 = new Huesped("Juan Perez", "Masculino");
        let huesped2 = new Huesped("Maritza Rodriguez", "Femenino");

        console.log(huesped1.getDescripcion());
        console.log(huesped2.getDescripcion())
    }

    //Test Reservacion//
    getFechaFormatoCorto(){
        let reservacion2 = new Reservacion (20, new Date(2025, 5, 11), 5);
        console.log(reservacion2.getFechaFormatoCorto());

        let h1 = new Huesped ("Maria Rosales", "Femenino");
        let h2 = new Huesped ("Pedro Infante", "Masculino");

        this.hotel.addHuesped(h1);
        this.hotel.addHuesped(h2);
        this.hotel.getNumHuespedes();
    }



let app = new Main();

app.getDescripcion();
app.getFechaFormatoCorto();
app.addHuesped();