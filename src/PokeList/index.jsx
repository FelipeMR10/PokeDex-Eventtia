import React, { useState, useEffect } from "react";
import { Pagination } from "../Pagination";
import "./PokeList.css";

function PokeList() {
  const [pokemons, setPokemons] = useState([]);//estado que actualiza la lista de pokemones
  const [currentPage, setCurrentPage] = useState(1);//estado de la pag de pokemones que se muestra
  const [itemsPerPage] = useState(3);//este estado controla cuantos pokemones salen por pag

  useEffect(() => {
    async function fetchPokemons() {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon");
        const data = await response.json();
        //console.log(pokemons);
        setPokemons(data.results);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    }

    fetchPokemons();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = pokemons.slice(indexOfFirstItem, indexOfLastItem);

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <ul>
        {currentItems.map((pokemon) => (
          <li key={pokemon.id}>{pokemon.name}</li>
         
        ))}
        
      </ul>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(pokemons.length / itemsPerPage)}
        onPageChange={onPageChange}
      />
    </>
  );
}

export { PokeList };
