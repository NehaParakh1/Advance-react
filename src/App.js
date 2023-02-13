import React from 'react'

import ExpenseItem from './components/expenses/ExpenseItem'
import NewExpense from './components/NewExpense/NewExpense';

const App =() => {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      LocationOfExpenditure: 'ABC',
    },
    { id: 'e2', title: 'New TV', 
    amount: 799.49, 
    date: new Date(2021, 2, 12),
    LocationOfExpenditure:'HNJ',
  },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      LocationOfExpenditure: 'XYZ',
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      LocationOfExpenditure: 'DEF',
    },
  ];
const newexpense=[];
  for(let i=0;i<expenses.length;i++)
  {
    newexpense.push(<ExpenseItem title={expenses[i].title} amount={expenses[i].amount} date={expenses[i].date} location={expenses[i].LocationOfExpenditure}></ExpenseItem>)
  }
  return (
    <div>
      <NewExpense/>
      {newexpense}
    </div>
  );
}

export default App;
