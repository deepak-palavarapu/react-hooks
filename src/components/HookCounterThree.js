import React, { useState, useEffect } from 'react'

//Demonstrate useEffect hook
function HookCounterThree() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `You clicked ${count} times`
    }, [count])

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Click {count} times</button>
        </div>
    )
}

export default HookCounterThree
