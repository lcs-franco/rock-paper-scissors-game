import { XIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Choice, useGameProvider } from '@app/contexts/GameProvider'
import { PaperIcon } from '@ui/components/icons/PaperIcon'
import { RockIcon } from '@ui/components/icons/RockIcon'
import { ScissorsIcon } from '@ui/components/icons/ScissorsIcon'
import { ImageTooltip } from '@ui/components/ImageTooltip'
import { Button } from '@ui/components/ui/Button'

export default function Play() {
  const { gameState } = useGameProvider()

  const renderOptionIcon = (option: Choice) => {
    switch (option) {
      case 'rock':
        return <RockIcon />
      case 'paper':
        return <PaperIcon />
      case 'scissors':
        return <ScissorsIcon />
    }
  }

  return (
    <div className="flex flex-col items-center justify-center p-8 mt-4">
      <h1 className="text-3xl font-extrabold mb-16">Result</h1>

      <div className="flex items-center gap-16 space-y-6 mb-8">
        <div className="flex flex-col items-center gap-2">
          <span className="font-bold">Player Choice</span>

          <ImageTooltip
            tooltipText={gameState.playerChoice!}
            className="w-48 h-48"
          >
            {renderOptionIcon(gameState.playerChoice!)}
          </ImageTooltip>
        </div>

        <XIcon className="w-24 h-24" />

        <div className="flex flex-col items-center gap-2">
          <span className="font-bold">Machine Choice</span>

          <ImageTooltip
            tooltipText={gameState.machineChoice!}
            className="w-48 h-48"
          >
            {renderOptionIcon(gameState.machineChoice!)}
          </ImageTooltip>
        </div>
      </div>

      <span className="font-bold text-xl uppercase mb-10">
        {gameState.result}
      </span>

      <Link to="/" className="flex justify-center">
        <Button size="lg">Play Again</Button>
      </Link>
    </div>
  )
}
