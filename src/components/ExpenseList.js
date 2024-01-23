import React, { useContext } from 'react';
import BudgetItem from './BudgetItem';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
    const { expenses } = useContext(AppContext);

    return (
        <table className='table'>
            <thead className='thead-light'>
                <tr>
                    <th scope='col'>Department</th>
                    <th scope='col'>Allocated Budget</th>
                    <th scope='col'>Increase by 10</th>
                    <th scope='col'>Decrease by 10</th>
                </tr>
            </thead>
            <tbody>
                {expenses.map((expense => (
                    <BudgetItem id={expense.id} key={expense.id} name={expense.name} budget={expense.budget}></BudgetItem>
                )))}
            </tbody>
        </table>
    );
};

export default ExpenseList;
