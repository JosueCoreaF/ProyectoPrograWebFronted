import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';


function App() {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    const appStyle = theme === "light"
        ? { background: "#f8faff", minHeight: "100vh", color: "#222" }
        : {
            background: "linear-gradient(135deg, #0f2027 0%, #2c5364 100%)",
            minHeight: "100vh",
            color: "#fff"
        };

    return (
        <Router>
            <div style={appStyle}>
                <Navbar theme={theme} toggleTheme={toggleTheme} />
                <Sidebar theme={theme} />
                <div style={{ marginTop: '50px', marginLeft: '0', padding: '20px' }}>
                    <Routes>
                        <Route path="/*" element={<Home />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;