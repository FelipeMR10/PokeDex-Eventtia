import "./PokeSearch.css";
function PokeSearch() {
  return (
    <>
    <div className="pokeSearch">
    <input
        type="text"
        name="search"
        id="search"
        
        placeholder="Pikachu"
      ></input>
      <button type="button">Buscar</button>
    </div>
     
    </>
  );
}

export { PokeSearch };
// <div className="pokeSearch">
// </div>;
