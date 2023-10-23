import "./Expenses.css"
import ExpenseItem from './ExpenseItem.js'
import ExpenseFilter from './ExpensesFilter.js'
import Card from "../UI/Card.js";

function Expenses(props){

	const addExpenseFilterHandler = (expenseFilter) => {
    console.log('In Expenses.js')
    console.log(expenseFilter)
	}
	return(
		<Card className="expenses">
			<ExpenseFilter onAddExpenseFilter={addExpenseFilterHandler} />
			<ExpenseItem expenseData={props.expensesData[0]}></ExpenseItem>
        	<ExpenseItem expenseData={props.expensesData[1]}></ExpenseItem>
		</Card>
	)
}

export default Expenses;