import Component from "./Component";
import Character from "./Character";
import personajes from "./GoT";


class Page extends Component {
  personajes;

  constructor(parentElement, {personajes}){
    super(parentElement, "character col");
    this.generateHTML();
  }
}


generateHTML(){
  const html =



  this.parentElement.innerHTML = html;

  const personajesCard = document.querySelector(".personajes");
  this.personajes.map((personaje) => {
    return new Person(personajesCard,personaje);
  })
}


export default Page;