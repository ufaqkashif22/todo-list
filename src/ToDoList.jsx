import React, { useState } from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import ListCom from './ListCom';
export default function ToDoList() {
    const [item ,setItem]=useState("")
    const [newItem ,setNewItem]=useState([])
    const inputVal=(event)=>{
        setItem(event.target.value);
    }

    const listItems = ()=>{
        setNewItem((prevVal)=>{
            return [...prevVal,item]
        })
        setItem(" ")
    }
  return (
    <div className='main_div'>
      <div className='centre_div'>
      <br />
        <h1>ToDo List</h1>
      <br />
      <input type='text' value={item} placeholder='type here' onChange={inputVal}/>
   
       <button className="new_btn" onClick={listItems}>
        <AddIcon  />
        </button>
       <br />
       <ol>

        {newItem.map((val)=>{
            return <ListCom  text={val}/>
        })}
       </ol>

       

      </div>
    </div>
  )
}
