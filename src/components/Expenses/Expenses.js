import "./Expenses.css"
import ExpenseItem from './ExpenseItem'
import Card from "../UI/Card.js";

function Expenses(props){
	return(
		<Card className="expenses">
			<ExpenseItem expenseData={props.expensesData[0]}></ExpenseItem>
        	<ExpenseItem expenseData={props.expensesData[1]}></ExpenseItem>
		</Card>
		)
}

export default Expenses;