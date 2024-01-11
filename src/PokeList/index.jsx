import React, { useState, useEffect } from "react";
import { List, ListItem, Pagination } from "@mui/material";
import { PokeSearch } from "../PokeSearch";

function PokeList() {
  const [pokemons, setPokemons] = useState([]); //estado que actualiza la lista de pokemones
  const [currentPage, setCurrentPage] = useState(1); //estado de la pag de pokemones que se muestra
  const [itemsPerPage] = useState(10); //este estado controla cuantos pokemones salen por pag
  //const [requestCount, setRequestCount] = useState(0);

  useEffect(() => {
    async function fetchPokemones() {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=100"
        );
        const data = await response.json();
        setPokemons(data.results);
        //setRequestCount(requestCount + 1);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    }

    fetchPokemones();
  }, []);
  //console.log(pokemons);
  //return <PokeSearch pokemons={pokemons} />;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = pokemons.slice(indexOfFirstItem, indexOfLastItem);

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  return ( 
    
    <>
    <PokeSearch pokemons={pokemons}/>
    {/* //   <p>Total de Peticiones a la API: {requestCount}</p> */}
      <List sx={{ margin: "1em" }}>
        {currentItems.map((pokemon, index) => (
          <ListItem
            key={index}
            sx={{
              backgroundColor: "white",
              justifyContent: "center",
              fontFamily: "Courier New",
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
        count={Math.ceil(pokemons.length / itemsPerPage)}
        onChange={handleChange}
      />
      
    </>
  );
}

export { PokeList };
