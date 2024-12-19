import { useGameProvider } from '@app/contexts/GameProvider'
import { PaperIcon } from '@ui/components/icons/PaperIcon'
import { RockIcon } from '@ui/components/icons/RockIcon'
import { ScissorsIcon } from '@ui/components/icons/ScissorsIcon'
import { ImageTooltip } from '@ui/components/ImageTooltip'

export default function Play() {
  const { chooseOption } = useGameProvider()

  return (
    <div className="flex flex-col items-center mt-20">
      <div className="relative w-96 h-96">
        <ImageTooltip
          tooltipText="Rock"
          onClick={() => chooseOption('rock')}
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-48 h-48"
        >
          <RockIcon />
        </ImageTooltip>
        <ImageTooltip
          tooltipText="Paper"
          onClick={() => chooseOption('paper')}
          className="absolute bottom-0 left-0 transform -translate-x-20 translate-y-20 w-48 h-48"
        >
          <PaperIcon />
        </ImageTooltip>
        <ImageTooltip
          tooltipText="Scissors"
          onClick={() => chooseOption('scissors')}
          className="absolute bottom-0 right-0 transform translate-x-20 translate-y-20 w-48 h-48"
        >
          <ScissorsIcon />
        </ImageTooltip>
      </div>
      <p className="mt-32 mb-2 text-lg text-center"></p>
    </div>
  )
}
