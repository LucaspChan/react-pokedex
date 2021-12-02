import React, { useState, useEffect } from "react";
import { getAllPokemon, getPokemon } from "./services/pokemon";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Buttons from "./components/Buttons";
import "./App.css";

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const initialUrl = "https://pokeapi.co/api/v2/pokemon";

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialUrl);
      // console.table(response.results);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      await loadingPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, []);

  const next = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  };

  const prev = async () => {
    if (!prevUrl) return;
    setLoading(true);
    let data = await getAllPokemon(prevUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  };

  const loadingPokemon = async (data) => {
    let pokemonDetails = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonRecord = await getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    setPokemonData(pokemonDetails);
  };
  // console.table(pokemonData);
  return (
    <>
      {loading ? (
        <h2 className="Navbar">loading..</h2>
      ) : (
        <>
          <Navbar />
          <div className="grid__buttonContainer">
            <div className="grid__button">
              <button
                type="button"
                onClick={prev}
                className="grid__button--prev"
              >
                Previous
              </button>
            </div>
            <div className="grid__button">
              <button
                type="button"
                onClick={next}
                className="grid__button--next"
              >
                Next
              </button>
            </div>
          </div>

          <div className="grid__Conatiner">
            {pokemonData.map((pokemon, i) => {
              return <Card key={i} pokemon={pokemon} />;
            })}
          </div>
        </>
      )}
    </>
  );
}

export default App;
