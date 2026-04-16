import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { Button } from "@/components/ui/button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className="min-h-screen"
    >
      <h2 className="text-4xl text-green-500">Title 2</h2>

      <Button variant="outline">Button</Button>
    </div>
  );
}
