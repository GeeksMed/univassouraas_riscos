import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import RiscoFisico from './pages/RiscoFisico';
import RiscoBiologico from './pages/RiscoBiologico';
import RiscoQuimico from './pages/RiscoQuimico';
import RiscoErgonomico from './pages/RiscoErgonomico';
import RiscoAcidente from './pages/RiscoAcidente';

function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element= {<Home />}/>
                <Route path="/risco-fisico" element={<RiscoFisico />} />
                <Route path="/risco-quimico" element={<RiscoQuimico />} />
                <Route path="/risco-biologico" element={<RiscoBiologico />} />
                <Route path="/risco-ergonomico" element={<RiscoErgonomico />} />
                <Route path="/risco-acidente" element={<RiscoAcidente />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;