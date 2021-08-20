import React, {useState} from 'react'

//Demonstrate useState Hook for using state in functional component
function HookCounter() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>
                Count {count}
            </button>
        </div>
    )
}

export default HookCounter
