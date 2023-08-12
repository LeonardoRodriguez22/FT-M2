import React from "react";
// import styledSpecies from "./Species.module.css";

function Species({ species, handleSpecies, handleAllSpecies }) {
  return (
    <div>
      <h2>Species</h2>
      {species.map((especie, index) => {
        return (
          <div>
            <button key={index} onClick={handleSpecies} value={especie}>
              {especie}
            </button>
          </div>
        );
      })}

      <button onClick={handleAllSpecies} value={species}>
        All Animals
      </button>
    </div>
  );
}

export default Species;
