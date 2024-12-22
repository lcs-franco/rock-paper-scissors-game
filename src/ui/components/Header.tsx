import { useGameProvider } from '@app/contexts/GameProvider'
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card'

export default function Header() {
  const { playerScore, machineScore } = useGameProvider()

  return (
    <div className="flex justify-between p-4 text-xl items-center">
      <div className="ml-10">
        <h1 className="font-extrabold text-4xl">Jo Ken Pô</h1>
      </div>
      <div className="flex flex-col px-8 rounded-2xl">
        <Card>
          <CardHeader className="items-center">
            <CardTitle>Score</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Player: {playerScore} </p>
            <p>Machine: {machineScore} </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
