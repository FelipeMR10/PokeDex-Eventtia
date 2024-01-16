import React, { useState, useEffect } from "react";
import { List, ListItem, Pagination } from "@mui/material";
import { PokeSearch } from "../PokeSearch";

function PokeList() {
  const [pokemons, setPokemons] = useState([]); //estado que actualiza la lista de pokemones
  const [filteredPokemons, setFilteredPokemons] = useState([]); //estado para almacenar los pokemones filtrados
  const [currentPage, setCurrentPage] = useState(1); //estado de la pag de pokemones que se muestra
  const [itemsPerPage] = useState(10); //este estado controla cuantos pokemones salen por pag

  useEffect(() => {
    async function fetchPokemones() {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=100"
        );
        const data = await response.json();
        setPokemons(data.results);
      } catch (error) {
        console.error("Error, no se encontraron datos", error);
      }
    }

    fetchPokemones();
  }, []);

  useEffect(() => {
    setFilteredPokemons(pokemons); // Inicialmente, muestra todos los pokemones
  }, [pokemons]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredPokemons.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const textSearch = (searchText) => {
    // Filtrar los pokemones en función del término de búsqueda
    const filtered = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredPokemons(filtered);
    setCurrentPage(1); // Reiniciar a la primera página después de la búsqueda
  };

  const handleChange = ( value) => {
  setCurrentPage(value);
  };

  return (
    <>
      <PokeSearch onSearch={textSearch} />
      <List sx={{ margin: "1em" }}>
        {currentItems.map((pokemon, index) => (
          <ListItem
            key={index}
            sx={{
              backgroundColor: "white",
              justifyContent: "center",
              border: "solid 1px",
            }}
          >
            {pokemon.name}
          </ListItem>
        ))}
      </List>
      <Pagination
        sx={{
          display: "flex",
          justifyContent: "center",
          fontFamily: "Courier New",
        }}
        page={currentPage}
        count={Math.ceil(filteredPokemons.length / itemsPerPage)}
        onChange={handleChange}
      />
    </>
  );
}

export { PokeList };