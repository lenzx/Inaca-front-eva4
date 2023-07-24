import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home'
import Destacados from '../pages/Destacados';
import QuienesSomos from '../pages/QuienesSomos';
import Registrarse from '../pages/Registrase';

const App = () => {
	return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="destacados" element={<Destacados />} />
                <Route exact path="quienes-somos" element={<QuienesSomos />} />
                <Route exact path="registrarse" element={<Registrarse />} />
            </Routes>
        </BrowserRouter>
	);
}

export default App;