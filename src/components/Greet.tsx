import React from 'react'
type GreetProps = {
    name: string,
    messageCount?: number,
    isLoggedIn : boolean
}
export const Greet = (props:GreetProps) => {
  let {name, isLoggedIn, messageCount = 0} = props;
  return (
    <div>
        {
            isLoggedIn ? `Welcome ${name}, you have ${messageCount} undread messages!` : 'Welcome guest.'
        }

    </div>
  )
}
