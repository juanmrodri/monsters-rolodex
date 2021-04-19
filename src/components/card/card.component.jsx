import React from "react";
import "./card.style.css";

// abajo en la url le pasamos el id de los monsters, que va a ser unico claramente, y esto reemplaza el numero de la url que identifica la imagen, una genialidad
// notar que al final de la url agregamos un &size=180x180, para limitar el tamaño de cada imagen a 180
export const Card = (props) => (
  <div className="card-container">
    <img
      alt="monster"
      src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
    />
    <h2> {props.monster.name} </h2>
    <p>{props.monster.email} </p>
  </div>
);
