import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const SpentBudget = () => {
    const { expenses, Location } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, expense) => {
        return total += expense.budget;
    }, 0);
    return (
        <div className='alert alert-primary'>
            <span>Spent so far: {Location}{totalExpenses}</span>
        </div>
    );
};
export default SpentBudget;