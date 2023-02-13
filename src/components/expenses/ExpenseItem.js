import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
   
    const clickHandler=()=>{
        setTitle('Updated!');
        console.log(title)
    }
    const[amount, setAmount] =useState(props.amount);

    const changeAmount =() =>{
        setAmount(100);
        console.log(amount)
    }
    
    const deleteExpense=()=>{
       alert("are you sure")
         }
    
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
      <button onClick={clickHandler}> Change Title</button>
      <button onClick={deleteExpense} > Delete Expense</button> 
      <button onClick={changeAmount}> Change Amount</button>  
      </Card>
  );
}

export default ExpenseItem;
