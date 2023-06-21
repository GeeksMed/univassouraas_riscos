import React from 'react';
import HeaderBack from '../HeaderBack';
import {Container} from "react-bootstrap";


export default function SuccessPage() {

    return (
        <>
        <HeaderBack />
        <Container style={{height: "80vh"}} className='d-flex align-items-center'>
            <div className="mx-5 p-5 rounded-4 border border-5 border-success" style={{maxWidth: 20+"em", backgroundColor: "#ebf3e7 "}}>
                <p className="fw-bold fs-2 text-center">
                    Risco reportado com sucesso!
                </p>
                
            </div>
        </Container>
        </>
    )
}