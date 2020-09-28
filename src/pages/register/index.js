import React, { useState } from "react";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom'

const RegisterScreen = ({ history }) => {
    const [fields, setFields] = useState({
        name: '',
        cpf: '',
        email: '',
        mobile_phone: '',
        address: '',
        pass: ''
    });


    const handleFormSubmit = event => {
        event.stopPropagation();
        event.preventDefault();

        // alert(`Email: ${fields.email} - Senha: ${fields.pass}`);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: fields.email, pass: fields.pass })
        };
        fetch("http://localhost/aem-api/public/ping", requestOptions)
            .then(response => {
                return response.json();
            })
            .then(result => {
                console.log(result)
                history.push('/dashboard')
            })
            .catch(error => {
                alert('Erro ao cadastrar, tela de simulação! Favor logar com usuário autenticado');
            })
    }

    return ( <
        div className = { "section-login" } >
        <
        form onSubmit = { handleFormSubmit } >
        <
        div className = { "form-row" } >
        <
        h1 style = {
            { color: "gray" }
        } > walletDigital < /h1> <
        label htmlFor = { "name" } > Nome Completo < /label> <
        input type = { "text" }
        id = { "name" }
        value = { fields.name }
        onChange = { event => { setFields({...fields, name: event.target.value }); } }
        required / >
        <
        /div> <
        div className = { "form-row" } >
        <
        label htmlFor = { "cpf" } > CPF < /label> <
        input type = { "text" }
        maxLength = { '11' }
        id = { "cpf" }
        value = { fields.cpf }
        onChange = { event => { setFields({...fields, cpf: event.target.value }); } }
        required / >
        <
        /div> <
        div className = { "form-row" } >
        <
        label htmlFor = { "email" } > E - mail < /label> <
        input type = { "email" }
        id = { "email" }
        value = { fields.email }
        onChange = { event => { setFields({...fields, email: event.target.value }); } }
        required / >
        <
        /div> <
        div className = { "form-row" } >
        <
        label htmlFor = { "mobile_phone" } > Celular < /label> <
        input type = { "text" }
        id = { "mobile_phone" }
        maxLength = { '11' }
        value = { fields.mobile_phone }
        onChange = { event => { setFields({...fields, mobile_phone: event.target.value }); } }
        required / >
        <
        /div> <
        div className = { "form-row" } >
        <
        label htmlFor = { "address" } > Endereço < /label> <
        input type = { "text" }
        id = { "address" }
        value = { fields.address }
        onChange = { event => { setFields({...fields, address: event.target.value }); } }
        required / >
        <
        /div> <
        div className = { "form-row" } >
        <
        label htmlFor = { "text" } > Senha < /label> <
        input type = { "text" }
        id = { "pass" }
        value = { fields.pass }
        onChange = { event => { setFields({...fields, pass: event.target.value }) } }
        required / >
        <
        /div> <
        div className = { "form-row" } >
        <
        button type = { "submit" } > Registrar < /button> < /
        div > <
        /form> < /
        div >
    );
}

export default withRouter(RegisterScreen);