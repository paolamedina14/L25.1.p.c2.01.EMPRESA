import Cl_personal from "./Cl_personal.js";

export default class Cl_administrativo extends Cl_personal {
  constructor(nombre, edad, nivel) {
    super(nombre, edad);
    this.nivel = nivel;
  }
  incentivo() {
    if (this.esMayorDeEdad())
       if (this.nivel > 1) return 100;
        else return 50;
      else return 0;
}
  sueldo() {
    return this.sueldoBase() + this.incentivo();
  }
   
  mostrar(){
    return `<tr>
    <td>${this.nombre}</td>
    <td> 2 <td>
    <td>${this.edad}</td>
    <td>n/a</td>
    <td>${this.nivel}</td>
    <td>${this.esMayorDeEdad() ? "Si" : "No"}</td>
    <td>n/a<t/d>
    <td>${this.incentivo()}</td>
    <td>${this.sueldo()}</td>
    </tr>`
  }










}