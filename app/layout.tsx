import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Feed",
  description: "Social Feed",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

interface RootLayoutProps {
  children: React.ReactNode;
}

// ...existing code...
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR" className={poppins.variable}>
      <body className="w-full h-screen flex flex-col items-center">
        <header className="grid grid-cols-3 my-7 w-full max-w-360">
          <div></div>
          <div className="flex justify-center">
            <Navigation />
          </div>
          <div className="flex gap-2 justify-end items-center">
            <Button variant={"ghost"}>Register</Button>
            <Button>Login</Button>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
