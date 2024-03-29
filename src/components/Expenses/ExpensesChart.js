import React, { useState } from 'react'
import Chart from '../ChartBar/Chart';
import './ExpenseChart.css'

const ExpensesChart = (props) => {
    const chartDataPoints=[
        {label:"Jan",value:0},
        {label:"Feb",value:0},
        {label:"Mar",value:0},
        {label:"Apr",value:0},
        {label:"May",value:0},
        {label:"June",value:0},
        {label:"July",value:0},
        {label:"Aug",value:0},
        {label:"Sep",value:0},
        {label:"Oct",value:0},
        {label:"Nov",value:0},
        {label:"Dec",value:0},
    ];

    for (const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth(); // starting at 0 => January => 0
        chartDataPoints[expenseMonth].value += expense.amount;
    }

    // console.log(chartDataPoints);
    const [expenseDoneInYear ,setExpenseDone]=useState(0)
    const totalExpenseDone=(money)=>{
        setExpenseDone(money);
    }

  return (
    <div>
        <Chart dataPoint={chartDataPoints} expenseDone={totalExpenseDone}/>
        <div className='expenseDone'>Total Expense Done in this year : &#8377;{expenseDoneInYear}</div>
    </div>
  )
}

export default ExpensesChart
