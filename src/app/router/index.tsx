import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Game from '@ui/pages/Game'
import Play from '@ui/pages/Play'

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
