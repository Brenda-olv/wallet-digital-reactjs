import React, { useState } from "react";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setUser } from '../../actions';

const LoginScreen = ({ history, setUser }) => {
    const [fields, setFields] = useState({ email: '', pass: '' });

    const handleFormSubmit = event => {
        event.stopPropagation();
        event.preventDefault();

        // alert(`Email: ${fields.email} - Senha: ${fields.pass}`);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: fields.email, pass: fields.pass })
        };
        fetch("http://localhost/wallet-digital/_responses/login.php")
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong');
                }
            })
            .then(result => {
                console.log(result)
                setUser(result.user)
                history.push('/dashboard')
            })
            .catch(error => {
                alert('Credenciais invalidas');
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
        label htmlFor = { "pass" } > Senha < /label> <
        input type = { "password" }
        id = { "pass" }
        value = { fields.pass }
        onChange = { event => { setFields({...fields, pass: event.target.value }) } }
        required / >
        <
        /div> <
        div className = { "form-row" } >
        <
        button type = { "submit" } > Entrar < /button> < /
        div > <
        div className = { "form-footer" } >
        <
        span > Não é cadastrado ? < Link to = "/register" > Clique aqui < /Link></span >
        <
        /div> < /
        form > <
        /div>
    );
}

const mapDispatchToProps = dispatch => bindActionCreators({ setUser }, dispatch);

export default connect(null, mapDispatchToProps)(withRouter(LoginScreen));