import React from 'react';

import Header_Back from '../../components/Header_Back';
import {Button, Container} from "react-bootstrap";

import AccordionRisco from '../../components/AccordionRisco';

export default function Risco() {
    return (
        <>
            <Header_Back/>
            <h2 className="text-h2 text-center">Riscos [Físicos]</h2>
            <Container className="justify-content-center justify-items-center">
                <div>
                    <p className="blockquote text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla id risus vel metus aliquet pharetra. Class aptent taciti sociosqu ad litora torquent.
                    </p>
                </div>

                <AccordionRisco />

                <div className="mt-2 d-flex">
                    <Button href="#" variant="danger" className="">Reportar Risco</Button>
                </div>
            </Container>
        </>
    );
}