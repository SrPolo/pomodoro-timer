const ModalDialog = ({ children }) => {
  return (
    <div
      className="fixed bg-gray-600 bg-opacity-50 overflow-y-auto top-0 left-0
      py-12 w-full h-full flex justify-center items-center">
      <div className="relative m-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        {children}
      </div>
    </div>
  )
}
export default ModalDialog
