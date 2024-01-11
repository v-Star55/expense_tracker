
import React,{ useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const Dummy_Expense = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'Iphone',
    amount: 1094.67,
    date: new Date(2021, 8, 13),
  },
  {
    id: 'e5',
    title: 'New Desk(Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];


function App() {


  const[expense, setExpense]=useState(Dummy_Expense)

  const addExpenseData=newExpenseItem=>{

    setExpense(
      (prevExpense)=>{
        return[newExpenseItem,...prevExpense]
      });

  
  };



  return (
    <div>
      <NewExpense onSaveNewExpenseData={addExpenseData} />
      <Expenses item={expense} />

    </div>
  );
}

export default App;
