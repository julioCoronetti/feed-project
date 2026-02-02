import { Login } from "@/components/login";
import { Navigation } from "@/components/navigation";
import { Register } from "@/components/register";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Feed Project",
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

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR" className={poppins.variable}>
      <body className="w-full h-screen flex flex-col items-center">
        <header className="my-7 w-full px-6">
          <div className="grid grid-cols-3 items-center">
            <div />
            <div className="justify-self-center">
              <Navigation />
            </div>
            <div className="justify-self-end flex gap-2 items-center">
              <Register />
              <Login />
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
