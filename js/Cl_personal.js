export default class Cl_personal {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
    set nombre(nombre){
      this._nombre = nombre;
    }
    get nombre(){
    return this._nombre;
    }
    
    
    set edad(edad) {
      this._edad = edad;
    }
    get edad() {
      return this._edad;
    }
    esMayorDeEdad() {
      return this.edad >= 18;
    }
    sueldoBase() {
      return 150;
    }
  }