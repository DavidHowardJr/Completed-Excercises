import { Link } from "react-router-dom";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ filteredPokemon }) => {
    return (
        <div classsName="d-flex justify-content-around">
            {filteredPokemon.map((poke, index) => {
                return (
                    <Link to={poke.name.toLowerCase().replace(/ /g, "-")} key={"key" + poke.name + poke.num}>
                    <PokemonCard pokemon={poke} />
                );
            })}
        </div>
    );
};

export default PokemonList;