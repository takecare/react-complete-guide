import React from 'react';

export const MyInput = (props) => {
  return (
    <div>
      <input type="text" onChange={props.onChange} value={props.value} />
    </div>
  )
}
