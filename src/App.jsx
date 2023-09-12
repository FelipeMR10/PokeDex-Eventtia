import { useState } from "react";
import { PokeSearch } from "./PokeSearch";
import { PokeList } from "./PokeList";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1>PokeDex</h1>
      </header>
      <PokeSearch />
      <PokeList />

      <h4>By: FelipeMR10</h4>
    </>
  );
}

export default App;
