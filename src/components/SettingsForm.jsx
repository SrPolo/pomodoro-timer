import PropTypes from 'prop-types'
import { useState } from 'react'
import RangeInput from './RangeInput'

const initialValues = {
  focusTime: 25,
  shortBreakTime: 5,
  longBreakTime: 15,
  rounds: 4,
}

const SettingsForm = (props) => {
  const { onSubmit } = props

  const [settings, setSettings] = useState(initialValues)

  const handleChange = (e) => {
    const { value, name } = e.target

    setSettings({
      ...settings,
      [name]: Number(value),
    })
  }

  const saveSettings = (e) => {
    e.preventDefault()
    onSubmit(settings)
  }

  return (
    <form onSubmit={saveSettings} className="grid gap-4">
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
      <button type="submit">Save</button>
    </form>
  )
}

export default SettingsForm

SettingsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
