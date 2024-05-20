import { useState } from 'react'

const Counter = ({ counter, increment, decrement }) => {
  const [count, setCount] = useState(99)

  const handleIncrement=()=>{
    setCount((prevCount) => prevCount +2)
  }

  const handleDecrement=()=>{
    setCount((prevCount)=>Math.max(prevCount-1),0)
  }


  return (
    <div>
        <p className="counter_title">Counter: {count}</p>
        <button className="button" onClick={handleIncrement}>
            Increment
        </button>

        <button className="button" onClick={handleDecrement}>
            Decrement
        </button>
    </div>
//     <button onClick={() => setCount((count) => count + 1)}>
//       count is {count}
//     </button>
  )
}

export default Counter
