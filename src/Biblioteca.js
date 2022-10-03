import React from "react";
import { Header } from "./components/ui/Header";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { LibrosMain } from "./components/main/libros/LibrosMain";
import { UsuariosMain } from "./components/main/usuarios/UsuariosMain";
import { PrestamosMain } from "./components/main/prestamos/PrestamosMain";

export const Biblioteca = () => {
  return (

      <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<LibrosMain/>}/>
            <Route path="/" element={<LibrosMain/>}/>
            <Route path="/usuarios" element={<UsuariosMain/>}/>
            <Route path="/prestamos" element={<PrestamosMain/>}/>
        </Routes>
      </BrowserRouter>

  );
};
