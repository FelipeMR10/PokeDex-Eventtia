import React, { useState, useEffect } from "react";
import { List, ListItem, Pagination } from "@mui/material";

function PokeList() {
  const [pokemons, setPokemons] = useState([]); //estado que actualiza la lista de pokemones
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
        console.error("Error fetching Pokémon data:", error);
      }
    }

    fetchPokemones();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = pokemons.slice(indexOfFirstItem, indexOfLastItem);

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <>
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
      import tkinter as tk
from tkinter import messagebox
import webbrowser

# Función para verificar el login
def verificar_login():
    # Comprueba si el nombre de usuario y la contraseña son correctos
    usuario = entry_usuario.get()
    contrasena = entry_contrasena.get()
    
    # En este ejemplo, el nombre de usuario es "admin" y la contraseña es "password"
    if usuario == "admin" and contrasena == "password":
        # Si las credenciales son correctas, abre el enlace de Vimeo
        webbrowser.open("URL_DEL_VIDEO_DE_VIMEO")
    else:
        # Si las credenciales son incorrectas, muestra un mensaje de error
        messagebox.showerror("Error", "Credenciales incorrectas")

# Crear la ventana principal
ventana = tk.Tk()
ventana.title("Login")

# Etiqueta y campo de entrada para el nombre de usuario
label_usuario = tk.Label(ventana, text="Usuario:")
label_usuario.pack()
entry_usuario = tk.Entry(ventana)
entry_usuario.pack()

# Etiqueta y campo de entrada para la contraseña
label_contrasena = tk.Label(ventana, text="Contraseña:")
label_contrasena.pack()
entry_contrasena = tk.Entry(ventana, show="*")
entry_contrasena.pack()

# Botón para iniciar sesión
boton_login = tk.Button(ventana, text="Iniciar Sesión", command=verificar_login)
boton_login.pack()

# Iniciar el bucle principal
ventana.mainloop()

    </>
  );
}

export { PokeList };
