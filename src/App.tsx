import { useState } from 'react'
import { Priority, priorities } from './types/Priority'
import { useTimer } from './hooks/useTimer'
import './styles/gradients.css'

function App() {
  const [selectedPriority, setSelectedPriority] = useState<Priority>(priorities[0])
  const { formatTime, isRunning, startTimer, pauseTimer, resetTimer } = useTimer()

  const handlePriorityChange = (priority: Priority) => {
    if (priority.id === selectedPriority.id) return;
    setSelectedPriority(priority);
    resetTimer();
  }

  const getButtonColor = (colors: string[]) => ({
    backgroundColor: colors[0],
    opacity: 0.9,
  })

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div 
        className="absolute inset-0 animated-gradient"
        style={{
          '--color-start': selectedPriority.gradientColors[0],
          '--color-end': selectedPriority.gradientColors[1],
        } as React.CSSProperties}
      />
      
      <div className="absolute inset-0 bg-black bg-opacity-10" />

      <div className="relative z-10 min-h-screen grid grid-rows-[auto_1fr]">
        <header className="w-full max-w-4xl mx-auto px-4 pt-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-shadow-lg transition-all duration-500">
            {selectedPriority.title}
          </h1>
          
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {priorities.map((priority) => (
              <button
                key={priority.id}
                onClick={() => handlePriorityChange(priority)}
                className={`priority-button backdrop-blur-sm ${
                  selectedPriority.id === priority.id
                    ? 'ring-2 ring-white scale-105'
                    : ''
                }`}
                style={getButtonColor(priority.gradientColors)}
              >
                {priority.name}
              </button>
            ))}
          </div>
        </header>

        <main className="flex items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="timer-display backdrop-blur-sm text-5xl sm:text-6xl md:text-8xl">
              {formatTime().hours}:{formatTime().minutes}:{formatTime().seconds}
            </div>

            <div className="mt-8 sm:mt-12 flex gap-4">
              <button
                onClick={isRunning ? pauseTimer : startTimer}
                className="control-button backdrop-blur-sm w-[120px]"
              >
                {isRunning ? 'Pause' : 'Start'}
              </button>
              <button
                onClick={resetTimer}
                className="control-button backdrop-blur-sm w-[120px]"
              >
                Reset
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
