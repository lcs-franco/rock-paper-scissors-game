import { useGameProvider } from '@app/contexts/GameProvider'
import { RockIcon } from '@ui/components/icons/RockIcon'
import { ScissorsIcon } from '@ui/components/icons/ScissorsIcon'
import { ImageTooltip } from '@ui/components/ImageTooltip'
import { Button } from '@ui/components/ui/Button'
import { XIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Play() {
  const { selectedOption } = useGameProvider()

  return (
    <div className="flex flex-col items-center justify-center p-8 mt-5 space-y-12">
      <h1 className="text-3xl font-extrabold">Result:</h1>

      <div className="flex items-center gap-16">
        <ImageTooltip tooltipText="Rock" className="w-48 h-48">
          <RockIcon />
        </ImageTooltip>

        <XIcon className="w-24 h-24" />

        <ImageTooltip tooltipText="Scissors" className="w-48 h-48">
          <ScissorsIcon />
        </ImageTooltip>
      </div>

      <Link to="/" className="flex justify-center">
        <Button size="lg">Play Again</Button>
      </Link>
    </div>
  )
}
