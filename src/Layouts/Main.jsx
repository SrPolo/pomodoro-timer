import Header from '@/components/Header'
import ModalDialog from '@/components/ModalDialog'
import Settings from '@/components/SettingsForm'
import { useState } from 'react'
import StatusPanel from './StatusPanel'

const Main = () => {
  const [settingIsOpen, setSettingIsOpen] = useState(false)

  const openSettingModal = () => setSettingIsOpen(true)
  const closeSettingModal = () => setSettingIsOpen(false)
  return (
    <main className="bg-gray-200 h-screen">
      <div className="h-full md:w-2/3 lg:w-1/2 mx-auto p-10 grid grid-rows-[auto_1fr]">
        <Header openSettingModal={openSettingModal} />
        <StatusPanel />
      </div>
      <ModalDialog
        isOpen={settingIsOpen}
        onClose={closeSettingModal}
        className="grid gap-4 text-slate-700 font-semibold">
        <Settings />
      </ModalDialog>
    </main>
  )
}

export default Main
