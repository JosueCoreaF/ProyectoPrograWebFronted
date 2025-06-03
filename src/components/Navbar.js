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

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Colores para el estilo (solo modo claro por ahora)
  const activeBg = "rgba(162, 89, 247, 0.10)";
  const activeColor = "#a259f7";
  const btnBg = "rgba(162, 89, 247, 0.10)";
  const btnColor = "#222";

  return (
    <nav className="navbar navbar-expand-lg fixed-top"
      style={{
        background: "#fff",
        boxShadow: "0 4px 24px rgba(44,62,80,0.10)",
        zIndex: 1100,
        padding: "0.5rem 2rem",
        color: btnColor
      }}
    >
      <div className="container-fluid">
        <span className="navbar-brand fw-bold"
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
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="logo"
            width={28}
            height={28}
            style={{ borderRadius: "50%" }}
          />
          NovaTech
        </span>
        <div className="collapse navbar-collapse justify-content-center" id="mainNav">
          <ul className="navbar-nav mb-2 mb-lg-0 gap-3">
            {navItems.map((item) => (
              <li className="nav-item" key={item.path}>
                <button className="nav-link btn btn-link"
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
          <div style={{
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
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Usuario"
              width={28}
              height={28}
              style={{ borderRadius: "50%" }}
            />
            Usuario
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
