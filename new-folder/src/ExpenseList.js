import React ,{useContext} from 'react'
import Expenseitem from './ExpenseItem.js';
import { AppContext } from './context/AppContext.js';

const ExpenseList = () => {
  const {expenses}=useContext(AppContext);
 
  return(
    <ul className='list-group'>
        {expenses.map((expense)=>(
            <Expenseitem id={expense.id} name={expense.name} cost={expense.cost}/>
        ))}
    </ul>
  );
};

export default ExpenseList;