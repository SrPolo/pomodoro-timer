import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

const SettingsContext = createContext()

const initialValues = {
  focusTime: 1500,
  shortBreakTime: 300,
  longBreakTime: 75,
  rounds: 4,
}

const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState(initialValues)

  const changeSettings = (name, value) => {
    setSettings({
      ...settings,
      [name]: value,
    })
  }

  return (
    <SettingsContext.Provider value={{ settings, changeSettings }}>
      {children}
    </SettingsContext.Provider>
  )
}

SettingsProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { SettingsProvider }

export default SettingsContext
