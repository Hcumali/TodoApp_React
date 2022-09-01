import React, {useEffect, useState} from 'react'

const Card = ({todo}) => {

  const checkboxHandler = () => {
    console.log("checkbox değeri değişti.");
  }

  const buttonHandler = () => {
    console.log("button tıklandı.");
  }
  
  return (
    <div className='todo_card'>
      <div className='content'>
        <strong>{todo.content}</strong>
      </div>
      <div className='actions'>
        <input 
          id='input_box'
          type={'checkbox'} 
          checked={ todo.isCompleted }
          onChange={ checkboxHandler } 
        />
        <input
          id='btn_delete'
          type={"button"}
          value={"Delete"}
          onClick={ buttonHandler }
        />
      </div>
    </div>
  )
}

export default Card