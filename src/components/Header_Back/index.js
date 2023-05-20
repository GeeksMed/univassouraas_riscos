import React from 'react';

import logouni from '../../img/logo-no-background_quad.png';
import bback from '../../img/caret-left-fill.svg';
import {Container, Image, Navbar} from "react-bootstrap";

export default function Header_Back() {
    return (
        <>
            <Navbar bg="light" sticky="top" onClick={event => window.location.href='/'} >
                <Container className="px-3 justify-items-center justify-content-center">
                    <Navbar.Brand href="#" className="m-0">
                        <Image
                            alt=""
                            src={bback}
                            width="30em"
                            className="p-0 m-2"
                        />
                        <Image
                            alt=""
                            src={logouni}
                            width="50em"
                            className="p-0 m-0"
                        />
                    </Navbar.Brand>
                    <Navbar.Text className="px-2 fs-4" style={{color: "#000"}}>Univassouras Segura</Navbar.Text>
                </Container>
            </Navbar>
        </>
    );
}