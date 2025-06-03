import React from "react";

const Navbar = () => {
  const navStyle = {
    background: "#fff",
    borderRadius: "0 0 24px 24px",
    boxShadow: "0 4px 24px rgba(44,62,80,0.10)",
    padding: "0.75rem 2rem",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 1100,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  };

  const logoStyle = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    background: "#fff",
    borderRadius: "16px",
    boxShadow: "0 2px 12px #f0f0ff",
    padding: "0.3rem 1.2rem"
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
    color: "#222",
    fontWeight: 600,
    fontSize: "1.05rem",
    textDecoration: "none",
    padding: "6px 16px",
    borderRadius: "12px",
    transition: "background 0.2s, color 0.2s"
  };

  const activeLinkStyle = {
    ...linkStyle,
    color: "#a259f7",
    background: "rgba(162,89,247,0.10)"
  };

  const userStyle = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontWeight: 600,
    color: "#222",
    fontSize: "1.05rem",
    background: "#f5f5fa",
    borderRadius: "16px",
    padding: "6px 18px"
  };

  return (
    <nav style={navStyle}>
      <div style={logoStyle}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="Logo"
          style={{ width: 32, height: 32, borderRadius: "50%" }}
        />
        <span style={{ fontWeight: 700, fontSize: "1.2rem", color: "#222" }}>
          Juegos Zozo
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
      <div style={userStyle}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="Usuario"
          style={{ width: 28, height: 28, borderRadius: "50%" }}
        />
        Usuario
      </div>
    </nav>
  );
};

export default Navbar;
