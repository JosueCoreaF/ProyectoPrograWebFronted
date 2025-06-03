import React, { useState } from "react";

const Sidebar = ({ theme }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className={`btn position-fixed top-50 translate-middle-y ${
          open ? "start-0" : "start-0"
        }`}
        style={{
          zIndex: 1050,
          width: "48px",
          height: "80px",
          borderTopRightRadius: "40px",
          borderBottomRightRadius: "40px",
          borderTopLeftRadius: "0",
          borderBottomLeftRadius: "0",
          background:
            theme === "light"
              ? "linear-gradient(135deg, #7f53ac 0%, #647dee 100%)"
              : "linear-gradient(135deg, #23284a 0%, #00eaff 100%)",
          color: "#fff",
          fontSize: "2rem",
          left: open ? "260px" : "0",
          transition: "left 0.3s",
        }}
        onClick={() => setOpen(!open)}
        aria-label="Abrir/cerrar menú lateral"
      >
        {open ? "⮜" : "☰"}
      </button>
      <div
        className={`position-fixed top-0 start-0 h-100 bg-${
          theme === "light" ? "light" : "dark"
        } shadow`}
        style={{
          width: open ? "260px" : "0",
          overflow: "hidden",
          transition: "width 0.3s",
          zIndex: 1040,
          paddingTop: "70px",
        }}
      >
        {open && (
          <nav className="nav flex-column mt-4">
            <a className="nav-link active" href="#">
              Inicio
            </a>
            <a className="nav-link" href="#">
              Productos
            </a>
            <a className="nav-link" href="#">
              Ofertas
            </a>
            <a className="nav-link" href="#">
              Contacto
            </a>
          </nav>
        )}
      </div>
    </>
  );
};

export default Sidebar;