import PropTypes from 'prop-types'

const TimerButton = (props) => {
  const { isRunning, toggleTimer } = props
  return (
    <button className="bg-blue-200 rounded-lg py-3 w-44" onClick={toggleTimer}>
      <span className="text-slate-600 text-4xl">
        {!isRunning ? 'Start' : 'Pause'}
      </span>
    </button>
  )
}

TimerButton.propTypes = {
  isRunning: PropTypes.bool.isRequired,
  toggleTimer: PropTypes.func.isRequired,
}

export default TimerButton
