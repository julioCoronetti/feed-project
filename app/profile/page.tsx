import { Card } from "@/components/ui/card";
import { ProfileCardUser } from "./components/profile";

const Profile = () => {
  return (
    <div className="w-full flex flex-col gap-5 items-center">
      <h1 className="text-3xl font-medium w-160">Profile</h1>
      <div className="w-160 flex justify-between">
        <Card className="w-60 h-130 overflow-hidden">
          <p className="h-10 flex justify-center items-center">
            Recommendations
          </p>
          <div className="w-full h-20 border-t-2 border-foreground"></div>
          <div className="w-full h-20 border-t-2 border-foreground"></div>
          <div className="w-full h-20 border-t-2 border-foreground"></div>
          <div className="w-full h-20 border-t-2 border-foreground"></div>
          <div className="w-full h-20 border-t-2 border-foreground"></div>
          <div className="w-full h-20 border-t-2 border-foreground"></div>
        </Card>
        <ProfileCardUser />
      </div>
    </div>
  );
};

export default Profile;
