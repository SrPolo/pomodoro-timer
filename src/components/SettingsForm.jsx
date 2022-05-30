import PropTypes from 'prop-types'
import { useState } from 'react'

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
      [name]: value,
    })
  }

  const saveSettings = (e) => {
    e.preventDefault()
    onSubmit(settings)
  }

  return (
    <form onSubmit={saveSettings}>
      <label htmlFor="focus-time">Focus</label>
      <input
        id="focus-time"
        name="focusTime"
        type="range"
        max={90}
        min={1}
        value={settings.focusTime}
        onChange={handleChange}
      />

      <label htmlFor="short-break-time">Short break</label>
      <input
        id="short-break-time"
        name="shortBreakTime"
        type="range"
        max={90}
        min={1}
        value={settings.shortBreakTime}
        onChange={handleChange}
      />

      <label htmlFor="long-break-time">Long break</label>
      <input
        id="long-break-time"
        name="longBreakTime"
        type="range"
        max={90}
        min={1}
        value={settings.longBreakTime}
        onChange={handleChange}
      />

      <label htmlFor="long-break-time">Rounds</label>
      <input
        id="long-break-time"
        name="rounds"
        type="range"
        max={12}
        min={1}
        value={settings.rounds}
        onChange={handleChange}
      />

      <button type="submit">Save</button>
    </form>
  )
}

export default SettingsForm

SettingsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
