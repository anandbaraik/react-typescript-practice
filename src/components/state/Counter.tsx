import React,{useReducer} from 'react'
const initialState = {count:0};
type CounterState = {
    count: number
}

type UpdateAction = {
    type: "INCREAMENT" | "DECREAMENT",
    payload: number
}

type ResetAction = {
    type: "RESET"
}
type counterAction = UpdateAction | ResetAction;

const reducer = (state:CounterState, action:counterAction)  => {
    switch(action.type) {
        case 'INCREAMENT' : {
            return {count : state.count + action.payload}
        }
        case 'DECREAMENT' : {
            return {count : state.count - action.payload}
        }
        case 'RESET' :
            return initialState;
        default :
            return state
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {count} = state;
  return (
    <div>
        <p>
            Count : {count}
        </p>
        <button
            onClick={() => dispatch({type: 'INCREAMENT', payload: 10})}>
            Increament by 10
        </button>
        {" "}
        <button
            onClick={() => dispatch({type: 'DECREAMENT', payload: 10})}>
            Decreament by 10
        </button>
        {" "}
        <button
            onClick={() => dispatch({type: 'RESET'})}>
            Reset
        </button>
    </div>
  )
}

export default Counter