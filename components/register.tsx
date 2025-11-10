import { Button } from "./ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";

export const Register = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"ghost"}>Register</Button>
      </DialogTrigger>
      <DialogContent className="w-200 h-150">
        <DialogHeader>
          <DialogTitle className="text-2xl">Register</DialogTitle>
          <DialogClose />
          <DialogDescription>Ronaldo</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
