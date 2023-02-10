import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css'

const ExpenseItem=(props)=> {

    return (
    
        <div className='expense-item'>
            <ExpenseDate date={props.date}></ExpenseDate>
            <ExpenseDetails title={props.title} amount={props.amount}></ExpenseDetails>
            <div className='expense-item__location'>{props.location}</div>
            </div>    
    )
}

export default ExpenseItem;