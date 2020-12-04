import React, { useState } from "react"

export const TakeNum = () => {
    const [num, setNumber] = useState(1)
    const takeNumber = () => {
        setNumber(num + 1)
        console.log(num)
    }

    return (
        <>
    <h2>Take your Ticket</h2>
        <button onClick={takeNumber}>Get a Number</button>
    <h2>Current Number: {num}</h2>
        </>
    )
}