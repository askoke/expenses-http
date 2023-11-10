import React from "react";
import ExpenseItem from "./ExpenseItem.js";
import "./ExpensesList.css"

const ExpensesList = (props) => {
	if(props.filteredExpenses.length === 0) {
		return <p className="expenses-list__fallback">No expenses found.</p>
	}

	return (
		<ul className="expenses-list">
			{
				props.filteredExpenses.map((expense) => {
					return <ExpenseItem
						id={expense.id}
						title={expense.title}
						amount={expense.amount}
						date={expense.date}
						key={expense.id}
					/>
				}) 
			}
		</ul>
	)
}
export default ExpensesList;