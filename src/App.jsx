import { TextField, Typography, Container } from '@mui/material';
import { PokeSearch } from "./PokeSearch";
import { PokeList } from "./PokeList";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1>PokeDex - Felipe Madigal - Eventtia</h1>
      </header>
      <PokeSearch />
      <PokeList />
      <Container maxWidth="sm">
        <Typography variant="h3" component="div" gutterBottom>
          Mi Aplicación con MUI
        </Typography>
        
        
      </Container>
      <footer>
        <h4>By: FelipeMR10</h4>
      </footer>
    </>
  );
}

export default App;
