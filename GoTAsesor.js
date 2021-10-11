import Personajes from ("./GoTPersonajes");
import PersonajeEscudero from "./GoTEscudero.js";
import PersonajeLuchador from "./GoTLuchador.js";
import PersonajeRey from "./GoTRey.js";


class PersonajeAsesor extends Personajes{
personajeQueAsesora;

constructor(personajeQueAsesora, nombre, familia, edad) {
    super(nombre, familia,edad);


      this.fraseTipo = "No sé por qué, pero creo que voy a morir pronto";

    if (
      asesorado instanceof PersonajeRey ||
      asesorado instanceof PersonajeLuchador ||
      asesorado instanceof PersonajeAsesor ||
      asesorado instanceof PersonajeEscudero
    ) {
      this.personajeQueAsesora = personajeQueAsesora;
    }
  }
}

export default PersonajeAsesor;





