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
            const response = await fetch(`http://localhost:3000/riscos/`);
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
       <>
            <div className="d-flex row justify-content-center">
                <h1 className="text-center fw-normal my-3 display-5">
                    Reportar Risco
                </h1>
                <Form className="border rounded bg-light border-danger" style={{width: "22rem"}}>
                    <Form.Group className="form-group mx-1 mt-3">
                        <Form.Label className="fs-4 m-0">Ambiente: </Form.Label>
                        <Form.Control type='text' placeholder='....' value={ambiente} onChange={(e) => setAmbiente(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="form-group mx-1 my-2">
                        <Form.Label className="fs-4 m-0">Tipo de Risco: </Form.Label>
                        <Form.Select className="form-control" onChange={(e) => setTipoRisco(e.target.value)}>
                        {grupoRisco?.map((risco, index) => (
                            <option value={risco.id}>{risco.nome}</option>
                        ))}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="form-group mx-1 my-2">
                        <Form.Label className="fs-4 m-0">Observações: </Form.Label>
                        <Form.Control className="text-start" as="textarea" placeholder='....' rows="4" style={{resize: "none"}} value={observacao} onChange={(e) => setObservacao(e.target.value)} />
                    </Form.Group>
                    <div className="d-flex my-3 justify-content-center">
                        <Button className="reportar bg-reportar" onClick={postData}>Reportar Risco</Button>
                    </div>
                </Form>
            </div>
        </>
    )
}