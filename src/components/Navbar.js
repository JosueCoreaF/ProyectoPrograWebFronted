import React from "react";

const Navbar = ({ theme, toggleTheme }) => (
  <nav className={`navbar navbar-expand-lg ${theme === "light" ? "navbar-light bg-light" : "navbar-dark bg-dark"} fixed-top shadow`}>
    <div className="container-fluid">
      <a className="navbar-brand d-flex align-items-center" href="#">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="Logo"
          width="32"
          height="32"
          className="rounded-circle me-2"
        />
        <span>Juegos Zozo</span>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" href="#">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Juegos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Empleos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Acerca de</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contacto</a>
          </li>
        </ul>
      </div>
      <div className="d-flex align-items-center">
        <div className="d-flex align-items-center bg-secondary bg-opacity-25 rounded-pill px-3 py-1 me-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Usuario"
            width="28"
            height="28"
            className="rounded-circle me-2"
          />
          <span>Usuario</span>
        </div>
        <button
          className={`btn btn-${theme === "light" ? "outline-dark" : "outline-light"} rounded-circle`}
          onClick={toggleTheme}
          title="Cambiar tema"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </div>
  </nav>
);

export default Navbar;
