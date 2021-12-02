import React from "react";
import pokemonTypes from "../../helpers/pokemonTypes";
import "./style.css";

function Card({ pokemon }) {
  return (
    <div className="card__container">
      <div className="card__img">
        <picture>
          <img
            className="card__sprites"
            src={pokemon.sprites.front_default}
            alt=""
            height="96"
            width="96"
            loading="lazy"
          />
          <img
            className="card__sprites"
            src={pokemon.sprites.front_shiny}
            alt=""
            height="96"
            width="96"
            loading="lazy"
          />
        </picture>
      </div>
      <div className="card__name">
        <h2 className="card__name--pokemon">{pokemon.name}</h2>
      </div>
      <div className="card__infoContainer">
        <div className="card__types">
          {pokemon.types.map((type) => {
            if (pokemon.types.length > 1) {
              return (
                <div
                  className="card__type card__type--half"
                  key={pokemonTypes[type.type.name]}
                  style={{ backgroundColor: pokemonTypes[type.type.name] }}
                >
                  {type.type.name}
                </div>
              );
            }
            return (
              <div
                className="card__type"
                key={pokemonTypes[type.type.name]}
                style={{ backgroundColor: pokemonTypes[type.type.name] }}
              >
                {type.type.name}
              </div>
            );
          })}
        </div>

        {/* <div className="">
          {pokemon.moves.map((move) => {
            return (
              <div className=" " key={move.move.name}>
                {move.move.name}
              </div>
            );
          })}
        </div> */}
        {/* <div className="card__info">{pokemon.name}</div> */}
        <div className="card__data card__data--weight">
          <p className="card__data--title">Weight</p>
          <p>{pokemon.weight}</p>
        </div>

        <div className="card__data card__data--height">
          <p className="card__data--title">Height</p>
          <p>{pokemon.height}</p>
        </div>
        <div className="card__data card__data--ability">
          <p className="card__data--title">Height</p>
          <p>{pokemon.abilities[0].ability.name}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
