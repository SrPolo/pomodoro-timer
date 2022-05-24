import { useTimer } from '@/hooks/useTimer'
import { getFormatedTime } from '@/utils/general'

const Timer = () => {
  const { isRunning, seconds, toggleTimer } = useTimer(10)

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
