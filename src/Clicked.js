import React, { useReducer, useState } from "react";

const initial = { clicked: false }

const reducer = (state, action) => {
    switch (action.type) {
        case "click": return { ...state, clicked:true }
        default: return state;
    }
}

const Clicked = () => {
    const [state, dispatch] = useReducer(reducer, initial);

    const handleClick = () => {
        dispatch({ type: "click" })
    }

    return <p onClick={ handleClick }>{ state.clicked ? " Clicked" : "Not clicked" }</p>
}

export default Clicked;

// Try recreating the <Clicked> component from the previous set of challenges using useReducer instead of useState.

// Your initial state should be:

// const initial = { clicked: false };
// Your action should be:

// { type: "CLICKED" }


/*
import React, { useReducer } from 'react';
// 1. import react and implement the useReducer hook
const initialState = {
    clicked: false
    // 6. create an initial state with the values you want to track
};
const reducer = (state, action) => {
// 5. create a reducer function that takes state and action as parameters
// state = the current state
// action = what we passed into dispatch
    switch (action.type) {
        // 12. create a switch statement and switch over the action.type
        // switch tests a value against many possibilities
        case 'CLICKED':
        // 13. create cases for all the possible action types
        // case 'CLICKED' matches the action type: 'CLICKED'
            return {
                ...state,
                // 15. in each case, return an object that copies state (so the original doesn't get affected) and updates some value based on whatever
                clicked: !state.clicked,
            }   // the copied state reverts to the opposite of state.clicked, in this case, true
        default: return state;
        // 14. create a default that just returns state unchanged, this is a necessity as a state needs to be returned
    };
}
const SquareReducer = () => {
// display a component named SquareReducer
    const [state, dispatch] = useReducer(reducer, initialState);
    // 4. create state and dispatch using useReducer
    // state = a variable that represents how we read the values we're storing
    // dispatch = calls the reducer so we can trigger an update to the state values
    // 7. pass the reducer and initialState to the useReducer function call
    // reducer = instructions on how to update the state
    // initialState = what the state looks like to begin with
    const handleClick = () => {
    // 10. create a handler for the event listener
        dispatch({ type: 'CLICKED' })
        // 11. in the handler, dispatch an action { type: 'EXAMPLE' }
        // when we click on the square, it runs a dispatch action, in this instance, the user clicked, so we want the reducer to respond with its 'CLICKED' task
    }
    const divStyle = {
    // 8. base the HTML on the state
        backgroundColor: state.clicked ? "green" : "hotpink",
        width: "200px",
        height: "200px"
    };
    return <div onClick={ handleClick } style={ divStyle } />
    // 3. Display JSX by returning something
    // 9. add event listener to your JSX - onclick={ handleClick } 
}
export default SquareReducer;
// 2. export default 'name of file'
*/