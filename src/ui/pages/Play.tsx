import { CloverIcon } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Choice, useGameProvider } from '@app/contexts/GameProvider'
import { useToast } from '@app/hooks/use-toast'
import { PaperIcon } from '@ui/components/icons/PaperIcon'
import { RockIcon } from '@ui/components/icons/RockIcon'
import { ScissorsIcon } from '@ui/components/icons/ScissorsIcon'
import { ImageTooltip } from '@ui/components/ImageTooltip'
import { Button } from '@ui/components/ui/Button'
import { Spinner } from '@ui/components/ui/Spinner'

export default function Play() {
  const { chooseOption, calculating, randomChoose } = useGameProvider()
  const navigate = useNavigate()
  const [selectedChoice, setSelectedChoice] = useState<Choice | null>(null)
  const { toast } = useToast()

  const handleSubmit = async (option?: Choice, random = false) => {
    try {
      setSelectedChoice(random ? null : option!)
      random ? await randomChoose() : await chooseOption(option!)
      navigate('/game')
    } catch (error) {
      if (error instanceof Error)
        toast({
          variant: 'destructive',
          title: 'Rock twice option',
          description: error.message,
        })

      setSelectedChoice(null)
    }
  }

  return (
    <div className="flex flex-col items-center p-10 font-bold">
      <h1 className="mb-7 text-3xl">Choose one:</h1>

      <div className="relative w-96 h-96">
        <ImageTooltip
          tooltipText="rock"
          onClick={() => handleSubmit('rock')}
          isSelected={selectedChoice === 'rock'}
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-48 h-48"
        >
          <RockIcon />
        </ImageTooltip>
        <ImageTooltip
          tooltipText="paper"
          onClick={() => handleSubmit('paper')}
          isSelected={selectedChoice === 'paper'}
          className="absolute bottom-0 left-0 transform -translate-x-20 translate-y-20 w-48 h-48 mb-8"
        >
          <PaperIcon />
        </ImageTooltip>
        <ImageTooltip
          tooltipText="scissors"
          onClick={() => handleSubmit('scissors')}
          isSelected={selectedChoice === 'scissors'}
          className="absolute bottom-0 right-0 transform translate-x-20 translate-y-20 w-48 h-48 mb-8"
        >
          <ScissorsIcon />
        </ImageTooltip>
      </div>
      <div className="mt-20">
        {calculating ? (
          <div className="flex flex-col items-center gap-3">
            <span>Opponent is choosing a hand ...</span>
            <Spinner />
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3">
            <span>Or ...</span>
            <Button onClick={() => handleSubmit(undefined, true)}>
              Try your luck
              <CloverIcon />
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
