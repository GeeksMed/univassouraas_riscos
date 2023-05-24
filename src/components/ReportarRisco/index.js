import React from 'react';

import {Button} from "react-bootstrap";

export default function Header() {
    return (
        <>
            <div className="d-flex mt-2 justify-content-center">
                <Button className="reportar">Reportar Risco</Button>
            </div>
        </>
    );
}