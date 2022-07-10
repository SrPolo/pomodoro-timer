import Timer from '@/components/Timer'
import SettingsContext from '@/contexts/SettingsProvider'
import { useContext } from 'react'

const StatusPanel = () => {
  const { settings, currentPeriod } = useContext(SettingsContext)

  return (
    <section className="h-full">
      <Timer initialTime={settings[currentPeriod]} />
    </section>
  )
}

export default StatusPanel
