/** Gabriela Céspedes */
/**
 * crea una clase ninja
 * agrega un atributo: nombre 
 * agrega un atributo: salud
 * agrega un atributo: velocidad- da un valor predeterminado de 3
 * agrega un atributo: fuerza - da un valor predeterminado de 3
 * agrega un metodo: sayName() - esto deberia registrar el nombre de ninja en la consola 
 * agrega un metodo: showStatus() - esto deberia mostrar el nombre de, la fuerza, la velocidad y la salud del ninja 
 * agrega un metodo:: drinkSake() - esto deberia agregar +10 de salud al ninja
 */

class Ninja {
    constructor(nombre, salud){
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;
    }

    sayName() {
        console.log(`Hola, mi nombre es ${this.nombre}`);
    }

    showStatus() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Fuerza: ${this.fuerza}`);
        console.log(`Velocidad: ${this.velocidad}`);
        console.log(`Salud: ${this.salud}`);
    }

    drinkSake() {
        this.salud += 10;
    }
}

//prueba 
const ninja1 = new Ninja("gaby", 5);
ninja1.sayName();
ninja1.showStatus();
ninja1.drinkSake();
console.log(ninja1);