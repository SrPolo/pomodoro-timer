import SettingsContext from '@/contexts/SettingsProvider'
import { minutesToSeconds, secondsToMinutes } from '@/utils/general'
import { useContext } from 'react'
import RangeInput from './RangeInput'

const timeSettings = ['focusTime', 'shortBreakTime', 'longBreakTime']

const Settings = () => {
  const { settings, changeSettings } = useContext(SettingsContext)

  const handleChange = (e) => {
    const { value, name } = e.target
    const convertedValue = timeSettings.includes(name)
      ? minutesToSeconds(Number(value))
      : Number(value)
    changeSettings(name, convertedValue)
  }

  return (
    <form>
      <RangeInput
        label="Focus"
        name={'focusTime'}
        max={90}
        min={1}
        onChange={handleChange}
        value={secondsToMinutes(settings.focusTime)}
      />
      <RangeInput
        label="Short Break"
        name={'shortBreakTime'}
        max={90}
        min={1}
        onChange={handleChange}
        value={secondsToMinutes(settings.shortBreakTime)}
      />
      <RangeInput
        label="Long Break"
        name={'longBreakTime'}
        max={90}
        min={1}
        onChange={handleChange}
        value={secondsToMinutes(settings.longBreakTime)}
      />
      <RangeInput
        label="Rounds"
        name={'rounds'}
        max={12}
        min={1}
        onChange={handleChange}
        value={settings.rounds}
      />
    </form>
  )
}

export default Settings
