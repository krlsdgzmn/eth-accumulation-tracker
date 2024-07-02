import Image from "next/image";
import { ModeToggle } from "./ui/mode-toggle";

export default function Header() {
  return (
    <header className="top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:sticky">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <div className="flex items-center justify-center gap-4 py-2">
          {/* logo */}
          <Image
            src="logo.svg"
            alt="Logo"
            className="h-8 w-full"
            height={8}
            width={8}
          />
          <div className="flex flex-col min-w-48">
            <h1 className="font-bold text-lg">SkyMavis</h1>
            <p className="text-xs font-medium text-muted-foreground">
              ETH Accumulation Tracker
            </p>
          </div>
        </div>

        {/* add nav here */}
        <ModeToggle />
      </div>
    </header>
  );
}
