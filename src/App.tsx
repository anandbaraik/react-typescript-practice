import React, { useState } from 'react';
import './App.css';
import { Greet } from './components/Greet';
import Person from './components/Person';
import NameList from './components/NameList';
import Status from './components/Status';
import {Button as ButtonEl} from './components/Button';
import Input from './components/Input';

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
      <Greet name={'Anand'} messageCount={10} isLoggedIn={true}/>
      <Person name={personName}/>
      <NameList nameList={nameList}/>
      <Status status={'success'}/>
      <ButtonEl handleClick={(event, id) => {
        console.log('button click', event, id)
      }}/>
      <Input value={val} onChangeHandler={(event) => {setVal(event.target.value);console.log(event.target.value)}}/>
    </div>
  );
}

export default App;
