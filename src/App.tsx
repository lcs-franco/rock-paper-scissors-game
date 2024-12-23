import { Router } from '@app/router'
import Footer from '@ui/components/Footer'
import Header from '@ui/components/Header'
import { AspectRatio } from '@ui/components/ui/AspectRatio'
import { Toaster } from '@ui/components/ui/Toaster'
import { GameProvider } from './app/contexts/GameProvider'

export default function App() {
  return (
    <GameProvider>
      <div className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <AspectRatio>
            <img
              src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
              className="h-full w-full object-cover "
            />
          </AspectRatio>
        </div>

        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Router />
            <Toaster />
          </main>
          <Footer />
        </div>
      </div>
    </GameProvider>
  )
}
