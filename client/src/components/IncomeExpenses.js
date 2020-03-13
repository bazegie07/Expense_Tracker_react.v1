import React, { useContext }from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';
import { number } from 'prop-types';
import {Spring, animated} from 'react-spring/renderprops';

export const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    const expense = (
      amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
        -1
    ).toFixed(2);


    return (

        <Spring
        from={{opacity: 0, }}
        to={{ opacity: 1, }}
        config={{delay:1000, duration: 1000}}
        >
            { props => (
                <div style={props}>
                    <div className="inc-exp-container">
                <div>
                    <h4>Income</h4>
                    <p className="money plus">${numberWithCommas(income)}</p>
                </div>
                <div>
                    <h4>Expense</h4>
                    <p className="money minus">${numberWithCommas(expense)}</p>
                </div>
                </div>
                </div>
            )}
        </Spring>
        
    
    )
}

