//  We have to import css here to tell react that some css is attached with this function.
import React  from 'react';
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";


function ExpenseItem(props) {
  // const [title, setTitle] = useState(props.title);

  // const clickHandler =()=>{
  //   setTitle("UPDATED!!!");
  // };

  return (
    <Card className="expense-item">

      <ExpenseDate date={props.date} />

      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">&#8377;{props.amount}</div>
      </div>

      {/* <button onClick={clickHandler}>Change Title</button> */}

    </Card>
  );
}

export default ExpenseItem;
