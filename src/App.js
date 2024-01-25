import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProvider } from './context/AppContext';
import SpentBudget from './components/SpentBudget';
import ExpenseList from './components/ExpenseList';
import DepartmentSelected from './components/DepartmentSelected';
import Location from './components/Location';
import TotalBudget from './components/TotalBudget';

function App() {
    return (
        <AppProvider>
            <div className="App">
                <div class="container">
                    <h1>Company's Budget Allocation</h1>
                    <div className='d-flex gap-2 flex-row flex-wrap'>
                        <TotalBudget></TotalBudget>
                        <SpentBudget></SpentBudget>
                        <Location></Location>
                    </div>
                    <h2>Allocation</h2>
                    <ExpenseList></ExpenseList>
                    <h2>Change Allocation</h2>
                    <DepartmentSelected></DepartmentSelected>
                </div>

            </div>
        </AppProvider>
    );
}

export default App;
