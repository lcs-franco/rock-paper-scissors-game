import { useGameProvider } from '@app/contexts/GameProvider'

export default function Header() {
  const { score } = useGameProvider()

  return (
    <div className="flex justify-between p-4 text-xl">
      <div>
        <h3>Pedra</h3>
        <h3>Papel</h3>
        <h3>Tesoura</h3>
      </div>
      <div className="flex flex-col px-8 rounded-2xl">
        <h3 className="">Score</h3>
        <h1 className="justify-center flex font-extrabold text-3xl">{score}</h1>
      </div>
    </div>
  )
}
