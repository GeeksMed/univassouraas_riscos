import React from 'react';
import { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import {Button} from "react-bootstrap";

export default function FormRisco() {
    const [grupoRisco, setGrupoRisco] = useState([]);

    useEffect(() => {
        fetchGrupoRisco();
    }, []);
    const fetchGrupoRisco = async () => {
        try {
            const response = await fetch(`http://localhost:3000/grupos-risco/`);
            const riscosData = await response.json();
            setGrupoRisco(riscosData);
            console.log(riscosData)
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <div className="d-flex row justify-content-center">
                <h1 className="text-center fw-normal my-3 display-5">
                    Reportar Risco
                </h1>
                <Form className="border rounded bg-light border-danger" style={{width: "25rem"}}>
                    <Form.Group className="form-group mx-1 mt-3">
                        <Form.Label className="fs-4 m-0">Ambiente: </Form.Label>
                        <Form.Control type='text' placeholder='....' />
                    </Form.Group>
                    <Form.Group className="form-group mx-1 my-2">
                        <Form.Label className="fs-4 m-0">Tipo de Risco: </Form.Label>
                        <Form.Select className="form-control">
                        {grupoRisco?.map((risco, index) => (
                            <option value={risco.id}>{risco.nome}</option>
                        ))}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="form-group mx-1 my-2">
                        <Form.Label className="fs-4 m-0">Observações: </Form.Label>
                        <Form.Control className="text-start" as="textarea" placeholder='....' rows="4" style={{resize: "none"}}/>
                    </Form.Group>
                    <div className="d-flex my-3 justify-content-center">
                        <Button className="reportar bg-reportar" type={'subimit'}>Reportar Risco</Button>
                    </div>
                </Form>
            </div>
        </>
    )
}