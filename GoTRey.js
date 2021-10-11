import Personajes from "./GoTPersonajes";
class PersonajeRey extends Personajes {
  reinado;

  constructor(reinado, nombre, familia, edad) {
    super(nombre, familia, edad);
    this.reinado = reinado;
    this.fraseTipo = "Vais a morir todos! ";
  }
}

export default PersonajeRey;
