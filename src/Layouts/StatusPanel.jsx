import Timer from '@/components/Timer'
import TimerButton from '@/components/TimerButton'
import { PERIODS } from '@/config/variables'
import SettingsContext from '@/contexts/SettingsProvider'
import { usePeriods } from '@/hooks/usePeriods'
import { useTimer } from '@/hooks/useTimer'
import { useContext, useEffect } from 'react'

const StatusPanel = () => {
  const { settings } = useContext(SettingsContext)
  const [currentPeriod, nextPeriod] = usePeriods(settings.rounds)
  const { isRunning, seconds, startInterval, stopInterval, setTimer } =
    useTimer(settings[PERIODS.FOCUS_TIME])

  useEffect(() => {
    if (seconds === 0) {
      nextPeriod()
    }
  }, [isRunning])

  useEffect(() => {
    setTimer(settings[currentPeriod])
  }, [currentPeriod])

  const toggleTimer = () => {
    if (!isRunning) return startInterval()
    stopInterval()
  }

  return (
    <section className="h-full">
      <div className="flex flex-col items-center gap-5 p-12">
        <Timer seconds={seconds} />
        <TimerButton toggleTimer={toggleTimer} isRunning={isRunning} />
      </div>
    </section>
  )
}

export default StatusPanel
