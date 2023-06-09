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
            setChamadosAbertos(chamadosData.filter(chamado =>(chamado.dataExclusao == null)));
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
            dataExclusao: new Date()
        };
        console.log(postData)
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
                            <th style={{width: '9%'}}>N° do Chamado</th>
                            <th style={{width: '10%'}}>Data</th>
                            <th style={{width: '15%'}}>Local</th>
                            <th style={{width: '9%'}}>Grupo de Risco</th>
                            <th style={{width: '9%'}}>Tipo de Risco</th>
                            <th style={{width: '12%'}}>Prazo de atendimento</th>
                            <th style={{width: '11%'}}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {chamadosAbertos?.map((chamado, index) => (
                            <tr className="bg-white">
                                <td className="py-3 fw-bold" key={chamado.id} style={{color: '#6D1D20'}}> {chamado.id}</td>
                                <td className="py-3" >{chamado.dataCriacao}</td>
                                <td className="py-3" >{chamado.ambiente}</td>
                                <td className="py-3" >{chamado.riscoId}</td>
                                <td className="py-3" >{chamado.riscoId}</td>
                                <td className="py-3" >N sei</td>
                                <td className=""><Button className="reportar bg-reportar" onClick={(e)=>{show_modal(chamado)}}>Encerrar chamado</Button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Modal show={showModal} onHide={handleModalClose}>
                <Modal.Dialog style={{width: "100%", height: "100%", margin: "0"}}>
                        <Modal.Header closeButton>
                            <Modal.Title className="fs-4">Chamado número:<span className="px-2 fs-4">{modalContext.riscoId}</span></Modal.Title>
                        </Modal.Header>

                        <Modal.Body className="mx-2 mb-2 p-0">
                            <Form.Group className="form-group mx-1 my-1">
                                <Form.Label className="fs-4 m-0">Tratativa: </Form.Label>
                                <Form.Control className="text-start" as="textarea" placeholder='....' rows="4" style={{resize: "none"}} value={tratativa} onChange={(e) => setTratativa(e.target.value)} />
                            </Form.Group>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleModalClose}>Close</Button>
                            <Button className="reportar bg-reportar" onClick={postData}>Concluir</Button>
                        </Modal.Footer>
                </Modal.Dialog>
           </Modal>
        </div> 
    );
}