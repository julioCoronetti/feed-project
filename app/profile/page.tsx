import { Card } from "@/components/ui/card";
import { ProfileCardUser } from "./components/profile";
import { Separator } from "@/components/ui/separator";
import { Settings } from "lucide-react";

const Profile = () => {
  return (
    <div className="w-full flex flex-col gap-5 items-center">
      <h1 className="text-3xl font-medium w-160">Profile</h1>
      <div className="w-160 flex justify-between">
        <Card className="w-60 h-130 overflow-hidden py-2 px-4">
          <h2 className="h-10 flex items-center font-medium gap-2">
            <Settings />
            Settings
          </h2>
          <Separator className="bg-accent-foreground" />
        </Card>
        <ProfileCardUser />
      </div>
    </div>
  );
};

export default Profile;
