import { getFormattedTime } from '@/utils/general'
import PropTypes from 'prop-types'

const Timer = (props) => (
  <h2 className="text-slate-700 text-8xl">{getFormattedTime(props.seconds)}</h2>
)

Timer.propTypes = {
  seconds: PropTypes.number.isRequired,
}

export default Timer
