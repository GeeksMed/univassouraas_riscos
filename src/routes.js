import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import GrupoRisco from './components/GrupoRisco';
import FormPage from './pages/Form';
import SuccessPage from './components/StatusPage/success';
import FailPage from './components/StatusPage/fail';

function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element= {<Home />}/>
                <Route path="/risco-fisico" element={<GrupoRisco grupoRiscoId={1} classColor={"fisico"} />} />
                <Route path="/risco-quimico" element={<GrupoRisco grupoRiscoId={2} classColor={"quimico"} />} />
                <Route path="/risco-biologico" element={<GrupoRisco grupoRiscoId={3} classColor={"biologico"} />} />
                <Route path="/risco-ergonomico" element={<GrupoRisco grupoRiscoId={4} classColor={"ergonomico"} />} />
                <Route path="/risco-acidente" element={<GrupoRisco grupoRiscoId={5} classColor={"acidente"}/>} />
                <Route path="/reportar_risco" element={<FormPage />}/>
                <Route path="/reportar_risco/sucesso" element={<SuccessPage />}/>
                <Route path="/reportar_risco/falha" element={<FailPage />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;