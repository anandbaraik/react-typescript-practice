import React, { useState } from 'react'
type AuthUser = {
    name : string,
    email: string
}
const Auth = () => {
    const [user, setUser] = useState<AuthUser>({} as AuthUser);
    // ! Here we know that the user's value will be set using useEffect hook and will never be null so we tell TS compiler that treat {} as AuthUser type and it contains name and email => i.e. we tell it to treat as a AuthUser type and hence it does not throw an error.

    // ! Now we can use user.email without optional chaining. This is called "type Assertion"

    const loginHandler = () => {
        setUser({name: 'Anand Baraik', email: 'anand@example.com'})
    }
    const logoutHandler = () => {

    }
  return (
    <div>
        <button onClick={loginHandler}>
            Login
        </button>
        {" "}
        <button onClick={logoutHandler}>
            Logout
        </button>
        <p>
            User name is {user.name}
        </p>
        <p>
            User email is {user.email}
        </p>
    </div>
  )
}

export default Auth