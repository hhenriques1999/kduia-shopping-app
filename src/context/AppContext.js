import React, { createContext, useReducer } from 'react';

export const AppReducer = (state, action) => {
    let new_expenses = [];

    switch (action.type) {
        case 'ADD_QUANTITY':
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

        case 'RED_QUANTITY':
            state.expenses.map((expense) => {
                if (expense.namme === action.payload.name) {
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
    Location: '£'
}

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const totalExpenses = state.expenses.reduce((total, item) => {
        return (total = total + (item.unitprice * item.budget));
    }, 0);
    state.CartValue = totalExpenses;

    return (
        <AppContext.Provider value={{
            expenses: state.expenses,
            CartValue: state.CartValue,
            dispatch,
            Location: state.Location
        }}
        >
            {props.children}
        </AppContext.Provider>
    );
}