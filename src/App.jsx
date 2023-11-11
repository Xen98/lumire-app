import { Dashboard } from './components/Dashboard.jsx';

function App() {
  return (
    <>
      <header className='mt-16 mb-6 text-center font-black text-transform: uppercase'>
        <div className='bg-gradient-to-br from-violet-500 to-orange-300 bg-clip-text text-transparent w-10/12 sm:w-8/12 md:w-6/12 mx-auto'>
          <h1 className='text-4xl sm:text-6xl'>Sistema de monitoreo de alumbrado</h1>
        </div>
      </header>

      <Dashboard />
    </>
  )
}

export default App
