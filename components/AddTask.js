import React, { useState } from 'react'

export const AddTask = ({onAddTask}) => {
  const [text, setText] = useState ('');
  return (
    <form>
    <input type='text'
     placeholder='what to do'
      value={text}
       onChange={(e) => setText(e.target.value)}></input>
    <button onClick={(e) => {e.preventDefault(); setText(''); onAddTask(text)}}>add task</button>
  </form>
  )
}


