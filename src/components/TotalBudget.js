import { useContext } from "react"
import { AppContext } from "../context/AppContext"

const TotalBudget = () => {
    const { totalBudget } = useContext(AppContext);
    return (
        <div className="alert alert-primary d-flex flex-row">Total Budget: {totalBudget}<input className="form-control"></input></div>
    )
}
export default TotalBudget;