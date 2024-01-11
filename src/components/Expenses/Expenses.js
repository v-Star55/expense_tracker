
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";


function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2021");

  //  We can pass the filterYear back to the Expense Filter to set the current selected year that is 2023

  const onFilterChangeHandler = (changedYear) => {
    setFilterYear(changedYear);
  };
  
  const filterExpenseItem=props.item.filter(year=>
    year.date.getFullYear().toString()===filterYear
  );
  // console.log(filterExpenseItem);
 
  // What if year doesn't have any expense , so hanling it .

 





  return (
    <Card className="expenses">

      <ExpenseFilter initialFilterYear={filterYear} onChangeFilter={onFilterChangeHandler} />

      <ExpensesChart expenses={filterExpenseItem}/>

      <ExpensesList items={filterExpenseItem}/>
        
     
    </Card>
  );
}

export default Expenses;