import React from 'react';

import {Button, Container, Image} from "react-bootstrap";

import Header from '../../components/Header';
import ReportarRisco from '../../components/ReportarRisco';

import imagemanuncio from '../../img/rampa-de-um-edificio.jpg';

import {Link} from "react-router-dom";

export default function Risco() {
    return (
        <>
            <Header/>
            <Container className="d-flex justify-content-end align-items-center p-0" sticky="top">
                <Image alt="" src={imagemanuncio} width="100%" height="350em" style={{zIndex:0, position:"relative"}} className="m-0"/>
                <div className="d-flex flex-column justify-content-between text-break mx-5 p-5 bg-light opacity-75 rounded-4 border border-5 border-danger" style={{position:"absolute", maxWidth: 20+"em", height: 20+"em"}}>
                    <p className="">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper sem congue ex vulputate, non lacinia purus dictum.
                    </p>
                    <ReportarRisco/>
                </div>
            </Container>

            <Container className="my-3 d-flex flex-column align-items-stretch" style={{maxWidth: 25+"em"}}>
                <Button className="my-2 border-success" style={{backgroundColor: 'var(--riscoFisico)'}} onClick={event =>  window.location.href='/risco-fisico'}>Riscos Fisicos</Button>
                <Button className="my-2 border-danger" style={{backgroundColor: 'var(--riscoQuimico)'}} onClick={event =>  window.location.href='/risco-quimico'}>Riscos Químicos</Button>
                <Button className="my-2" style={{backgroundColor: 'var(--riscoBiologico)', borderColor: 'var(--riscoBiologico)'}} onClick={event =>  window.location.href='/risco-biologico'}>Riscos Biológicos</Button>
                <Button className="my-2 border-warning" style={{backgroundColor: 'var(--riscoErgonomico)'}} onClick={event =>  window.location.href='/risco-ergonomico'}>Riscos Ergonômicos</Button>
                <Button className="my-2 border-primary" style={{backgroundColor: 'var(--riscoAcidente)'}} onClick={event =>  window.location.href='/risco-acidente'}>Riscos de Acidente</Button>
            </Container>
        </>
    );
}