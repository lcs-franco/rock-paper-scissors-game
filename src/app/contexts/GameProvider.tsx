import { createContext, useContext, useState } from 'react'

type Result = 'draw' | 'win' | 'lose'

export type Choice = 'rock' | 'paper' | 'scissors'

interface AuthContextValue {
  chooseOption(option: Choice): void
  randomChoose(): void
  calculating: boolean
  playerScore: number
  machineScore: number
  result: Result | undefined
  playerChoice: Choice | undefined
  machineChoice: Choice | undefined
}

const GameContext = createContext({} as AuthContextValue)

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [playerScore, setPlayerScore] = useState(0)
  const [machineScore, setMachineScore] = useState(0)
  const [calculating, setCalculating] = useState(false)
  const [playerChoice, setPlayerChoice] = useState<Choice>()
  const [machineChoice, setMachineChoice] = useState<Choice>()
  const [result, setResult] = useState<Result>()

  const options: Choice[] = ['paper', 'rock', 'scissors']

  const getRandomOption = (): Choice => {
    return options[Math.floor(Math.random() * options.length)]
  }

  const randomChoose = async () => {
    const randomChoice = getRandomOption()

    await chooseOption(randomChoice)
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
    setPlayerChoice(option)

    const machineOption = getRandomOption()
    setMachineChoice(machineOption)

    const gameResult = await calcuteResult(option, machineOption)

    setResult(gameResult)
    if (gameResult === 'win') {
      setPlayerScore(playerScore + 1)
    }
    if (gameResult === 'lose') {
      setMachineScore(machineScore + 1)
    }
  }

  return (
    <GameContext.Provider
      value={{
        playerScore,
        chooseOption,
        playerChoice,
        machineScore,
        result,
        calculating,
        randomChoose,
        machineChoice,
      }}
    >
      {children}
    </GameContext.Provider>
  )
}

export function useGameProvider() {
  return useContext(GameContext)
}
