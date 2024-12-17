import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Play from '../../ui/Play'
import Game from '../../ui/Game'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/game" element={<Game />} />
        <Route path="/" element={<Play />} />
      </Routes>
    </BrowserRouter>
  )
}
