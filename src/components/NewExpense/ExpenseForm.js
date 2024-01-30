import React from 'react'
import "./ExpenseForm.css"
import { useState } from 'react';
const ExpenseForm = (props) => {
    const [userInput, setUserInput] = useState({
        enteredTitle:'',
        enteredAmount:'',
        enteredDate:''
    })
    const titleChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredTitle: event.target.value
        })
    }
    const amountChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredAmount: event.target.value
        })
    }
    
    const dateChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredDate: event.target.value
        })
    }
    const submitHandler = (event) => {
        event.preventDefault()
        const expenseData = {
            title:userInput.enteredTitle,
            amount:userInput.enteredAmount,
            date: new Date(userInput.enteredDate)
        }
        props.onSaveExpenseData(expenseData)
        setUserInput({
            enteredTitle:'',
            enteredAmount:'',
            enteredDate:''
        })
        props.setFormOpen(false)
    }

  return (
    <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type="text"
                onChange={titleChangeHandler} value={userInput.enteredTitle}/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01"
                onChange={amountChangeHandler} value={userInput.enteredAmount}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type="date" min="2023-01-18" max="2025-12-31"
                onChange={dateChangeHandler} value={userInput.enteredDate}/>
            </div>
        </div>
        <div>
            <button type="submit">Add Expense</button>
            <button onClick={() => props.setFormOpen(false)}>Cancel</button>
        </div>
    </form>
  )
}
export default ExpenseForm