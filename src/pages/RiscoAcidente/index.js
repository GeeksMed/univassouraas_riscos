import React from 'react';

import {Container} from "react-bootstrap";

import HeaderBack from "../../components/HeaderBack";
import Accordion from "react-bootstrap/Accordion";
import ReportarRisco from '../../components/ReportarRisco';

export default function RiscoAcidente() {
    return (
        <>
            <HeaderBack/>
            <h2 className="text-h1 text-center mt-2">Riscos de Acidentes</h2>
            <Container className="justify-content-center justify-items-center">
                <div>
                    <p className="blockquote text-center">Envolvem situações que podem levar a acidentes de trabalho, causando lesões físicas.</p>
                </div>

                <Accordion className="pb-4">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className="a_acidente">
                            Risco #1
                        </Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header  className="a_acidente">
                            Risco #2
                        </Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <ReportarRisco/>
            </Container>
        </>
    );
}