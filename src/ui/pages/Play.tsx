import { useGameProvider } from '@app/contexts/GameProvider'

export default function Play() {
  const { chooseOption } = useGameProvider()

  const handleOptionClick = (option) => {
    chooseOption(option)
  }

  return (
    <div className="flex flex-col items-center mt-20">
      <div className="relative w-96 h-96">
        <img
          src="/fistE.png"
          alt="Rock"
          onClick={() => handleOptionClick('rock')}
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-48 h-48"
        />
        <img
          src="/handE.png"
          alt="Paper"
          onClick={() => handleOptionClick('paper')}
          className="absolute bottom-0 left-0 transform -translate-x-20 translate-y-20 w-48 h-48"
        />
        <img
          src="/scissorsE.png"
          alt="Scissors"
          onClick={() => handleOptionClick('scissors')}
          className="absolute bottom-0 right-0 transform translate-x-20 translate-y-20 w-48 h-48"
        />
      </div>
      <p className="mt-32 mb-2 text-lg text-center"></p>
    </div>
  )
}
