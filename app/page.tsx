import { Profile } from "@/components/Profile";
import { Card } from "@/components/ui/card";

const App = () => {
  return (
    <div className="w-full h-screen flex justify-center gap-15 pt-30">
      <Profile />
      <Card className="w-150 h-full bg-accent rounded-b-none"></Card>
    </div>
  );
};

export default App;
