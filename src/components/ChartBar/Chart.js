import React from 'react'
import './Chart.css'
import ChartBar from './ChartBar'

const Chart = (props) => {
    const dataPointValues= props.dataPoint.map(point=>point.value);
    let totalExpenseDone =0;

    for (let i = 0; i < dataPointValues.length; i++) {
      totalExpenseDone+= dataPointValues[i];
      
    }
    props.expenseDone(totalExpenseDone);
    // console.log(totalExpenseDone)

    // const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className='chart'>
      {props.dataPoint.map((dataPoint)=>(
            <ChartBar
                key={dataPoint.label}
                value={dataPoint.value}
                maxValue={totalExpenseDone}
                label={dataPoint.label}
            />

            ))}

        

    </div>
  )
}

export default Chart
