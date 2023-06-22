import React from 'react';
import { Container } from "react-bootstrap";
import SideBar from "../../components/Admin/SideBar";
import ChamadosList from '../../components/Admin/ChamadosList';


export default function AdminPage() {
    

    return (
        <div className="d-flex justify-items-start justify-content-start">
            <SideBar/>
            <ChamadosList />
        </div>
    )
}
