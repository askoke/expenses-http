import React from 'react'
import ExpenseForm from './ExpenseForm'
import "./NewExpense.css"
import { useState } from 'react'

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData)
  }

  const [formOpen, setFormOpen] = useState(false)

  return (
    <div className='new-expense'>
        {formOpen && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} setFormOpen={setFormOpen}></ExpenseForm>}
        {!formOpen && <button onClick={() => setFormOpen(true)}>Add New Expense</button>}
    </div>
  )
}
export default NewExpense