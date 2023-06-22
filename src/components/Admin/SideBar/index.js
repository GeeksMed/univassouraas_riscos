import React from 'react';
import {Container, Image, Navbar} from "react-bootstrap";
import logouni from '../../../img/logo-color.png'

export default function SideBar() {
    return (
        <>
            <Navbar bg="light" className='d-flex flex-column'>
                <Container className="d-flex flex-column px-3 justify-items-center justify-content-center">
                    <Navbar.Brand href="#" className="m-0">
                        <Image
                                alt=""
                                src={logouni}
                                width="200em"
                                className="p-0 m-0"
                            />
                    </Navbar.Brand>
                    <Navbar.Text className="px-2 fs-5" style={{color: "#000"}}>Novos Chamados</Navbar.Text>
                    <Navbar.Text className="px-2 fs-5" style={{color: "#000"}}>Em tratamento</Navbar.Text>
                    <Navbar.Text className="px-2 fs-5" style={{color: "#000"}}>Finalizados</Navbar.Text>
                    <Navbar.Text className="px-2 fs-5" style={{color: "#000"}}>Configurações</Navbar.Text>
                </Container>
                <Container>
                    <p>Ajuda</p>
                </Container>
            </Navbar>
        </>
    );
}