import Personajes from ("./GoTPersonajes");

class PersonajeLuchador extends Personajes{
arma;
destreza;

constructor(arma, destreza, nombre, familia, edad) {
    super( nombre, familia, edad);
    this.fraseTipo= "Primero pego y luego pregunto";
    this.arma = arma;
    this.destreza= destreza;
  
    if (destreza >= 0 && destreza <= 10) {
      this.destreza = destreza;
    }
}
}


export default PersonajeLuchador;