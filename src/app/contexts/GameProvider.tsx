import { useState, useContext, createContext } from 'react'

const GameContext = createContext()

export function GameProvider({ children }) {
  const [score, setScore] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null)
  const [result, setResult] = useState('')

  const options = ['rock', 'paper', 'scissors']

  const getMachineOption = () => {
    return options[Math.floor(Math.random() * options.length)]
  }

  const calcuteResult = (playerOption, machineOption) => {
    if (playerOption === machineOption) {
      return 'draw'
    } else if (
      (playerOption === 'rock' && machineOption === 'scissors') ||
      (playerOption === 'scissors' && machineOption === 'paper') ||
      (playerOption === 'paper' && machineOption === 'rock')
    ) {
      return 'win'
    } else {
      return 'lose'
    }
  }

  const chooseOption = (option) => {
    setSelectedOption(option)
    const machineOption = getMachineOption()
    const gameResult = calcuteResult(option, machineOption)

    setResult(gameResult)
    if (gameResult === 'win') {
      setScore(score + 1)
    }
  }

  return (
    <GameContext.Provider
      value={{ score, chooseOption, selectedOption, result }}
    >
      {children}
    </GameContext.Provider>
  )
}

export function useGameProvider() {
  return useContext(GameContext)
}
