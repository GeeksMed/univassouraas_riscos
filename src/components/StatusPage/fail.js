import React from 'react';
import HeaderBack from '../HeaderBack';
import {Container} from "react-bootstrap";

export default function FailPage() {

    return (
        <>
        <HeaderBack />
        <Container style={{height: "80vh"}} className='d-flex align-items-center'>
            <div className="mx-5 p-5 rounded-4 border border-5 border-danger" style={{maxWidth: 20+"em", backgroundColor: "#ff6961 "}}>
                <p className="fw-bold fs-1 text-center">
                   Erro ao reportar o risco.
                </p>
                
            </div>
        </Container>
        </>
    )
}