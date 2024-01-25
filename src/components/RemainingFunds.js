import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const RemainingFunds = () => {
    const { Location, remainingFunds } = useContext(AppContext);
    return (<div className="alert alert-success">Remaining Funds: {Location}{remainingFunds}</div>);
}

export default RemainingFunds;