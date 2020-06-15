import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function getSign(amount) {
    if (amount < 0) return "-";
    else return "+";
}

function Transaction({ transaction }) {
    const { deleteTransaction } = useContext(GlobalContext);
    const sign = getSign(transaction.amount);

    return (
        <li className={transaction.amount < 0 ? "minus" : "plus"}>
            {transaction.text}<span>{sign}${Math.abs(transaction.amount).toFixed(2)}</span><button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
        </li>
    );
}

export default Transaction;