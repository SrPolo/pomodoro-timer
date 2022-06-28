import PropTypes from 'prop-types'

const ModalDialog = (props) => {
  const { children, isOpen, onClose } = props
  if (isOpen) {
    return (
      <div
        className="fixed bg-gray-600 bg-opacity-50 overflow-y-auto top-0 left-0
          py-12 w-full h-full flex justify-center items-center"
        onClick={onClose}>
        <div
          className="relative m-auto p-5 border border-slate-300 w-96 shadow-lg rounded-xl bg-slate-300"
          onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    )
  }

  return null
}

export default ModalDialog

ModalDialog.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}
