import React from 'react';
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import HeaderBack from "../../components/HeaderBack";
import Form from '../../components/FormRisco';

export default function FormPage() {
    return (
        <div>
            <HeaderBack />
            <Container>
                <Form />
            </Container>
        </div>
    )
}
