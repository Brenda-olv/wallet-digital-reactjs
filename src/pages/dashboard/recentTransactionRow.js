import React from "react";

export const RecentTransactionRow = ({data}) => {
    return (
        <tr className={"tr-mb"}>
            <td style={{textAlign: 'center'}}><button type={"button"} className={"option"}>+</button></td>
            <td>
                <div className={"date-row"}>
                    <span className={"date-month"}>{data.date_month}</span>
                    <span className={"date-day"}>{data.date_day}</span>
                </div>
            </td>
            <td><span className={"action"}>{data.action}</span></td>
            <td>
                <span className={"amount"} style={data.type === 'received' ? {color: '#19b74a'} : {color: '#ff2020'}}>
                    {data.type === 'received' ? '+' : '-'}{data.amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
            </td>
        </tr>
    )
}