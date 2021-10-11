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

for (let i = 0; i < personajes.length; i++) {
  const container = document.querySelector(".app container");

  const card = document.createElement("ul");
  card.classList.add("characters-list row list-unstyled");
  container.appendChild(card);

  const elementoLista = document.createElement("li");
  elementoLista.classList.add("character col");
  card.appendChild(elementoLista);
  elementoLista.innerHTML = "HOLA";

  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card character__card");
  elementoLista.appendChild(cardDiv);

  const imagen = document.createElement("img");
  imagen.classList.add("character__picture card-img-top");
  cardDiv.appendChild(imagen);

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  cardDiv.appendChild(cardBody);

  const cardTitle = document.createElement("h2");
  cardTitle.classList.add("character__name card-title h4");
  const textH2 = personajes[i].nombre + "y" + personajes[i].familia;
  cardTitle.innerHTML = textH2;
  cardDiv.appendChild(cardBody);

  const cardInfo = document.createElement("div");
  cardInfo.classList.add("character__info");
  cardTitle.appendChild(cardInfo);

  const ulInfo = document.createElement("ul");
  ulInfo.classList.add("list-unstyled");
  cardInfo.appendChild(ulInfo);

  const infoLi = document.createElement("li");
  ulInfo.appendChild(infoLi);
  const infoLi = document.createElement("li");
  ulInfo.appendChild(infoLi);
  const iconHand = document.createElement("i");
  infoLi.appendChild(iconHand);
  const iconHand = document.createElement("i");
  infoLi.appendChild(iconHand);

  const cardOverlay = document.createElement("div");
  cardInfo.classList.add("character__overlay");
  cardTitle.appendChild(cardOverlay);

  const ulInfo = document.createElement("ul");
  ulInfo.classList.add("list-unstyled");
  cardOverlay.appendChild(ulInfo);

  const infoLi = document.createElement("li");
  ulInfo.appendChild(infoLi);
  const infoLi = document.createElement("li");
  ulInfo.appendChild(infoLi);
  const infoLi = document.createElement("li");
  ulInfo.appendChild(infoLi);
  const infoLi = document.createElement("li");
  ulInfo.appendChild(infoLi);
  const infoLi = document.createElement("li");
  ulInfo.appendChild(infoLi);
  const infoLi = document.createElement("li");
  ulInfo.appendChild(infoLi);

  const cardActions = document.createElement("div");
  cardActions.classList.add("character__actions");
  cardOverlay.appendChild(cardActions);

  const cardButton = document.createElement("button");
  cardButton.classList.add("character__action btn");
  cardActions.appendChild(cardButton);

  const cardButton = document.createElement("button");
  cardButton.classList.add("character__action btn");
  cardActions.appendChild(cardButton);

  const cardEmoji = document.createElement("i");
  cardEmoji.classList.add("emoji");
  cardDiv.appendChild(cardEmoji);

  const comunications = document.createElement("div");
  comunications.classList.add("comunications");
  body.appendChild(comunications);

  const comunicationsText = document.createElement("p");
  comunicationsText.classList.add("comunications__text display-1");
  comunications.appendChild(comunicationsText);

  const comunicationsImage = document.createElement("img");
  comunicationsImage.classList.add("comunications__text display-1");
  comunications.appendChild(comunicationsImage);
}

// ulInfo.info = (
//   <style>
//     <ul class="list-unstyled">
//       <li>Edad: X años</li>
//       <li>
//         Estado:
//         <i class="fas fa-thumbs-down"></i>
//         <i class="fas fa-thumbs-up"></i>
//       </li>
//     </ul>
//   </style>
// );
