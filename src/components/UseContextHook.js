import React, { useState, useContext } from 'react'
import { userContext } from '../App'

// Demonstrate useContext Hook in react
function UseContextHook() {
    const user = useContext(userContext)
    return (
        <div>
            {user}
        </div>
    )
}

export default UseContextHook
