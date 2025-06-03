import React, { useState } from "react";

const Sidebar = ({ theme }) => {
  const [open, setOpen] = useState(false);

  // Colores personalizados para el sidebar
  const sidebarBg =
    theme === "light"
      ? "bg-light"
      : "bg-dark";
  const sidebarText = theme === "light" ? "text-dark" : "text-white-50";
  const activeLink =
    theme === "light"
      ? "bg-primary text-white"
      : "bg-info bg-opacity-25 text-info";

  return (
    <>
      {/* Botón semicircular */}
      <button
        className="btn position-fixed top-50 translate-middle-y d-flex align-items-center justify-content-center shadow"
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
          transition: "left 0.3s"
        }}
        onClick={() => setOpen(!open)}
        aria-label="Abrir/cerrar menú lateral"
      >
        {open ? "⮜" : "☰"}
      </button>

      {/* Sidebar */}
      <div
        className={`position-fixed top-70 start-0 h-100 shadow ${sidebarBg}`}
        style={{
          width: open ? "260px" : "0",
          overflow: "hidden",
          transition: "width 0.3s",
          zIndex: 1040,
          paddingTop: "70px",
          borderRight: theme === "light" ? "1px solid #e0e0e0" : "1px solid #23284a",
          boxShadow: open
            ? "0 0 24px 0 rgba(44,62,80,0.10)"
            : "none",
        }}
      >
        {open && (
          <div className="d-flex flex-column align-items-start h-100 px-3">
            
            
            {/* Navegación */}
            <nav className="nav flex-column w-100 gap-2">
              <a className={`nav-link rounded-pill px-3 py-2 fw-semibold ${activeLink}`} href="#">
                Inicio
              </a>
              <a className={`nav-link rounded-pill px-3 py-2 fw-semibold ${sidebarText}`} href="#">
                Productos
              </a>
              <a className={`nav-link rounded-pill px-3 py-2 fw-semibold ${sidebarText}`} href="#">
                Ofertas
              </a>
              <a className={`nav-link rounded-pill px-3 py-2 fw-semibold ${sidebarText}`} href="#">
                Contacto
              </a>
            </nav>
            
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;