import React from "react";
import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm";

function NewExpense(props){

    const saveExpenseHandler=(formExpenseData)=>{
        const newExpenseData={
            ...formExpenseData,
            id:"e"+(Math.random()).toString()
        }

        props.onSaveNewExpenseData(newExpenseData);
    };



    return(
        <div className="new-expense">
            <NewExpenseForm onSaveExpenseData={saveExpenseHandler} />
        </div>
    );

};

export default NewExpense;