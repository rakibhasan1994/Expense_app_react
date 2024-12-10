import { useState } from 'react';
import './App.css'
import ExpenseList from './components/expenseList';
import ExpenseCategory from './components/ExpenseCategory';

function App() {

  const categories = ["home","familly","tour","university"];

  const [expense, setExpense] = useState([
    { id:1, category: "home", description:"Cox's Bazar Tour", amount:"5000"},
    { id:2, category: "tour", description:"Cox's Bazar Tour", amount:"5000"},
    { id:3, category: "tour", description:"Cox's Bazar Tour", amount:"5000"},
    { id:4, category: "university", description:"Cox's Bazar Tour", amount:"5000"},
    { id:5, category: "familly", description:"Cox's Bazar Tour", amount:"5000"},
  ]);

  const handleRemove = (id) => {
    setExpense(expense.filter((item) => item.id != id));
  };

  const [selectCategory,setSelecteCategory] = useState("")

  const filterExpense = selectCategory ? expense.filter(e => e.category ===selectCategory) : expense;

  return (
    <>
    {expense.length !==0 && (
      <div className="flex justify-end mb-6">
      <ExpenseCategory setSelecteCategory = {setSelecteCategory} categories = {categories}/>
    </div>
    )}
    <ExpenseList expense={filterExpense} onRemove = {handleRemove} />
    </>
  );
}

export default App;
