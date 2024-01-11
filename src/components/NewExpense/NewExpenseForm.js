import React , {useState}from "react";
import "./NewExpenseForm.css";

function NewExpenseForm(props){
    const [enteredTitle , setEnteredTitle]=useState("");
    const [enteredAmount , setEnteredAmount]=useState("");
    const [enteredDate , setEnteredDate]=useState("");

    // ONE STATE 

    // const [userInput , setUserInput]= useState({
    //     enteredTitle:"",
    //     enteredAmount:"",
    //     enteredDate:"",
    //  });


    const TitleChangeHandler=(event)=>{
        setEnteredTitle(event.target.value);

        // this is the method used when we use one state also this ensures that it get latest upadated state object automatically and then we can override it with our value. Also whenever our states depends upon previous state update.

        // setUserInput((prevState)=>{
        //     return{...prevState, enteredTitle:event.target.value};
        // });
    };
    
    const AmountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value);

        // setUserInput((prevState)=>{
        //     return{...prevState, enteredAmount:event.target.value};
        // });
    };

    const DateChangeHandler=(event)=>{
        setEnteredDate(event.target.value);

        // setUserInput((prevState)=>{
        //     return{...prevState, enteredDate:event.target.value};
        // });
    };

    
    const submitHandler=(event)=>{
        event.preventDefault();
        console.log(enteredTitle.charAt(0).toUpperCase())

        const expenseData ={
            title:enteredTitle,
            amount:+enteredAmount,
            date : new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);

        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    };


    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" required value={enteredTitle} onChange={TitleChangeHandler}/>
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="1" step="any" value={enteredAmount} required onChange={AmountChangeHandler}/>
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2023-12-31" value={enteredDate} required onChange={DateChangeHandler}/>
                </div>

                <div className="new-expense__actions"><button type="submit">Add Expense</button></div>
            </div>
        </form>
    );

};

export default NewExpenseForm;