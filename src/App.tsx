import React, { useState } from 'react';
import './App.css';
import { Greet } from './components/Greet';
import Person from './components/Person';
import NameList from './components/NameList';
import Status from './components/Status';
import {Button as ButtonEl} from './components/Button';
import Input from './components/Input';
import Container from './components/Container';
import Auth from './components/state/Auth';
import Counter from './components/state/Counter';
import Box from './context/Box';
import { ThemeContextProvider } from './context/ThemeContext';
import { UserContextProvider } from './context/UserContext';
import User from './context/User';

function App() {
  const personName = {
    firstName: "Anand",
    lastName: "Baraik"
  }
  const nameList = [
    {
      first: 'Anand',
      last: 'Baraik',
    },
    {
      first: 'Harsh',
      last: 'Mohite'
    },
    {
      first: 'Jagrut',
      last : 'Sharma'
    }
  ];
  const [val, setVal] = useState<string>('');
  return (
    <div className="App">
      {/* <Greet name={'Anand'} messageCount={10} isLoggedIn={true}/>
      <Person name={personName}/>
      <NameList nameList={nameList}/>
      <Status status={'success'}/>
      <ButtonEl handleClick={(event, id) => {
        console.log('button click', event, id)
      }}/>
      <Input value={val} onChangeHandler={(event) => {setVal(event.target.value);console.log(event.target.value)}}/>
      <Container styles={{border: '1px solid blue', borderRadius: '2px'}}/> */}
	  {/* <Auth/> */}
	  {/* <Counter/> */}
    {/* <ThemeContextProvider>
      <Box/>
    </ThemeContextProvider> */}
    <UserContextProvider>
      <User/>
    </UserContextProvider>
    </div>
  );
}

export default App;
