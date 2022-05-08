const Header = () => {
  return (
    <header className="w-full">
      <div className="grid grid-cols-[1fr_auto] p-3">
        <h1 className="font-bold text-2xl text-slate-700">Pomodoro timer</h1>
        <button className=" bg-blue-200 rounded px-2">
          ⚙️ <span className="text-slate-600 font-semibold">Setting</span>
        </button>
      </div>
      <hr className="border-slate-800" />
    </header>
  )
}

export default Header
