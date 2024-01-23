import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaPlusCircle, FaTimesCircle } from 'react-icons/fa';

const BudgetItem = (props) => {
    const { dispatch, Location } = useContext(AppContext);

    // CHANGE LOGIC
    const handleDeleteItem = () => {
        const item = {
            name: props.name,
        };

        dispatch({
            type: 'DELETE_ITEM',
            payload: item,
        });
    };

    return (
        <tr>
            <td>{props.name}</td>
            <td>{Location}{parseInt(props.budget)}</td>
            {/* TODO ONCLICK */}
            <td><FaPlusCircle size='2.2em' color="green"></FaPlusCircle></td>
            <td><FaTimesCircle size='2.2em' color="red" onClick={handleDeleteItem}></FaTimesCircle></td>
        </tr>
    )
};

export default BudgetItem;
