import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Risco from './pages/Risco';

function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element= {<Home />}/>
                <Route path="/risco" element={<Risco />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;