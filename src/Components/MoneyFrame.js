import React from 'react'
import './MoneyFrame.css'
function MoneyFrame(props) {
  return (
    <div>
      <p className='mfTitle'>{props.title}</p>
      <p className='mfAmount'>{props.amount}</p>
    </div>
  )
}

export default MoneyFrame
