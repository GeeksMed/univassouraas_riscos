import React from 'react';

import {Button, Container} from "react-bootstrap";

import Header_Back from "../../components/Header_Back";
import Accordion from "react-bootstrap/Accordion";

export default function RiscoBiologico() {
    return (
        <>
            <Header_Back/>
            <h2 className="text-h2 text-center mt-2" style={{color: 'var(--riscoBiologico)'}}>Riscos Biológicos</h2>
            <Container className="justify-content-center justify-items-center">
                <div>
                    <p className="blockquote text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla id risus vel metus aliquet pharetra. Class aptent taciti sociosqu ad litora torquent.
                    </p>
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

                <div className="mt-2">
                    <Button href="#" variant="danger">Reportar Risco</Button>
                </div>
            </Container>
        </>
    );
}