import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addWalletAmount } from '../../actions';
import { setWallet } from '../../actions';
import { RecentTransactionRow } from './recentTransactionRow';

const DashboardScreen = ({ history, wallet, setWallet, addWalletAmount }) => {
        const [user, setUser] = useState(null)

        useEffect(() => {
            fetch("http://localhost/wallet-digital/_responses/wallet.php")
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error('Something went wrong');
                    }
                })
                .then(result => {
                    console.log(result)
                    setWallet(result.wallet)
                    setUser(result.user)
                })
                .catch(error => {
                    console.log(error)
                })
        }, [])

        const handleAddAmount = () => {
            addWalletAmount(100);
        }

        return ( <
                div className = { "section-dashboard" } > {
                    user !== null && < div className = { "row bottom-divider" } >
                    <
                    div className = { "column" } >
                    <
                    span > < h1 > User Dashboard < /h1></span >
                    <
                    /div> <
                    div className = { "column" } >
                    <
                    span className = { "user_name" } > { user.name } < /span> <
                    span className = { "user_email" } > { user.email } < /span> < /
                    div > <
                    /div>} {
                    wallet !== null && < div className = { "row" } >
                    <
                    div className = { "column p-0 pr" }
                    style = {
                        { width: '30%', justifyContent: 'flex-start' }
                    } >
                    <
                    div className = { "row mt" } >
                    <
                    div className = { "card" } >
                    <
                    span className = { "card-title" } > Valor Disponível < /span> <
                    span className = { "money-value" } > { wallet.amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) } < /span> <
                    span className = { "money-type" } > BRL < /span> < /
                    div > <
                    /div> <
                    div className = { "row" } >
                    <
                    button type = { "button" }
                    className = { "btn-action" }
                    style = {
                        { width: '49%' }
                    }
                    onClick = { handleAddAmount } > Aumente seu Limite < /button> <
                    button type = { "button" }
                    className = { "btn-action" }
                    style = {
                        { width: '49%', background: '#1d94af' }
                    } > Transferências < /button> < /
                    div > <
                    /div> <
                    div className = { "column p-0 pl" }
                    style = {
                        { width: '70%', justifyContent: 'flex-start' }
                    } >
                    <
                    div className = { "row mt" } >
                    <
                    div className = { "card" } >
                    <
                    span className = { "card-title" } > Transações Recentes < /span> <
                    div className = { "row" } >
                    <
                    table className = { "recent-transactions" } >
                    <
                    thead >
                    <
                    tr >
                    <
                    th style = {
                        { width: '7%' }
                    } > < /th> <
                    th > Data < /th> <
                    th > Ação < /th> <
                    th > Valor < /th> < /
                    tr > <
                    /thead> <
                    tbody > {
                        wallet.transactions.map(transaction => < RecentTransactionRow data = { transaction }
                            />)} < /
                            tbody > <
                            /table> < /
                            div > <
                            /div> < /
                            div > <
                            /div> < /
                            div >
                        } <
                        /div>
                    );
                }

                const mapStateToProps = store => ({
                    user: store.userStore.user,
                    wallet: store.walletStore.wallet,
                });

                const mapDispatchToProps = dispatch => bindActionCreators({ setWallet, addWalletAmount }, dispatch);

                export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreen);