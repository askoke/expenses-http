import React, { useState } from 'react';
import "./Expenses.css"
import ExpenseItem from './ExpenseItem.js'
import ExpenseFilter from './ExpensesFilter.js'
import Card from "../UI/Card.js";

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState('2023')
	
	const filteredExpenses = props.expenses.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear
	}) 

	console.log('Year data in Expenses.js ' + filteredYear)

	const filterChangeHandler = (year) => {
	    console.log('Filtered change handled by Expenses.js')
	    console.log(year + ' in Expenses.js')
	    setFilteredYear(year)
	}

	return(
		<Card className="expenses">
			<ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
			{
				filteredExpenses.map((expense) => {
					return <ExpenseItem
						id={expense.id}
						title={expense.title}
						amount={expense.amount}
						date={expense.date}
						key={expense.id}
					/>
				}) 
			}
		</Card>
	)
}

export default Expenses;