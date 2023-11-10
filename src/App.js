import React, { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses.js';
import NewExpense from './components/NewExpense/NewExpense.js'

const DUMMY_EXPEMSES = [
    {
      id: 'e1',
      date: new Date(2023, 1, 18),
      title: "New book",
      amount: 30.99
    },
    {
      id: 'e2',
      date: new Date(2024, 10, 10),
      title: "New jeans",
      amount: 99.99
    },
     {
      id: 'e3',
      date: new Date(2024, 3, 10),
      title: "New bag",
      amount: 199.99
    }
  ]

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPEMSES)

  const addExpenseHandler = (expense) => {
    console.log('In App.js')
    console.log(expense)
    setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses]
    })
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;