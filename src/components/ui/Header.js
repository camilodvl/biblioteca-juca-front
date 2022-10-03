import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
        <NavLink to="/" className="navbar-brand">
            Inventario
          </NavLink>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
              <NavLink to="/" className="nav-link" activeclassname="active">
                  Libros
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/usuarios" className="nav-link" activeclassname="active">
                  Usuarios
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/prestamos" className="nav-link" activeclassname="active">
                  Prestamos
                </NavLink>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Buscar"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Buscar
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};
