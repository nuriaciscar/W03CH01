import Component from "./Component";

import personajes from "./GoT";
import Character from "./Character"

class Page extends Component{
  personajes;

  constructor(parentElement, {personajes}){
    super(parentElement, {personajes});
    this.personajes = personajes;
  

    this.generateHTML();
  };

}

generateHTML(){
  const html = ```<div class="app container">
      <ul class="characters-list row list-unstyled">
        <li class="character col">
          <div class="card character__card">
            <img
              src="img/no-one.jpg"
              alt="Nombre y familia del personaje"
              class="character__picture card-img-top"
            />
            <div class="card-body">
              <h2 class="character__name card-title h4">Nombre y familia</h2>
              <div class="character__info">
                <ul class="list-unstyled">
                  <li>Edad: X años</li>
                  <li>
                    Estado:
                    <i class="fas fa-thumbs-down"></i>
                    <i class="fas fa-thumbs-up"></i>
                  </li>
                </ul>
              </div>
              <div class="character__overlay">
                <ul class="list-unstyled">
                  <li>Años de reinado: X</li>
                  <li>Arma: XXX</li>
                  <li>Destreza: X</li>
                  <li>Peloteo: X</li>
                  <li>Asesora a: X</li>
                  <li>Sirve a: X</li>
                </ul>
                <div class="character__actions">
                  <button class="character__action btn">habla</button>
                  <button class="character__action btn">muere</button>
                </div>
              </div>
            </div>
            <i class="emoji"></i>
          </div>
        </li>
      </ul>
    </div>
    <div class="comunications">
      <p class="comunications__text display-1">Una frase que dice alguien</p>
      <img
        class="comunications__picture"
        src="img/no-one.jpg"
        alt="Nombre y familia del que habla"
      />
    </div>
    ```;

  this.element.innerHTML= html;

  const personajesCards= document.querySelector("characters-list row list-unstyled");
    this.personajes.map((".personajes") => {
    return new Personaje(personajesCards, personajes); //Por cada objeto de java script me devuelve un componente gentleman y cada vez le paso un objeto distinto
  });

};



export default Page;


