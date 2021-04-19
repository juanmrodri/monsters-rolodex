import React from "react";
import { Card } from "../card/card.component.jsx";
import "./card-list.style.css";

// recordar que las props van a ser los parametros que tomamos
// de este componente funcional
export const CardList = (props) => {
  console.log(props);
  // aca recibimos el children de las props, que basicamente es
  // cualquier cosas que este adentro de CardList
  return (
    <div className="card-list">
      {props.monsters.map((monster) => (
        // chequear que le pasamos el prop aca
        // monster={monster} que luego lee el card.component
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
