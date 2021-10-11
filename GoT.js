import Personajes from ("./GoTPersonajes.js");
import PersonajeAsesor from ("./GoTAsesor.js");
import PersonajeEscudero from ("./GoTEscudero.js");
import PersonajeLuchador from ("./GoTLuchador.js");
import PersonajeRey from ("./GoTRey.js");

const joffrey = new PersonajeRey("Joffrey", Personajes.familia.arryn, 29, 2);
const jaime = new PersonajeLuchador("Jaime", Personajes.familia.stark, 45, "AK-47", 7);
const daenerys = new PersonajeLuchador("Daenerys", Personajes.familia.stark, 23, "AK", 7);
const tyirion = new PersonajeAsesor("Tyirion", Personajes.familia.stark, 32, daenerys);
const bronn = new PersonajeEscudero("Bronn", Personajes.familia.stark, 31, jaime, 7);

const personajes = [joffrey, jaime, daenerys, tyirion, bronn];
console.log(personajes);

const frasesTipos = personajes
  .filter((personaje) => personaje instanceof Luchador)
  .map((personaje) => personaje.comunicar());

console.log(joffrey.serie);
frasesTipos.forEach((content) => console.log(content));
console.log(`Jaime vivo ? ${jaime.vivo}`);
console.log(`Tyirion vivo ? ${tyrion.vivo}`);
jaime.morir();
tyirion.morir();
console.log(`Jaime vivo ? ${jaime.vivo}`);
console.log(`Tyirion vivo ? ${tyrion.vivo}`);
