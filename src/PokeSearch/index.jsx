import { Button, TextField, List } from "@mui/material";
import "./PokeSearch.css";
function PokeSearch() {
  return (
    <>
      <div className="pokeSearch">
        <TextField
          label="Nombre del Pokemon"
          variant="outlined"
          />
        <Button variant="contained" color="primary" margin="">
          Buscar
        </Button>
      </div>
    </>
  );
}

export { PokeSearch };
