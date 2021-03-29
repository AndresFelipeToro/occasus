import React, { useState } from 'react'
import Login from './Login'
import alertify from 'alertifyjs'
import '../components/styles/alertify.min.css'
import { Redirect, useHistory } from 'react-router-dom'
import {browserhistory} from 'react-router';
import { Link } from 'react-router-dom'


const ProductoContainer = () => {

    const [status, setStatus] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        let newStatus = {
            ...status,
            [e.target.name]: e.target.value
        }
        setStatus(newStatus)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(status),
        }
        let res = await fetch('http://localhost:8000/api/signin', config)
        let json = await res.json()
        console.log(json)
        if (json.status === 'success') {
            alertify.alert('Occásus Informa', 'Has iniciado sesión');
            localStorage.setItem('token', (json.data.token));
            var history = require('browser-history')
            history('/pedidos')
            window.location.reload(true);
        } else {
            alertify.alert('Occásus Informa', json.error);
        }

    }

    return <Login
        form={status}
        onChange={handleChange}
        onSubmit={handleSubmit}
    />
}

export default ProductoContainer