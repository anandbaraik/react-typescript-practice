import React from 'react'
type InputProps = {
    value: string,
    onChangeHandler: (event:React.ChangeEvent<HTMLInputElement>) => void
}
const Input = (props:InputProps) => {
  return (
    <div>
        <input type="text" value={props.value} onChange={(event) => props.onChangeHandler(event)}/>
    </div>
  )
}

export default Input