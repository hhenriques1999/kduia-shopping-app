import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const DepartmentSelected = (props) => {
    const { dispatch } = useContext(AppContext);
    const [name, setName] = useState('');
    const [value, setValue] = useState('');
    const [action, setAction] = useState('');

    const submitEvent = () => {
        const item = {
            name: name,
            budget: parseInt(value),
        };

        if (action === "Reduce") {
            dispatch({
                type: 'RED_BUDGET',
                payload: item
            })
        } else {
            dispatch({
                type: 'ADD_BUDGET',
                payload: item
            });
        }
    };

    return (
        <div>
            <div className='row'>
                <div className='input-group mb-3' style={{ marginLeft: '2rem' }}>
                    <div className='input-group-prepend'>
                        <label className='input-group-text' htmlFor="inputGroupSelect01">Department</label>
                    </div>
                    <select className='custom-select' id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                        <option defaultValue>Choose...</option>
                        <option value="Marketing" name="Marketing">Marketing</option>
                        <option value="Finance" name="Finance">Finance</option>
                        <option value="Sales" name="Sales">Sales</option>
                        <option value="Human Resource" name="Human Resource">Human Resource</option>
                        <option value="IT" name="IT">IT</option>
                    </select>
                    <div className='input-group-preprend' style={{ marginLeft: '2rem' }}>
                        <label className='input-group-text' htmlFor='inputGroupSelect02'>Budget</label>
                    </div>
                    <select className='custom-select' id='inputGroupSelect02' onChange={(event) => setAction(event.target.value)}>
                        <option defaultValue value="Add" name="Add">Add</option>
                        <option value="Reduce" name="Reduce">Reduce</option>
                    </select>
                    <span className='eco'></span>
                    <input
                        required='required'
                        type='number'
                        id='cost'
                        value={value}
                        className='form-control'                        
                        onChange={(event) => setValue(event.target.value)}
                    ></input>
                    <button className='btn btn-primary' onClick={submitEvent}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
};

export default DepartmentSelected;
