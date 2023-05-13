import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Risco from './pages/Risco';

function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                {/*<Route path="/" exact element= />*/}
                <Route path="/risco" element={<Risco />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;