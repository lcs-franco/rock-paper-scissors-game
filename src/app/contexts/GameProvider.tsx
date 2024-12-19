import { createContext, useContext, useState } from 'react'

type Result = 'draw' | 'win' | 'lose'

type Choice = 'rock' | 'paper' | 'scissors'

interface AuthContextValue {
  chooseOption(option: Choice): void
  calculating: boolean
  score: number
  result: Result | undefined
  selectedOption: Choice | undefined
}

const GameContext = createContext({} as AuthContextValue)

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [score, setScore] = useState(0)
  const [calculating, setCalculating] = useState(false)
  const [selectedOption, setSelectedOption] = useState<Choice>()
  const [result, setResult] = useState<Result>()

  const options: Choice[] = ['paper', 'rock', 'scissors']

  const getMachineOption = (): Choice => {
    return options[Math.floor(Math.random() * options.length)]
  }

  const calcuteResult = async (
    playerOption: Choice,
    machineOption: Choice,
  ): Promise<Result> => {
    setCalculating(true)
    await new Promise((resolve) => setTimeout(resolve, 4000))
    setCalculating(false)

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

  const chooseOption = async (option: Choice) => {
    setSelectedOption(option)
    const machineOption = getMachineOption()
    const gameResult = await calcuteResult(option, machineOption)

    setResult(gameResult)
    if (gameResult === 'win') {
      setScore(score + 1)
    }
  }

  return (
    <GameContext.Provider
      value={{ score, chooseOption, selectedOption, result, calculating }}
    >
      {children}
    </GameContext.Provider>
  )
}

export function useGameProvider() {
  return useContext(GameContext)
}
