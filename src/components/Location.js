import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Location = () => {
    const { dispatch, Location } = useContext(AppContext);

    const [dropdownShow, setDropdownShow] = useState(false);

    const changeLocation = (val) => {
        dispatch({
            type: 'CHG_LOCATION',
            payload: val,
        })
    }

    const CurrencyIndicator = () => {
        if (Location === "$") {
            return (
                <>Currency ($ Dollar)</>
            );
        } else if (Location === "£") {
            return (
                <>Currency (£ Pound)</>
            );
        } else if (Location === "₹") {
            return (
                <>Currency (₹ Ruppee)</>
            )
        } else if (Location === "€") {
            return (
                <>Currency (€ Euro)</>
            )
        } else (
            <>Currency (? Invalid)</>
        )
    }

    return (
        <div className='alert alert-success'>
            <div className="dropdown">
                <button className="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" onClick={() => setDropdownShow(!dropdownShow)} aria-expanded="false">
                    <CurrencyIndicator></CurrencyIndicator>
                </button>
                <ul className={`dropdown-menu ${dropdownShow ? "show" : ""}`}>
                    <li><button type="button" className="dropdown-item" href="#" value="£" onClick={(event) => changeLocation(event.target.value)}>£ Pound</button></li>
                    <li><button type="button" className="dropdown-item" href="#" value="$" onClick={(event) => changeLocation(event.target.value)}>$ Dollar</button></li>
                    <li><button type="button" className="dropdown-item" href="#" value="₹" onClick={(event) => changeLocation(event.target.value)}>₹ Ruppee</button></li>
                    <li><button type="button" className="dropdown-item" href="#" value="€" onClick={(event) => changeLocation(event.target.value)}>€ Euro</button></li>
                </ul>
            </div>
        </div>


        // <div classNameName='alert alert-secondary'>Currency {
        //     <select name="Location" id="Location" onChange={(event) => changeLocation(event.target.value)}>
        //         <option value="£"> £ Pound</option>
        //         <option value="₹"> ₹ Ruppee</option>
        //         <option value="€"> € Euro</option>
        //         <option value="$"> $ Dollar</option>
        //     </select>
        // }
        // </div>
    );
};

export default Location;