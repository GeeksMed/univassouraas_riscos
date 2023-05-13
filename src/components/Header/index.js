import React from 'react';

import logouni from '../../img/logo-no-background.png';
import {Container, Image, Navbar} from "react-bootstrap";

export default function Header() {
    return (
        <>
            <Navbar bg="light" sticky="top">
                <Container className="justify-items-center justify-content-center">
                    <Navbar.Brand href="#home">
                        <Image
                            alt=""
                            src={logouni}
                            width="90"
                            className=""
                        />
                    </Navbar.Brand>
                    <Navbar.Text className="fs-3 fw-medium">UniVassouras Segura</Navbar.Text>
                </Container>
            </Navbar>
        </>
    );
}