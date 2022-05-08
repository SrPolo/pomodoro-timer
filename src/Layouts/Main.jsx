import Header from '../components/Header'
import StatusPanel from './StatusPanel'

const Main = () => {
  return (
    <main className="bg-gray-200 h-screen">
      <div className="h-full md:w-2/3 lg:w-1/2 mx-auto p-10 grid grid-rows-[auto_1fr]">
        <Header />
        <StatusPanel />
      </div>
    </main>
  )
}

export default Main
