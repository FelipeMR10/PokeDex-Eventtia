import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { List, Grid, Typography, ListItem, ListItemText } from "@mui/material";
import { Pagination } from "../Pagination";
import "./PokeList.css";

function generate(pokemon) {
  return currentItems.map(pokemon);
  // [0, 1, 2].map((value) =>
  //   React.cloneElement(element, {
  //     key: value,
  //   })
  // );
}

function PokeList() {
  const [pokemons, setPokemons] = useState([]); //estado que actualiza la lista de pokemones
  const [currentPage, setCurrentPage] = useState(1); //estado de la pag de pokemones que se muestra
  const [itemsPerPage] = useState(10); //este estado controla cuantos pokemones salen por pag
  const [dense, setDense] = React.useState(true);

  useEffect(() => {
    async function fetchPokemones() {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=100"
        );
        const data = await response.json();
        // console.log(data);
        setPokemons(data.results);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    }

    fetchPokemones();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = pokemons.slice(indexOfFirstItem, indexOfLastItem);

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  // const Demo = styled("div")(({ theme }) => ({
  //   backgroundColor: theme.palette.background.paper,
  // }));
  return (
    <>
      <ul>
        {currentItems.map((pokemon) => (
          <li key={pokemon.name}>
            {/* <a href="#">{pokemon.name}</a> */}
          </li>
        ))}
      </ul>
      <Grid item xs={12} md={6}>
        {/* <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
          Text only
        </Typography> */}
        <List dense={dense}>
          {currentItems.map((pokemon, index) => (
            <ListItem key={index}>{pokemon.name}</ListItem>
          ))}
        </List>
        {/* <Demo>
         
        </Demo> */}
      </Grid>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(pokemons.length / itemsPerPage)}
        onPageChange={onPageChange}
      />
    </>
  );
}

export { PokeList };
