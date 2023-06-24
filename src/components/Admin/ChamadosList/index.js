import React from 'react';
import {Button, Modal} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from "react";

export default function ChamadosList() {
    const baseURL = "http://localhost:3000/chamados/"
    const [chamadosAbertos, setChamadosAbertos] = useState([])
    const [showModal, setShowModal] = useState(false);
    const [modalContext, setModalContext] = useState({
        "id": 0,
        "ambiente": "string",
        "riscoId": 0,
        "observacao": "string",
        "dataCriacao": "2023-06-24T00:23:23.336Z"
      });
    const handleModalClose = () => setShowModal(false);
    const [tratativa, setTratativa] = useState('')

    useEffect(() => {
        fetchChamadosAbertos();
    }, []);

    const fetchChamadosAbertos = async () => {
        try {
            const response = await fetch(`http://localhost:3000/chamados/`);
            const chamadosData = await response.json();
            setChamadosAbertos(chamadosData);
            console.log(chamadosData);
        } catch (error) {
            console.error(error);
        }
    };

    const show_modal = async (chamado) => {
        try {
            setShowModal(true)
            setModalContext(chamado)
        } catch (error) {
            console.error(error)
        }
    }

    async function postData() {
        const postData = {
            id: modalContext.id,
            tratativa: tratativa,
        };
        try {
            const response = await fetch(`${baseURL}${modalContext.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(postData),
                
            });
            handleModalClose()
        } catch (err) {
            console.log(err);
        }
    }

    return ( 
        <div className="d-flex flex-column m-5" style={{width: "-webkit-fill-available"}}>
            <div className="fs-3 mb-3">
                Novos Chamados:
            </div>
            <div className="bg-light p-2" style={{width: "-webkit-fill-available", height: "100%"}}>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>N° do Chamado</th>
                            <th>Data</th>
                            <th>Local</th>
                            <th>Grupo de Risco</th>
                            <th>Tipo de Risco</th>
                            <th>Prazo de atendimento</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {chamadosAbertos?.map((chamado, index) => (
                            <tr className="bg-white">
                                <td key={chamado.id}><a href="#" className="px-2">{chamado.id}</a></td>
                                <td>{chamado.dataCriacao}</td>
                                <td>{chamado.ambiente}</td>
                                <td>{chamado.riscoId}</td>
                                <td>{chamado.riscoId}</td>
                                <td>N sei</td>
                                <td><Button className="reportar" onClick={(e)=>{show_modal(chamado)}}>Encerrar chamado</Button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Modal show={showModal} onHide={handleModalClose}>
                <Modal.Dialog>
                        <Modal.Header closeButton>
                            <Modal.Title>Chamado numero:{modalContext.riscoId}</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            
                        <Form.Group className="form-group mx-1 my-2">
                            <Form.Label className="fs-4 m-0">Tratativa: </Form.Label>
                            <Form.Control className="text-start" as="textarea" placeholder='....' rows="4" style={{resize: "none"}} value={tratativa} onChange={(e) => setTratativa(e.target.value)} />
                        </Form.Group>

                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary">Close</Button>
                            <Button className="reportar" onClick={postData}>Concluir</Button>
                        </Modal.Footer>
                </Modal.Dialog>
           </Modal>
        </div> 
    );
}