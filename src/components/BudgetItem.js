import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa';

const BudgetItem = (props) => {
    const { dispatch, Location, remainingFunds } = useContext(AppContext);

    const handleReduceBudget = () => {
        const item = {
            name: props.name,
        };

        dispatch({
            type: 'RED_BUDGET_10',
            payload: item,
        });
    };

    const handleIncreaseBudget = () => {
        const item = {
            name: props.name,
        };

        if (remainingFunds < 10) {
            alert(`The value cannot exceed the remaining funds: ${Location}${remainingFunds}`);
        }
        else {
            dispatch({
                type: 'ADD_BUDGET_10',
                payload: item,
            });
        }
    };

    return (
        <tr>
            <td>{props.name}</td>
            <td>{Location}{parseInt(props.budget)}</td>
            <td><FaPlusCircle size='2.2em' color="green" onClick={handleIncreaseBudget}></FaPlusCircle></td>
            <td><FaMinusCircle size='2.2em' color="red" onClick={handleReduceBudget}></FaMinusCircle></td>
        </tr>
    )
};

export default BudgetItem;
