import React from 'react';

import {Container} from "react-bootstrap";

import HeaderBack from "../../components/HeaderBack";
import Accordion from "react-bootstrap/Accordion";
import ReportarRisco from '../../components/ReportarRisco';

export default function RiscoBiologico() {
    return (
        <>
            <HeaderBack/>
            <h2 className="text-h2 text-center mt-2" style={{color: 'var(--riscoBiologico)'}}>Riscos Biológicos</h2>
            <Container className="justify-content-center justify-items-center">
                <div>
                    <p className="blockquote text-center">Envolvem agentes biológicos, como bactérias, vírus, fungos, parasitas e outros organismos presentes no ambiente.</p>
                </div>

                <Accordion defaultActiveKey="0" className="pb-4">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            Risco #1
                        </Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Risco #2</Accordion.Header>
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