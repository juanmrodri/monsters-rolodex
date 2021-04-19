import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component.jsx";
import { SearchBox } from "./components/seach-box.component.jsx";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    // buscamos la data de la url, en forma de JSON
    fetch("https://jsonplaceholder.typicode.com/users")
      // esto retorna una promesa, nos da una response del body de los datos
      // recordar que json es el formato que puede entender javaScript, sino, no hacemos nada vio
      .then((response) => response.json())
      // hacemos otra promesa, donde tomamos esos datos en json como array
      // estoy nos va a traer, los datos de la url, en forma de array para poder mostrarlos en nuestra app, que mas que arrays son objetos, con muchos arrays adentro
      .then((users) => this.setState({ monsters: users }));
  }

  // esto se lo agregamos despues, 18/07/20
  onSearchChange = (event) => {
    this.setState({
      searchField: event.target.value,
    });
  };

  render() {
    // haciendo esto, es como que sacamos los 2 states y los ponemos en 2 constantes
    // esto es lo mismo que decir const monsters = this.state.monsters y const search = this.state.searchField
    //
    //title agregado despues
    const { monsters, searchField } = this.state;
    // aca hacemos que filtre los datos cuando usamos el buscador
    // usamos el toLowerCase, para evitar mayusculas y minusculas, asique mandamos todo a minuscula, traemos los nombres en min y lo que se escriba en el searchField tambien
    // hecho esto, se lo aplicamos a CardList y listo

    const filterMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    // tener en cuenta que el setState es asincrono, asique no veremos el ultimo caracter escrito en el console.log, sino el anterior, para verlo en vivo, de segundo parametro en el setState, hacemos el console.log, adentro de una arrow func, esto de aca es para cuando el codigo se veia asi:
    /*onChange={(e) => {
            this.setState({ searchField: e.target.value }, () =>
              console.log(this.state)
            );
          }} */

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filterMonsters} />
      </div>
    );
  }
}

export default App;
