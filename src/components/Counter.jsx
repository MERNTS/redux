import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(99)

  return (
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
  )
}

export default Counter
