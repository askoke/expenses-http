import React, { useState, useEffect } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses.js';
import NewExpense from './components/NewExpense/NewExpense.js'
import Error from "./components/UI/Error"

const App = () => {
  const [expenses, setExpenses] = useState([])
  const [isFetching, setIsFetching] = useState(false)
  const [error, setError] = useState(null)
  const [showError, setShowError] = useState(false)

  useEffect(() => {
    const getExpenses = async () => {
      setIsFetching(true)
      try {
        const response = await fetch('http://localhost:3005/expenses')
        const responseData = await response.json()
        if(!response.ok){
          throw new Error('Failed fetching data')
        }
        setExpenses(responseData)
      } catch (error) {
        setError({
          title: 'An error ocured!',
          message: 'Failed fetching expenses data, please try again later.'
        })
        setShowError(true)
      }
      setIsFetching(false)
    }
    getExpenses()
    console.log(expenses)
  }, [])

  console.log(error)
  const errorHandler = () => {
    setError(null)
    setShowError(false)
  }

  const addExpenseHandler = (expense) => {
    const addExpense = async (expense) => {
      try {
        const response = await fetch('http://localhost:3005/add-expense', {
          method: 'POST',
          body: JSON.stringify(expense),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const responseData = await response.json()
        if(!response.ok){
          throw new Error('Failed fetching data')
        }
        setExpenses([expense, ...expenses])
      } catch (error) {
        setError({
          title: 'An error ocured!',
          message: 'Failed fetching expenses data, please try again later.'
        })
        setShowError(true)
      }
    }
    addExpense(expense)
  }

  return (
    <div className="App">
      { showError && (
        <Error
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />)
      }
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses 
        expenses={expenses}
        isLoading={isFetching}  
      />
    </div>
  );
}

export default App;