import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    const clickHandler=()=>{
        console.log('clicked!!')
    }
    
    const deleteExpense=()=>{
       alert("are you sure")
         }
    
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}> Change Title</button>
      <button onClick={deleteExpense} > Delete Expense</button>   
      </Card>
  );
}

export default ExpenseItem;
