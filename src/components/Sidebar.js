import React, { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const sidebarStyle = {
    width: open ? "260px" : "0",
    transition: "width 0.3s",
    overflow: "hidden",
    height: "calc(100vh - 80px)",
    position: "fixed",
    top: "70px",
    left: 0,
    zIndex: 999,
    background: "#fff",
    borderRadius: open ? "0 20px 20px 0" : "0 20px 20px 0",
    boxShadow: open ? "0 4px 24px rgba(44,62,80,0.10)" : "none",
    padding: open ? "2rem 1.5rem 1.5rem 1.5rem" : "0",
    borderRight: open ? "1px solid #f0f0f0" : "none",
    display: "flex",
    flexDirection: "column",
    alignItems: open ? "flex-start" : "center",
    justifyContent: "flex-start"
  };

  // Semicírculo vertical centrado
  const semicircleBtnStyle = {
    position: "fixed",
    top: "calc(50vh + 35px)", // 35px para compensar el top del sidebar
    left: open ? "260px" : "0",
    transform: "translateY(-50%)",
    width: "40px",
    height: "80px",
    background: "linear-gradient(135deg, #7f53ac 0%, #647dee 100%)",
    borderTopRightRadius: "40px",
    borderBottomRightRadius: "40px",
    borderTopLeftRadius: "0",
    borderBottomLeftRadius: "0",
    boxShadow: "0 2px 8px rgba(44,62,80,0.10)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontSize: "2rem",
    border: "none",
    outline: "none",
    zIndex: 1001,
    cursor: "pointer",
    transition: "left 0.3s"
  };

  const linkStyle = {
    fontWeight: 600,
    fontSize: "1.1rem",
    color: "#222",
    borderRadius: "12px",
    marginBottom: "10px",
    padding: "12px 18px",
    transition: "background 0.2s, color 0.2s",
    textDecoration: "none",
    display: "block"
  };

  const activeLinkStyle = {
    ...linkStyle,
    background: "linear-gradient(90deg, #7f53ac 0%, #647dee 100%)",
    color: "#fff"
  };

  return (
    <>
      <button
        style={semicircleBtnStyle}
        onClick={() => setOpen(!open)}
        aria-label="Abrir/cerrar menú lateral"
      >
        {open ? "⮜" : "☰"}
      </button>
      <div style={sidebarStyle}>
        {open && (
          <>
            
            <nav className="w-100">
              <a href="#" style={activeLinkStyle}>Inicio</a>
              <a href="#" style={linkStyle}>Productos</a>
              <a href="#" style={linkStyle}>Ofertas</a>
              <a href="#" style={linkStyle}>Contacto</a>
            </nav>
          </>
        )}
      </div>
    </>
  );
};

export default Sidebar;