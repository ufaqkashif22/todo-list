import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ListCom(props) {
  const[line,setLine] =useState(false)

  const cutIt =()=>{
    setLine (true);
  }
  return (
  
    <div className='todo_style'>
    <span onClick={cutIt}><DeleteIcon className='icon-remove-sign' /></span>
      <li style={{textDecoration:line ? "line-through" :"none"}}>{props.text}</li>
    </div>
  )
}
