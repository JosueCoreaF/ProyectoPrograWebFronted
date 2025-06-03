import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Perifericos from './pages/Perifericos';
// import Audifonos from './pages/Audifonos';
// import PCsArmadas from './pages/PCsArmadas';
// import Componentes from './pages/Componentes';
// import Juegos from './pages/Juegos';
// import Contacto from './pages/Contacto';

function App() {
    // Estilo global simple (solo modo claro)
    const appStyle = { background: "#f0f0ff", minHeight: "100vh", color: "#222" };

    return (
        <Router>
            <div style={appStyle}>
                <Navbar />
                <Sidebar />
                
                <div style={{ marginTop: '55px', marginLeft: '220px', padding: '20px' }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/perifericos" element={<Perifericos />} />
                        {/* <Route path="/audifonos" element={<Audifonos />} />
                        <Route path="/pcs-armadas" element={<PCsArmadas />} />
                        <Route path="/componentes" element={<Componentes />} />
                        <Route path="/juegos" element={<Juegos />} />
                        <Route path="/contacto" element={<Contacto />} /> */}
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;