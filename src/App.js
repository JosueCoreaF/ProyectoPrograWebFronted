import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Perifericos from './pages/Perifericos';
{/*
import Audifonos from './pages/Audifonos';
import PCsArmadas from './pages/PCsArmadas';
import Componentes from './pages/Componentes';
import Juegos from './pages/Juegos';
import Contacto from './pages/Contacto';*/}


function App() {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    // Estilos globales para los temas
    const appStyle = theme === "light"
        ? { background: "#f0f0ff", minHeight: "100vh", color: "#222" }
        : {
            background: "linear-gradient(135deg, #0f2027 0%, #2c5364 100%)",
            minHeight: "100vh",
            color: "#fff" // Cambia el color de texto a blanco en modo oscuro
        };

    return (
        <Router>
            <div style={appStyle}>
                <Navbar theme={theme} toggleTheme={toggleTheme} />
                <Sidebar theme={theme} />
                <div style={{ marginTop: '55px', marginLeft: '220px' ,padding: '20px' }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/perifericos" element={<Perifericos />} />
                        {/*<Route path="/audifonos" element={<Audifonos />} />
                        <Route path="/pcs-armadas" element={<PCsArmadas />} />
                        <Route path="/componentes" element={<Componentes />} />
                        <Route path="/juegos" element={<Juegos />} />
                        <Route path="/contacto" element={<Contacto />} />*/}
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;