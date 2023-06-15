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
        <Form>
            <Form.Group>
                <Form.Label>Ambiente: </Form.Label>
                <Form.Control type='text' placeholder='....' />
            </Form.Group>
            <Form.Group>
                <Form.Label>Tipo de Risco: </Form.Label>
                <Form.Select>
                {grupoRisco?.map((risco, index) => (
                    <option value={risco.id}>{risco.nome}</option>
                ))}
                </Form.Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>Observação: </Form.Label>
                <Form.Control type='text' placeholder='....' />
            </Form.Group>
            <div className="d-flex my-3 justify-content-center">
                <Button className="reportar" type={'subimit'}>Reportar Risco</Button>
            </div>
        </Form>
    )
}