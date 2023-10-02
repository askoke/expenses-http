import "./Expenses.css"
import ExpenseItem from './ExpenseItem'

function Expenses(props){
	return(
		<div className="expenses">
			<ExpenseItem expenseData={props.expensesData[0]}></ExpenseItem>
        	<ExpenseItem expenseData={props.expensesData[1]}></ExpenseItem>
		</div>
		)
}

export default Expenses;