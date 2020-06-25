import React, { useReducer } from 'react'
import CounterReduce from './CounterReduce'

const Child2 = () => {
    let [state, dispatch] = useReducer(CounterReduce, 0);
    
    return(
        <div>
            <h2>This is Second Child using Counter Reducer</h2>
            <h3>value of Reducer state is : {state}  </h3>
            <button onClick = {() => dispatch('INCREMENT') }>Increment Reducer</button> 
            <button onClick = {() => dispatch('DECREMENT') }>Decrement Reducer</button>

        </div>

    )
}
export default Child2;