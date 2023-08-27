import React from 'react'
type PersonProp = {
    name: {
        firstName : string,
        lastName: string
    }
}
const Person = (props:PersonProp) => {
    const {firstName, lastName} = props.name;
  return (
    <div>
        {firstName} {lastName}
    </div>
  )
}

export default Person