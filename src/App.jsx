import { useState } from 'react'
import './assets/App.css'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <Counter />
      </div>
    </>
  )
}

export default App
