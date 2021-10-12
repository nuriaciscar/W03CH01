import asesor from "./GoTAsesor";
import escudero from "./GoTEscudero";
import luchador from "./GoTLuchador";
import rey from "./GoTRey";
import personajes from "./GoTPersonajes";

const joffrey = new PersonajeRey("Joffrey", Personajes.familia.arryn, 29, 2);
const jaime = new PersonajeLuchador(
  "Jaime",
  Personajes.familia.stark,
  45,
  "AK-47",
  7
);
const daenerys = new PersonajeLuchador(
  "Daenerys",
  Personajes.familia.stark,
  23,
  "AK",
  7
);
const tyirion = new PersonajeAsesor(
  "Tyirion",
  Personajes.familia.stark,
  32,
  daenerys
);
const bronn = new PersonajeEscudero(
  "Bronn",
  Personajes.familia.stark,
  31,
  jaime,
  7
);

const personajes = [joffrey, jaime, daenerys, tyirion, bronn];
