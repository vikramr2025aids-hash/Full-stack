import { useState } from 'react'
import { Button } from './components/ui/button'

const Count = () => {
  const [count, setCount] = useState(0)

  const increase = () => {
    setCount((currentCount) => currentCount + 1)
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <p className="text-lg font-medium">Count: {count}</p>
      <Button onClick={increase} variant="default">
        Increase
      </Button>
    </div>
  )
}

export default Count
