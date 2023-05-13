import React from 'react';

import Header from '../../components/Header';
import {Button, Container} from "react-bootstrap";

import AccordionRisco from '../../components/AccordionRisco';

export default function Risco() {
    return (
        <>
            <Header/>
            <h2 className="text-h2 text-center">Riscos [Físicos]</h2>
            <Container className="justify-content-center justify-items-center">
                <div>
                    <p className="blockquote text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla id risus vel metus aliquet pharetra. Class aptent taciti sociosqu ad litora torquent.
                    </p>
                </div>

                <AccordionRisco />

                <div className="mt-2">
                    <Button href="#" variant="danger">Reportar Risco</Button>
                </div>
            </Container>
        </>
    );
}