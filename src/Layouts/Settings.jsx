import SettingsForm from '@/components/SettingsForm'

const Settings = () => {
  const onSubmit = (settings) => {
    console.log(settings)
  }

  return <SettingsForm onSubmit={onSubmit} />
}
export default Settings
