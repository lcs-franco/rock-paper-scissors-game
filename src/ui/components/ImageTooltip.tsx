import { cn } from '@app/libs/utils'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/Tooltip'

interface ImageTooltipProps {
  children: JSX.Element
  onClick?: () => void
  tooltipText: string
  className?: string
}

export function ImageTooltip({
  children,
  onClick,
  tooltipText,
  className,
}: ImageTooltipProps) {
  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            onClick={onClick}
            className={cn(
              'transform transition-transform duration-200 hover:scale-110',
              className,
            )}
          >
            {children}
          </div>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p className="font-bold">{tooltipText}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
