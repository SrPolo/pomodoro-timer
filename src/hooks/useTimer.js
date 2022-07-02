import { useEffect, useRef, useState } from 'react'

export const useTimer = (initialValue = 0) => {
  const [seconds, setSeconds] = useState(initialValue)
  const [isRunning, setIsRunning] = useState(false)
  const interval = useRef(null)

  useEffect(() => {
    stopInterval()
    setSeconds(initialValue)
  }, [initialValue])

  const toggleTimer = () => {
    if (!interval.current) {
      startInterval()
      return
    }
    stopInterval()
  }

  const startInterval = () => {
    interval.current = setInterval(() => {
      setSeconds((timeSeconds) => {
        if (timeSeconds === 0) {
          stopInterval()
          return 0
        }
        return timeSeconds - 1
      })
    }, 1000)
    setIsRunning(true)
  }

  const stopInterval = () => {
    clearInterval(interval.current)
    interval.current = null
    setIsRunning(false)
  }

  return { seconds, isRunning, toggleTimer }
}
