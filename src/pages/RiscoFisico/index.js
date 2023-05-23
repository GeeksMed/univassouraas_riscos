import React from 'react';

import Header_Back from '../../components/Header_Back';
import {Button, Container} from "react-bootstrap";

import Accordion from "react-bootstrap/Accordion";

export default function RiscoFisico() {
    return (
        <>
            <Header_Back/>
            <h2 className="text-h2 text-center mt-2" style={{color: 'var(--riscoFisico)'}}>Riscos Físicos</h2>
            <Container className="justify-content-center justify-items-center">
                <div>
                    <p className="blockquote text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla id risus vel metus aliquet pharetra. Class aptent taciti sociosqu ad litora torquent.
                    </p>
                </div>

                <Accordion defaultActiveKey="0" className="pb-4">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            Ruídos
                        </Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Vibrações</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Radiações Ionizantes</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Radiações não-ionizantes</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>Frio</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <div className="mt-2 d-flex">
                    <Button href="#" variant="danger" className="">Reportar Risco</Button>
                </div>
            </Container>
        </>
    );
}