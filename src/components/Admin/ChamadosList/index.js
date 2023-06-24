import React from 'react';
import {Container, Image, Navbar} from "react-bootstrap";
import { useState, useEffect } from "react";

export default function ChamadosList() {
    const [chamadosAbertos, setChamadosAbertos] = useState([])

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

    return ( 
        <div>
            <div>
                Novos Chamados:
            </div>
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>N° do Chamado</th>
                            <th>Data</th>
                            <th>Local</th>
                            <th>Grupo de Risco</th>
                            <th>Tipo de Risco</th>
                            <th>Prazo de atendimento</th>
                        </tr>
                    </thead>
                    <tbody>
                        {chamadosAbertos?.map((chamado, index) => (
                            <tr>
                                <td key={chamado.id}>{chamado.id}</td>
                                <td>{chamado.dataCriacao}</td>
                                <td>{chamado.ambiente}</td>
                                <td>{chamado.riscoId}</td>
                                <td>{chamado.riscoId}</td>
                                <td>N sei</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
           
        </div> 
    );
}