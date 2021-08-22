import React, { useRef } from 'react'
import { useEffect } from 'react/cjs/react.development'

// Demonstrate refs hook in react
function FocusInput() {
    const inputRef = useRef(null)

    useEffect(() => {
        // focus the input element
        inputRef.current.focus()
    }, [])

    return (
        <div>
            <input ref={inputRef} type="text" />
        </div>
    )
}

export default FocusInput
