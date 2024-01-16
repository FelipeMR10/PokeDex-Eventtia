import React, { useState } from "react";
import { TextField } from "@mui/material";
//import "./PokeSearch.css";

function PokeSearch({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    // Llamar a la función de búsqueda proporcionada por el padre
    onSearch(newSearchTerm);
  };

  return (
    <form>
      <TextField
        label="Buscar Pokemon"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </form>
  );
}

export { PokeSearch };