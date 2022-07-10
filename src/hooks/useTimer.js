import { useRef, useState } from 'react'

export const useTimer = (initialValue = 0) => {
  const [seconds, setSeconds] = useState(initialValue)
  const [isRunning, setIsRunning] = useState(false)
  const interval = useRef(null)

  const setTimer = (value) => setSeconds(value)

  const stopInterval = () => {
    setIsRunning(false)
    clearInterval(interval.current)
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

  return { seconds, isRunning, startInterval, stopInterval, setTimer }
}
