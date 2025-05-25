import { createContext, useReducer } from "react";

export const ThemecContext=createContext();

const INITIAL_STATE={darMode:false};

const themeReducer=(state,action)=>{
    switch(action.type){
        case "TOGGLE":return {darkMode:!state.darMode};
        default:
            return state;
    }
};

export const ThemeProvider=(props)=>{
    const[state,setState]=useReducer(themeReducer,INITIAL_STATE)

    return(
        <ThemeProvider value={(state,dispatch)} >
            {props.children}
        </ThemeProvider>
    )
}