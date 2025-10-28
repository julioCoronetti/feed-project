import { Home, Search, User } from "lucide-react";
import Link from "next/link";

export const Navigation = () => {
  return (
    <nav className="w-100 h-15 border-2 border-foreground bg-background rounded-2xl flex justify-around items-center shadow-md">
      <h1 className="font-sans font-medium text-2xl text-foreground select-none">
        Feed Project
      </h1>
      <div className="w-40 h-15 rounded-2xl flex justify-around items-center">
        <Link href="/">
          <Home
            size={40}
            className="hover:bg-accent p-1.5 rounded-2xl transition duration-300"
          />
        </Link>
        <Link href="/search">
          <Search
            size={40}
            className="hover:bg-accent p-1.5 rounded-2xl transition duration-300"
          />
        </Link>
        <Link href="/profile">
          <User
            size={40}
            className="hover:bg-accent p-1.5 rounded-2xl transition duration-300"
          />
        </Link>
      </div>
    </nav>
  );
};
