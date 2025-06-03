import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';


function App() {
    const [items, setItems] = useState([{
        title: "Progra Web",
        description: "Clase de los sabados"
    }]);
    return (
        <Router>
            <Navbar />
            <Sidebar />
            <div style={{ marginTop: '70px', marginLeft: '220px' }}>
                <Routes>
                    <Route path="/*" element={<Home />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;