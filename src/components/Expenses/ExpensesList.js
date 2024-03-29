import React from 'react'
import ExpenseItem from './ExpenseItem'
import "./ExpensesList.css"

const ExpensesList = (props) => {

    if (props.items.length===0) {
        return <h2 className='expenses-list__fallback'>Found No Expense !!</h2>
    }
     
  return (
    <div className='expenses-list'>
       {props.items.map((expensesItems) => (
          
          <ExpenseItem
            key={expensesItems.id}
            title={expensesItems.title}
            amount={expensesItems.amount}
            date={expensesItems.date}
          />  
  
      ))}
        
    
    </div>
  )
}

export default ExpensesList
