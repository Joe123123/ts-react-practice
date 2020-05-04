import React, { Component } from "react";
import User from "../interfaces/User.interface";

export class PokemonSearch extends Component<User> {
  pokemonRef: React.RefObject<HTMLInputElement>;
  constructor(props: User) {
    super(props);
    this.pokemonRef = React.createRef();
  }
  render() {
    const { name, numberOfPokemons } = this.props;
    return (
      <div>
        <p>
          User {name}{" "}
          {numberOfPokemons && <span> has {numberOfPokemons} pokemons. </span>}
        </p>
        <input type="text" ref={this.pokemonRef} />
        <button onClick={this.onSearchClick} className="my-button">
          Search!
        </button>
      </div>
    );
  }
}

export default PokemonSearch;
