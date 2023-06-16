import React from 'react';
import { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import {Button} from "react-bootstrap";

export default function FormRisco() {
    const baseURL = "http://localhost:3000/chamados";
    const [grupoRisco, setGrupoRisco] = useState([]);
    const [ambiente, setAmbiente] = useState('');
    const [tipoRisco, setTipoRisco] = useState('');
    const [observacao, setObservacao] = useState('');

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

    async function postData() {
        const postData = {
            ambiente: ambiente,
            riscoId: parseFloat(tipoRisco),
            observacao: observacao,
        };

        console.log(postData);

        try {
            await fetch(`${baseURL}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(postData),
            });
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Form>
            <Form.Group>
                <Form.Label>Ambiente: </Form.Label>
                <Form.Control type='text' placeholder='....' value={ambiente} onChange={(e) => setAmbiente(e.target.value)}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Tipo de Risco: </Form.Label>
                <Form.Select onChange={(e) => setTipoRisco(e.target.value)}>
                {grupoRisco?.map((risco, index) => (
                    <option value={risco.id}>{risco.nome}</option>
                ))}
                </Form.Select>
            </Form.Group>
            <Form.Group>
                <Form.Label >Observação: </Form.Label>
                <Form.Control type='text' placeholder='....' value={observacao} onChange={(e) => setObservacao(e.target.value)} />
            </Form.Group>
            <div className="d-flex my-3 justify-content-center">
                <Button className="reportar" onClick={postData}>Reportar Risco</Button>
            </div>
        </Form>
    )
}