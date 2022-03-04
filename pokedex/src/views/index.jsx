import { useState, useEffect } from "react";
import PokemonList from "../components/PokemonList";
import PokemonList from "../components/PokemonForm";

const Index = () => {
  let [results, setResults] = useState([]);
  let [filteredPokemon, setFilteredPokemon] = useState([]);
  let [searchName, setSearchName] = useState("");
  let [searchType, setSearchType] = useState("");
  let [searchWeakness, setSearchWeakness] = useState("");

  const filterResults = (value, type) => {
    let filterName = searchName;
    let filterType = searchType;
    let filterWeakness = searchWeakness;

    switch (type) {
      case "name":
        setSearchName(value);
        break;
      case "type":
        setSearchType(value);
        break;
      case "weakness":
        setSearchWeakness(value);
        break;
      default:
        throw new Error("Invalid filter type");
    }

    let filteredResults = results.filter((val) => {
      return (
        val.name.includes(filterName) &&
        (filterType ? val.type.includes(filterType) : true) &&
        (filterWeakness ? val.weaknesses.includes(filterWeakness) : true)
      );
    });

    setFilteredPokemon(filteredResults);
    setSearchName(filterName);
    setSearchType(filterType);
    setSearchWeakness(filterWeakness);
  };

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.pokemon);
        setResults(data.pokemon);
        setFilteredPokemon(data.pokemon);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="Index">
      <h1>Pokemon</h1>
      <PokemonForm
        searchName={searchName}
        searchType={searchType}
        searchWeakness={searchWeakness}
        filterResults={filterResults}
        filteredResults={filteredPokemon}
      />
      <PokemonList filteredPokemon={filteredPokemon} />
    </div>
  );
};

export default Index;
