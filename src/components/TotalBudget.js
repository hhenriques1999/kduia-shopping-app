import { useContext } from "react"
import { AppContext } from "../context/AppContext"

const TotalBudget = () => {
    const { dispatch, totalBudget, Location, totalExpenses } = useContext(AppContext);

    const handleBudgetChange = (event) => {
        let budget = parseInt(event.target.value, 10);
        
        if (!isNaN(budget)) {
            if (budget > 20000) {
                alert(`The value cannot exceed ${Location}20000`);
            }
            else if (budget < 0) {
                alert("The value cannot be below 0");
            }
            else {
                console.log(totalExpenses);
                if (budget < totalExpenses) {
                    alert("You cannot reduce the budget value lower than the spending");
                }
                else {
                    const item = {
                        totalBudget: budget,
                    };

                    dispatch({
                        type: 'CHG_TOTAL_BUDGET',
                        payload: item,
                    });
                }
            }
        }
        else {
            alert("You need to input a number for the total budget!");
        }
    };

    return (
        <div className="alert alert-primary d-flex flex-row">
            Total Budget {Location}{totalBudget}:
            <input
                value={totalBudget}
                placeholder={totalBudget}
                className="form-control"
                onChange={handleBudgetChange}
                type="number"
            />
        </div>
    );
}
export default TotalBudget;