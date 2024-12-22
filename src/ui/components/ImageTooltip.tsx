import { cn } from '@app/utils/cn'
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
  isSelected?: boolean
}

export function ImageTooltip({
  children,
  onClick,
  tooltipText,
  className,
  isSelected,
}: ImageTooltipProps) {
  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            onClick={onClick}
            className={cn(
              'transform transition-transform duration-200',
              isSelected ? 'scale-110' : 'hover:scale-110',
              className,
            )}
          >
            <div
              className={cn(
                'absolute inset-0 rounded-full transition-all duration-300 ease-in-out',
                isSelected
                  ? 'bg-gray-500 opacity-50 scale-100'
                  : 'bg-transparent opacity-0 scale-75',
              )}
            ></div>
            <div className="relative">{children}</div>
          </div>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p className="font-bold">{tooltipText}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
