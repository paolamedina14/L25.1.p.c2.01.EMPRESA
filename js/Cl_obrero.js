import Cl_personal from "./Cl_personal.js";

export default class Cl_obrero extends Cl_personal {
  constructor(nombre, edad, cntHijos) {
    super(nombre, edad);
    this.cntHijos = cntHijos;
  }
  bono() {
    return this.cntHijos < 3 ? 50 : 70;
  }
  sueldo() {
    return this.sueldoBase() + this.bono();
  }

  mostrar(){
    return `<tr>
    <td>${this.nombre}</td>
    <td> 1 <td>
    <td>${this.edad}</td>
    <td>${this.cntHijos}</td>
    <td>n/a</td>
    <td>${this.esMayorDeEdad() ? "si" : "no"}</td>
    <td>${this.bono()}</td>
    <td>n/a</td>
    <td>${this.sueldo()}</td>
    </tr>`
   }
  }
















