import React from 'react';
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Header from '../../components/Header';
import Form from '../../components/FormRisco';

export default function FormPage() {
    return (
        <div>
            <Header />
            <Container>
                <Form />
            </Container>
        </div>
    )
}
