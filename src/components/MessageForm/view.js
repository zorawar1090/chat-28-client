import React from 'react'

export default function(props) {
  const { onSubmit, onChange, value} = props

  return(
    <div>
        <h3>New Message</h3>
        <form onSubmit={onSubmit}>
          <input
            type='text'
            value={value}
            onChange={onChange}
          />
          <button type='submit'>Send</button>
        </form>
      </div>
  )
}