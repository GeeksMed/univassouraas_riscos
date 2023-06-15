import React from 'react';

import {Button} from "react-bootstrap";

export default function ReportarRisco() {
    return (
        <>
            <div className="d-flex my-3 justify-content-center">
                <Button className="reportar" onClick={event =>  window.location.href='/reportar_risco'}>Reportar Risco</Button>
            </div>
        </>
    );
}