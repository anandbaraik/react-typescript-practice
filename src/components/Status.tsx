import React from 'react'
import Heading from './Heading'
import Oscar from './Oscar'
import { Greet } from './Greet'
type StatusProps = {
    status: 'loading' | 'success' | 'error'
}
const Status = (props:StatusProps) => {
    let message
    if(props.status == 'loading') {
        message = "loading...";
     } else if(props.status == 'success') {
        message = 'Fetched successfully';
     } else if(props.status == 'error') {
        message = 'fetching failed'
     }
  return (
    <div>
        <h3>
            {message}
        </h3>
        <Heading>This is a placeholder text</Heading>
        <Oscar>
            <Heading>Oscar goes to anand</Heading>
            <Greet name={'Anand'} isLoggedIn={true}/>
        </Oscar>
    </div>
  )
}

export default Status