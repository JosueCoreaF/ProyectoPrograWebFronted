import React from "react";

const Navbar = ({ theme, toggleTheme }) => {
  const navStyle = {
    background: theme === "light" ? "#fff" : "#181c2f",
    boxShadow: "0 4px 24px rgba(44,62,80,0.10)",
    padding: "0.75rem 2rem",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 1100,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: theme === "light" ? "#222" : "#fff" // <-- blanco en oscuro
  };

  const logoStyle = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    background: theme === "light" ? "#fff" : "#181c2f",
    borderRadius: "16px",
    boxShadow: "0 2px 12px #f0f0ff",
    padding: "0.3rem 1.2rem",
    color: theme === "light" ? "#222" : "#fff" // <-- blanco en oscuro
  };

  const navLinksContainerStyle = {
    flex: 1,
    display: "flex",
    justifyContent: "center"
  };

  const navLinksStyle = {
    display: "flex",
    alignItems: "center",
    gap: "2rem",
    margin: 0,
    listStyle: "none"
  };

  const linkStyle = {
    color: theme === "light" ? "#222" : "#fff", // <-- blanco en oscuro
    fontWeight: 600,
    fontSize: "1.05rem",
    textDecoration: "none",
    padding: "6px 16px",
    borderRadius: "12px",
    transition: "background 0.2s, color 0.2s"
  };

  const activeLinkStyle = {
    ...linkStyle,
    color: theme === "light" ? "#a259f7" : "#fff", // <-- blanco en oscuro
    background: theme === "light"
      ? "rgba(162,89,247,0.10)"
      : "rgba(0,234,255,0.10)"
  };

  const userStyle = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontWeight: 600,
    color: theme === "light" ? "#222" : "#fff", // <-- blanco en oscuro
    fontSize: "1.05rem",
    background: theme === "light" ? "#f5f5fa" : "#23284a",
    borderRadius: "16px",
    padding: "6px 18px"
  };

  // Botón de cambio de tema
  const themeBtnStyle = {
    marginLeft: "1rem",
    border: "none",
    borderRadius: "50%",
    width: "38px",
    height: "38px",
    background: theme === "light"
      ? "linear-gradient(135deg, #7f53ac 0%, #647dee 100%)"
      : "linear-gradient(135deg, #00eaff 0%, #23284a 100%)",
    color: "#fff",
    fontSize: "1.3rem",
    cursor: "pointer",
    boxShadow: "0 2px 8px rgba(44,62,80,0.10)"
  };

  return (
    <nav style={navStyle}>
      <div style={logoStyle}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="Logo"
          style={{ width: 32, height: 32, borderRadius: "50%" }}
        />
        <span style={{ fontWeight: 700, fontSize: "1.2rem" }}>
          NovaTech
        </span>
      </div>
      <div style={navLinksContainerStyle}>
        <ul style={navLinksStyle} className="mb-0">
          <li>
            <a href="#" style={activeLinkStyle}>Inicio</a>
          </li>
          <li>
            <a href="#" style={linkStyle}>Juegos</a>
          </li>
          <li>
            <a href="#" style={linkStyle}>Empleos</a>
          </li>
          <li>
            <a href="#" style={linkStyle}>Acerca de</a>
          </li>
          <li>
            <a href="#" style={linkStyle}>Contacto</a>
          </li>
        </ul>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={userStyle}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Usuario"
            style={{ width: 28, height: 28, borderRadius: "50%" }}
          />
          Usuario
        </div>
        <button style={themeBtnStyle} onClick={toggleTheme} title="Cambiar tema">
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
