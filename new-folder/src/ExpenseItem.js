import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from './context/AppContext';

const Expenseitem = (props) => {
  const{dispatch}=useContext(AppContext);

  const handleDelExpense=()=>{
    dispatch({
      type:'DELETE_EXPENSE',
      payload: props.id,
    })
  }



  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
      {props.name}
      <div>
        <span 
          className='badge badge-primary badge-pill mr-3'
          style={{ color: 'red' }}  // Change 'red' to your desired color
        >
          £{props.cost}
        </span>
        <TiDelete size='1.5em' onClick={handleDelExpense} />
      </div>
    </li>
  );
}

export default Expenseitem;
