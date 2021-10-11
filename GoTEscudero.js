import Personajes from ("./GoTPersonajes"); 
import PersonajeLuchador from ("./GoTLuchador");



class PersonajeEscudero extends Personajes{
personajeQueSirve;
pelotismo;

constructor(personajeQueSirve,pelotismo, nombre, familia, edad) {
    super(nombre, familia, edad);
    this.fraseTipo = "Soy un loser";
    this.pelotismo = pelotismo;


  if (luchador instanceof PersonajeLuchador) {
      this.luchador = luchador;
    }
}
}


export default PersonajeEscudero;
