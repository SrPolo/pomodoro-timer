import React from 'react'

const Timer = () => {
  return (
    <div className="flex flex-col items-center gap-5 p-12">
      <h2 className="text-slate-700 text-8xl">45 : 00</h2>
      <button className="bg-blue-200 rounded-lg py-3 w-44">
        <span className="text-slate-600 text-4xl">Start</span>
      </button>
    </div>
  )
}

export default Timer
