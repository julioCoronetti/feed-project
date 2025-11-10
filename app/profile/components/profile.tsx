import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Edit } from "lucide-react";

export const ProfileCardUser = () => {
  return (
    <div className="flex flex-col items-end gap-5">
      <Card className="w-90 h-70 flex items-center overflow-hidden bg-background relative ">
        <CardHeader className="w-90 h-20 rounded-t-2xl"></CardHeader>
        <hr className="border border-foreground w-90" />
        <div className="w-20 h-20 absolute rounded-full right-10 top-10 border-2 border-foreground bg-accent-foreground"></div>
        <CardContent className="w-90 h-20 p-5">
          <CardTitle className="text-foreground text-xl">Romilso</CardTitle>
          <p className="text-gray-300">@romilso</p>
          <CardDescription className="w-80 h-20 border-2 border-foreground/30 rounded-2xl p-2 mt-5">
            description user
          </CardDescription>
        </CardContent>
      </Card>

      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-25 h-10 flex justify-center items-center gap-3">
            <Edit /> Edit
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>
            oi
          </DialogTitle>
        </DialogContent>
      </Dialog>
    </div>
  );
};
