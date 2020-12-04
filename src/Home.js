import React from "react"
import { TakeNum } from "./TakeNum"

export const Home = (props) => {
    // props here ^^^^^^^^^^^ is necessary because we are giving it properties when we call it on App.js
    const bakers = ["Julian", "Ginger" , "Anita"]
   
    return (
    <>
        <TakeNum /> 
        <h1>Welcome to Bay and Marble Doughnuts, {props.user.name}!</h1>
        <p>The finest quality doughnuts from the finest quality ingredients</p>
        <h2>Meet our Bakers:</h2>
        <ul>
            {bakers.map((baker, i) => <li key={i}>{baker}</li>)}
        </ul>
        
    </>
    )
}         