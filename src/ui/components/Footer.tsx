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
          <Button variant="outline" size="sm" className="text-black">
            Rules
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </footer>
  )
}
