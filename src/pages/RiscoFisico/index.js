import React from 'react';

import HeaderBack from '../../components/HeaderBack';
import ReportarRisco from '../../components/ReportarRisco';

import {Container} from "react-bootstrap";

import Accordion from "react-bootstrap/Accordion";

export default function RiscoFisico() {
    return (
        <>
            <HeaderBack/>
            <h2 className="text-h2 text-center mt-2" style={{color: 'var(--riscoFisico)'}}>Riscos Físicos</h2>
            <Container className="justify-content-center justify-items-center">
                <div>
                    <p className="blockquote text-center">Referem-se a condições ou elementos presentes no ambiente que podem causar danos físicos.</p>
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

                <ReportarRisco/>
            </Container>
        </>
    );
}