import React from "react";
import { TextField, List, ListItem } from "@mui/material";
//import "./PokeSearch.css";

function PokeSearch({ pokemons }) {
  //const [pokemons, setPokemons] = useState([]);
  //const { searchValue, setSearchValue } =  useState('');


  console.log(pokemons)

  return (
    <>
      <TextField
        label="Buscar Pokemon"
        variant="filled"
        margin=""
        style={{ marginLeft: "auto" }}
      />
      
    </>
  );
}

export { PokeSearch };
