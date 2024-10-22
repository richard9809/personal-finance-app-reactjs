import React from 'react'

const PFAInputNumber = (props) => {
  return (
    <div className='input-group'>
      <div className="input-addon">$</div>
      <input
        type='number'
        placeholder={props.placeholder}
        step="0.01"
      />
    </div>
  )
}

export default PFAInputNumber