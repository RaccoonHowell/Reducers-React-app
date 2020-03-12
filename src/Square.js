import React, { useReducer  } from "react";

const initial = { clicked: false };

const reducer = (state, action) => {
    switch (action.type) {
        case "click": return {
            ...state,
            clicked: !state.clicked,
        }

        default: return state;
    }
};

const Square = ({ colour }) => {
    const [state, dispatch] = useReducer(reducer, initial);

    const handleClick = () => {
        dispatch({ type: "click" })
    }

    const style = {
        height: 200,
        width: 200,
        backgroundColor: state.clicked ? colour : "lightgreen"
    }

    return (
        <div className="wrapper">
            <h3>Challenge 2</h3>
            <div onClick={ handleClick } style={ style } />
        </div>
    )
}

export default Square;

// Try recreating the <Square colour="hotpink"> component from the previous set of challenges using useReducer instead of useState.

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