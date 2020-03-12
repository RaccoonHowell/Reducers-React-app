import React, { useReducer } from "react";
import { clamp } from "./utilities";

const reducer = (state, action) => {
    const { counter, max } = state;

    switch (action.type) {
        case "decrement": return {
            ...state,
            counter: clamp(0, max, counter - 15)        
        }

        case "increment": return {
            ...state,
            counter: clamp(0, max, counter + 15)
        }

        default: return state;
    }
};

const Counter = ({ initial, max }) => {
    const init = { 
        counter: initial,
        max
    };

    const [state, dispatch] = useReducer(reducer, init);

    const handleDecrement = () => {
        dispatch({ type: "decrement"});
    }

    const handleIncrement = () => {
            dispatch({ type: "increment"});
    }

    return (
        <div className="wrapper">
            <h3>Challenge 3</h3>
            <button onClick={ handleDecrement }>-</button>
            <button onClick={ handleIncrement }>+</button>
            <p>{ state.counter }</p>
        </div>
    )
}

export default Counter;

// Try recreating the <Counter initial={ 50 } max={ 100 } /> component from the previous set of challenges using useReducer instead of useState

// Create a <Counter initial={ 50 } max={ 100 } /> component. It should consist of a <p> containing a number (which starts at the initial value) and two buttons, + and -. When the user clicks the + button, the number should go up. When the user clicks the - button the number should go down. The number should not be able to go below 0. Use props to pass in a maximum value for the counter

// 1. display JSX
// 2.1 create state and dispatch using useReducer
// 2.2 create a reducer function that takes state and action as parameters
// 2.3 create an intial state with the value(s) you want to track
// 2.4 pass the reducer and initial to the useReducer function call
// 2.5 base the HTML on the state
// 2.6 test what happens when you manually update your state
// 3.1 add event listener to your JSX
// 3.2 create a handler for the event listener
// 3.3 in the handler, dispatch an action -- { type: '' }
// 3.4 in the reducer, accept state and action as parameters
// 3.5 create a switch statement and switch over the action.type
// 3.6 create cases for all the possible action types
// 3.7 create a default that just returns state
// 3.8 in each case, return an object that copies state and updates some value based on whatever