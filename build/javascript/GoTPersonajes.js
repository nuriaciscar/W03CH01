class Personajes {
  nombre;
  familia;
  edad;
  vivo = true;
  serie = "Juego de Tronos";
  fraseTipo;

  static familia = {
    arryn: "casa Arryn",
    stark: "casa Stark",
    targaryan: "casa Targaryan",
  };

  constructor(nombre, familia, edad) {
    //Las mínimas que quiero al crear personaje
    this.nombre = nombre;
    this.familia = familia;
    this.edad = edad;
  }

  comunicar() {
    return this.fraseTipo;
  }

  morir() {
    this.vivo = false;
  }
}

export default Personajes;
