import Main from '@/layouts/Main'
import { SettingsProvider } from '@/contexts/SettingsProvider'

function App() {
  return (
    <SettingsProvider>
      <Main />
    </SettingsProvider>
  )
}

export default App
