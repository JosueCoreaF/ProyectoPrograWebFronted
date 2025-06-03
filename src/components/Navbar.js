import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const navItems = [
  { label: "Inicio", path: "/" },
  { label: "Periféricos", path: "/perifericos" },
  { label: "Audífonos", path: "/audifonos" },
  { label: "PCs Armadas", path: "/pcs-armadas" },
  { label: "Componentes", path: "/componentes" },
  { label: "Juegos", path: "/juegos" },
  { label: "Contacto", path: "/contacto" },
];

const Navbar = ({ theme, toggleTheme }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Colores para el estilo
  const activeBg = theme === "light" ? "rgba(162, 89, 247, 0.10)" : "rgba(162, 89, 247, 0.18)";
  const activeColor = "#a259f7";
  const btnBg = theme === "light" ? "rgba(162, 89, 247, 0.10)" : "rgba(255,255,255,0.08)";
  const btnColor = theme === "light" ? "#222" : "#fff";
  const iconBg = theme === "light" ? "#7f53ac" : "#7f53ac";

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{
        background: theme === "light" ? "#fff" : "#181c2f",
        boxShadow: "0 4px 24px rgba(44,62,80,0.10)",
        zIndex: 1100,
        padding: "0.5rem 2rem",
        color: theme === "light" ? "#222" : "#fff"
      }}
    >
      <div className="container-fluid">
        <span
          className="navbar-brand fw-bold"
          style={{
            cursor: "pointer",
            background: btnBg,
            borderRadius: "18px",
            padding: "0.3rem 1.2rem",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            color: btnColor
          }}
          onClick={() => navigate("/")}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="logo"
            width={28}
            height={28}
            style={{ borderRadius: "50%" }}
          />
          Gamer Store
        </span>
        <div className="collapse navbar-collapse justify-content-center" id="mainNav">
          <ul className="navbar-nav mb-2 mb-lg-0 gap-3">
            {navItems.map((item) => (
              <li className="nav-item" key={item.path}>
                <button
                  className="nav-link btn btn-link"
                  style={{
                    color:
                      location.pathname === item.path
                        ? activeColor
                        : btnColor,
                    background:
                      location.pathname === item.path
                        ? activeBg
                        : "transparent",
                    borderRadius: "16px",
                    fontWeight: 600,
                    fontSize: "1.05rem",
                    padding: "6px 22px",
                    transition: "background 0.2s, color 0.2s",
                  }}
                  onClick={() => navigate(item.path)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="d-flex align-items-center gap-2">
          {/* Usuario */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: btnBg,
              borderRadius: "18px",
              padding: "6px 18px",
              fontWeight: 600,
              color: btnColor,
              fontSize: "1.05rem",
              cursor: "pointer",
              gap: "8px",
            }}
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Usuario"
              width={28}
              height={28}
              style={{ borderRadius: "50%" }}
            />
            Usuario
          </div>
          {/* Botón tema */}
          <button
            className="d-flex align-items-center justify-content-center"
            style={{
              width: 38,
              height: 38,
              fontSize: "1.2rem",
              borderRadius: "50%",
              background: iconBg,
              color: "#fff",
              border: "none",
              outline: "none",
              marginLeft: "4px",
              boxShadow: "0 2px 8px rgba(44,62,80,0.10)",
              cursor: "pointer",
            }}
            onClick={toggleTheme}
            title="Cambiar tema"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
