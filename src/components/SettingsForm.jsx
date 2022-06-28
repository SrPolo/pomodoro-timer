import SettingsContext from '@/contexts/SettingsProvider'
import { useContext } from 'react'
import RangeInput from './RangeInput'

const Settings = () => {
  const { settings, changeSettings } = useContext(SettingsContext)

  const handleChange = (e) => {
    const { value, name } = e.target
    changeSettings(name, Number(value))
  }

  return (
    <form>
      <RangeInput
        label="Focus"
        name={'focusTime'}
        max={90}
        min={1}
        onChange={handleChange}
        value={settings.focusTime}
      />
      <RangeInput
        label="Short Break"
        name={'shortBreakTime'}
        max={90}
        min={1}
        onChange={handleChange}
        value={settings.shortBreakTime}
      />
      <RangeInput
        label="Long Break"
        name={'longBreakTime'}
        max={90}
        min={1}
        onChange={handleChange}
        value={settings.longBreakTime}
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
