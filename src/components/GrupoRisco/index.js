import React from 'react';
import { useState, useEffect } from "react";

import { Container } from "react-bootstrap";

import HeaderBack from "../../components/HeaderBack";
import Accordion from "react-bootstrap/Accordion";
import ReportarRisco from '../../components/ReportarRisco';

export default function GrupoRisco({grupoRiscoId, classColor}) {
    const [grupoRisco, setGrupoRisco] = useState([]);

    useEffect(() => {
        fetchGrupoRisco();
    }, []);

    const fetchGrupoRisco = async () => {
        try {
            const response = await fetch(`http://localhost:3000/grupos-risco/${grupoRiscoId}`);
            const riscosData = await response.json();
            setGrupoRisco(riscosData);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <HeaderBack />
            <h2 className="text-h1 text-center mt-2">Riscos: {grupoRisco?.nome}</h2>
            <Container className="justify-content-center justify-items-center">
                <div>
                    <p className="blockquote text-center">{grupoRisco?.descricao}</p>
                </div>

                <Accordion className={`pb-4 ${classColor}`}>
                    {grupoRisco?.riscos?.map((risco, index) => (
                        <Accordion.Item eventKey={index}>
                            <Accordion.Header>
                                {risco.nome}
                            </Accordion.Header>
                            <Accordion.Body>
                                {risco.descricao}
                            </Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>

                <ReportarRisco />
            </Container>
        </>
    );
}


