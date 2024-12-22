import { Button } from './ui/Button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/Dialog'

export default function Footer() {
  return (
    <footer className=" bg-black text-white flex justify-between p-4 py-4 text-base items-center">
      <p>
        Developed by
        <a
          href="https://github.com/lcs-franco"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline ml-1"
        >
          Lucas Franco
        </a>
      </p>

      <Dialog>
        <DialogTrigger>
          <Button asChild variant="outline" className="text-black">
            Rules
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-2xl">Game Rules</DialogTitle>
            <DialogDescription className="space-y-4 text-xl">
              <p>
                Players must simultaneously stretch out their hands, each
                forming a symbol (representing rock, paper, or scissors).
              </p>
              <p>
                Then, players compare their symbols to determine the winner as
                follows:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Rock beats scissors (crushing or breaking them).</li>
                <li>Scissors beat paper (cutting it).</li>
                <li>Paper beats rock (wrapping it).</li>
              </ul>
              <p>
                If both players make the same gesture, it's a tie, and they
                usually play again until there is a winner.
              </p>
              <p className="font-bold">
                This game has one single rule: it's not allowed to show rock
                twice in a row.
              </p>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </footer>
  )
}
