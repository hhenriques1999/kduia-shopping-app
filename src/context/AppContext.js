import React, { createContext, useReducer } from 'react';

export const AppReducer = (state, action) => {
    let new_expenses = [];

    switch (action.type) {
        case 'CHG_TOTAL_BUDGET':
            state.totalBudget = action.payload.totalBudget;
            action.type = "DONE";
            return {
                ...state
            };

        case 'ADD_BUDGET_10':
            state.expenses.map((expense) => {
                if (expense.name === action.payload.name) {
                    expense.budget = expense.budget + 10;
                }
                new_expenses.push(expense);
                return true;
            })
            state.expenses = new_expenses;
            action.type = "DONE";
            return {
                ...state,
            };

        case 'ADD_BUDGET':
            state.expenses.map((expense) => {
                if (expense.name === action.payload.name) {
                    expense.budget = expense.budget + action.payload.budget;
                }
                new_expenses.push(expense);
                return true;
            })
            state.expenses = new_expenses;
            action.type = "DONE";
            return {
                ...state,
            };

        case 'RED_BUDGET':
            state.expenses.map((expense) => {
                if (expense.name === action.payload.name) {
                    expense.budget = expense.budget - action.payload.budget;
                }
                expense.budget = expense.budget < 0 ? 0 : expense.budget
                new_expenses.push(expense)
                return true;
            })
            state.expenses = new_expenses;
            action.type = "DONE";
            return {
                ...state,
            };

        case 'RED_BUDGET_10':
            state.expenses.map((expense) => {
                if (expense.name === action.payload.name) {
                    expense.budget = expense.budget - 10;
                }
                expense.budget = expense.budget < 0 ? 0 : expense.budget
                new_expenses.push(expense)
                return true;
            })
            state.expenses = new_expenses;
            action.type = "DONE";
            return {
                ...state,
            };

        case 'DELETE_ITEM':
            state.expenses.map((expense) => {
                if (expense.name === action.payload.name) {
                    expense.budget = 0;
                }
                new_expenses.push(expense);
                return true;
            })
            state.expenses = new_expenses;
            action.type = "DONE";
            return {
                ...state,
            };

        case 'CHG_LOCATION':
            action.type = "DONE";
            state.Location = action.payload;
            return {
                ...state,
            };

        default:
            return state;
    }
};

const initialState = {
    expenses: [
        { id: "Marketing", name: "Marketing", budget: 0 },
        { id: "Finance", name: "Finance", budget: 0 },
        { id: "Sales", name: "Sales", budget: 0 },
        { id: "Human Resource", name: "Human Resource", budget: 0 },
        { id: "IT", name: "IT", budget: 0 },
    ],
    Location: '£',
    totalBudget: 0,
    remainingFunds: 0,
}

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const totalExpenses = state.expenses.reduce((total, item) => {
        return (total = total + item.budget);
    }, 0);

    state.totalExpenses = totalExpenses;

    state.remainingFunds = state.totalBudget - totalExpenses;

    return (
        <AppContext.Provider value={{
            expenses: state.expenses,
            totalExpenses: state.totalExpenses,
            totalBudget: state.totalBudget,
            remainingFunds: state.remainingFunds,
            dispatch,
            Location: state.Location
        }}
        >
            {props.children}
        </AppContext.Provider>
    );
}