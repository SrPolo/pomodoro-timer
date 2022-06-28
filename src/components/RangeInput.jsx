import PropTypes from 'prop-types'

const RangeInput = (props) => {
  const { value, onChange, name, max, min, label } = props
  return (
    <div className="w-full grid justify-items-center">
      <label htmlFor={name} className="text-base">
        {label}
      </label>
      <span>{`${value} : 00`}</span>
      <input
        id={name}
        name={name}
        type="range"
        max={max}
        min={min}
        value={value}
        onChange={onChange}
        className="w-2/3"
      />
    </div>
  )
}
export default RangeInput

RangeInput.propTypes = {
  value: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  max: PropTypes.number,
  min: PropTypes.number,
  onChange: PropTypes.func,
}
