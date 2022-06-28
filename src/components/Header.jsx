import PropTypes from 'prop-types'
import { IoMdSettings } from 'react-icons/io'

const Header = (props) => {
  const { openSettingModal } = props
  return (
    <header className="w-full">
      <div className="grid grid-cols-[1fr_auto] p-3">
        <h1 className="font-bold text-2xl text-slate-700">Pomodoro timer</h1>
        <button onClick={openSettingModal}>
          <IoMdSettings className="text-2xl text-slate-700" />
        </button>
      </div>
      <hr className="border-slate-800" />
    </header>
  )
}

export default Header

Header.propTypes = {
  openSettingModal: PropTypes.func.isRequired,
}
