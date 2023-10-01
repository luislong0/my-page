import { useStore } from '@/zustand-store'

export function ProjectButtonTypes() {
  const { selectedButton, handleSelectButton } = useStore((store) => {
    return {
      handleSelectButton: store.handleSelectButton,
      selectedButton: store.selectedButton,
    }
  })

  return (
    <div className="mb-6 flex gap-4">
      {selectedButton === 'all' ? (
        <button
          onClick={() => handleSelectButton('all')}
          className="group relative overflow-hidden rounded-md border-none bg-transparent bg-zinc-800 px-4 py-1.5 text-sm text-zinc-100 focus:outline-none focus:ring-0"
        >
          Todos
          <span className="absolute bottom-0 left-0 h-0.5 w-full bg-violet-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </button>
      ) : (
        <button
          onClick={() => handleSelectButton('all')}
          className="group relative overflow-hidden rounded-md border-none bg-transparent bg-zinc-800 px-4 py-1.5 text-sm text-zinc-100 focus:outline-none focus:ring-0"
        >
          Todos
          <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-violet-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </button>
      )}

      {selectedButton === 'react' ? (
        <button
          onClick={() => handleSelectButton('react')}
          className="group relative overflow-hidden rounded-md border-none bg-transparent bg-zinc-800 px-4 py-1.5 text-sm text-zinc-100 focus:outline-none focus:ring-0"
        >
          React
          <span className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </button>
      ) : (
        <button
          onClick={() => handleSelectButton('react')}
          className="group relative overflow-hidden rounded-md border-none bg-transparent bg-zinc-800 px-4 py-1.5 text-sm text-zinc-100 focus:outline-none focus:ring-0"
        >
          React
          <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </button>
      )}

      {selectedButton === 'node' ? (
        <button
          onClick={() => handleSelectButton('node')}
          className="group relative overflow-hidden rounded-md border-none bg-transparent bg-zinc-800 px-4 py-1.5 text-sm text-zinc-100 focus:outline-none focus:ring-0"
        >
          NodeJS
          <span className="bg-blue-500transition-all absolute bottom-0 left-0 h-0.5 w-full bg-green-500 duration-300 ease-in-out group-hover:w-full"></span>
        </button>
      ) : (
        <button
          onClick={() => handleSelectButton('node')}
          className="group relative overflow-hidden rounded-md border-none bg-transparent bg-zinc-800 px-4 py-1.5 text-sm text-zinc-100 focus:outline-none focus:ring-0"
        >
          NodeJS
          <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-green-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </button>
      )}

      {selectedButton === 'react-native' ? (
        <button
          onClick={() => handleSelectButton('react-native')}
          className="group relative overflow-hidden rounded-md border-none bg-transparent bg-zinc-800 px-4 py-1.5 text-sm text-zinc-100 focus:outline-none focus:ring-0"
        >
          React Native
          <span className="bg-blue-500transition-all absolute bottom-0 left-0 h-0.5 w-full bg-indigo-800  duration-300 ease-in-out group-hover:w-full"></span>
        </button>
      ) : (
        <button
          onClick={() => handleSelectButton('react-native')}
          className="group relative overflow-hidden rounded-md border-none bg-transparent bg-zinc-800 px-4 py-1.5 text-sm text-zinc-100 focus:outline-none focus:ring-0"
        >
          React Native
          <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-indigo-800 transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </button>
      )}
    </div>
  )
}
