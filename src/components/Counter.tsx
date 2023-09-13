import { useState } from 'preact/hooks'


export const Counter = () => {
    const [count, setCount] = useState(0)

    return (
        <>
            <span class="text-yellow-300 mr-4">Count: {count}</span>
            <button class="border px-4 py-2 text-xl mr-4" onClick={() => setCount(c => c - 1)}>-</button>
            <button class="border px-4 py-2 text-xl mr-4" onClick={() => setCount(c => c + 1)}>+</button>
        </>
    )
}
