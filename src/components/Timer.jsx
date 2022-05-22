import { useRef, useState } from 'react'
import { getFormatedTime } from '../utils/general'

const Timer = () => {
  const [seconds, setSeconds] = useState(10)
  const [isRunning, setIsRunning] = useState(false)
  const interval = useRef(null)

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

  return (
    <div className="flex flex-col items-center gap-5 p-12">
      <h2 className="text-slate-700 text-8xl">{getFormatedTime(seconds)}</h2>
      <button
        className="bg-blue-200 rounded-lg py-3 w-44"
        onClick={toggleTimer}>
        <span className="text-slate-600 text-4xl">
          {!isRunning ? 'Start' : 'Pause'}
        </span>
      </button>
    </div>
  )
}

export default Timer
