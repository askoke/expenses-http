import './App.css';

import Expenses from './components/Expenses/Expenses.js';
import NewExpense from './components/NewExpense/NewExpense.js'

const App = () => {
  const expenses = [
    {
      date: new Date(2023, 0, 10),
      title: "New book",
      price: 30.99
    },
    {
      date: new Date(2023, 0, 10),
      title: "New jeans",
      price: 99.99
    }
  ]
  const addExpenseHandler = (expense) => {
    console.log('In App.js')
    console.log(expense)
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expensesData={expenses}/>
    </div>
  );
}


export default App;
