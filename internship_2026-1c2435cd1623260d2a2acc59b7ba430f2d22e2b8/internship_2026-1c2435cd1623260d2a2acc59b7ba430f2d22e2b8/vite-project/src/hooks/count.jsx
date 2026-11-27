import { useEffect,useState } from 'react'
import { Button } from '@/components/ui/button'

const Count = () => {
  const [count, setCount] = useState(0)
  const [showMessage, setShowMessage] = useState(false)
  useEffect(() => {
    console.log('Count value changed:', count)
  }, [count])
  

  const increase = () => {
    setCount((currentCount) => currentCount + 1)
  }

  const reset = () => {
    setCount(0)
  }

  const toggleMessage = () => {
    setShowMessage((isVisible) => !isVisible)
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <h1>Count: {count}</h1>
      <div className="flex gap-2">
        <Button onClick={increase}>Increase</Button>
        <Button onClick={reset} variant="outline">
          Reset
        </Button>
        <Button onClick={toggleMessage} variant="secondary">
          {showMessage ? 'Hide message' : 'Show message'}
        </Button>
      </div>
      {showMessage && <p>The toggle button is working!</p>}
    </div>
  )
}

export default Count
