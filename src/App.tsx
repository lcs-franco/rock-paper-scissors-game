import Header from '@ui/components/Header'
import { GameProvider } from './app/contexts/GameProvider'
import { Router } from './app/router'
import Footer from '@ui/components/Footer'

export default function App() {
  return (
    <GameProvider>
      <div className="flex flex-col min-h-screen overflow-x-hidden">
        <Header />
        <main className="flex-grow">
          <Router />
        </main>
        <Footer />
      </div>
    </GameProvider>
  )
}
