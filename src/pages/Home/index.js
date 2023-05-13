import React from 'react';

import {Button, Container, Navbar, Image} from "react-bootstrap";

import Header from '../../components/Header';

import imagemanuncio from '../../img/rampa-de-um-edificio.jpg';

export default function Risco() {
    return (
        <>
            <Header/>
            <Container className="d-flex justify-content-end align-items-center" sticky="top">
                <Image alt="" src={imagemanuncio} width="1500em" height="350em" style={{zIndex:0, position:"relative"}}/>
                <div className="d-flex flex-column justify-content-between text-break me-5 p-5 bg-light opacity-75 rounded-4 border border-5 border-danger" style={{position:"absolute", maxWidth: 25+"em", height: 20+"em"}}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper sem congue ex vulputate, non lacinia purus dictum.
                </p>
                <Button style={{backgroundColor: "#6D1D20", borderColor: "#6D1D20"}}>Reportar Risco</Button>
                </div>
            </Container>

            <Container className="my-3 d-flex flex-column align-items-stretch" style={{maxWidth: 25+"em"}}>
                <Button className="my-2" style={{backgroundColor: "#2FA84F", borderColor: "#2FA84F"}}>Riscos Fisicos</Button>
                <Button className="my-2" style={{backgroundColor: "#DF2D2D", borderColor: "#DF2D2D"}}>Riscos Químicos</Button>
                <Button className="my-2" style={{backgroundColor: "#73432A", borderColor: "#73432A"}}>Riscos Biológicos</Button>
                <Button className="my-2" style={{backgroundColor: "#F3AA18", borderColor: "#F3AA18"}}>Riscos Ergonômicos</Button>
                <Button className="my-2" style={{backgroundColor: "#1A5AFD", borderColor: "#1A5AFD"}}>Riscos de Acidente</Button>
            </Container>
        </>
    );
}