import { createContext, useContext, useState } from 'react'

type Result = 'draw' | 'win' | 'lose'

export type Choice = 'rock' | 'paper' | 'scissors'

interface GameContextValue {
  chooseOption(option: Choice): void
  randomChoose(): void
  calculating: boolean
  scores: { player: number; machine: number }
  gameState: GameState
}

interface GameState {
  playerChoice?: Choice
  machineChoice?: Choice
  result?: Result
}

const GameContext = createContext({} as GameContextValue)

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [scores, setScores] = useState({ player: 0, machine: 0 })
  const [calculating, setCalculating] = useState(false)
  const [gameState, setGameState] = useState<GameState>({})

  const options: Choice[] = ['paper', 'rock', 'scissors']

  const getRandomOption = (): Choice => {
    return options[Math.floor(Math.random() * options.length)]
  }

  const randomChoose = async () => {
    const randomChoice = getRandomOption()
    await chooseOption(randomChoice)
  }

  const calcuteResult = (player: Choice, machine: Choice): Result => {
    if (player === machine) return 'draw'
    if (
      (player === 'rock' && machine === 'scissors') ||
      (player === 'scissors' && machine === 'paper') ||
      (player === 'paper' && machine === 'rock')
    )
      return 'win'

    return 'lose'
  }

  const updateScores = (result: Result) => {
    setScores((prev) => ({
      player: prev.player + (result === 'win' ? 1 : 0),
      machine: prev.machine + (result === 'lose' ? 1 : 0),
    }))
  }

  const playGame = async (playerChoice: Choice) => {
    setCalculating(true)
    const machineChoice = getRandomOption()
    const result = calcuteResult(playerChoice, machineChoice)
    setGameState({ playerChoice, machineChoice, result })
    updateScores(result)
    await new Promise((resolve) => setTimeout(resolve, 4000))
    setCalculating(false)
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
        scores,
        calculating,
        gameState,
        chooseOption,
        randomChoose,
      }}
    >
      {children}
    </GameContext.Provider>
  )
}

export function useGameProvider() {
  return useContext(GameContext)
}
