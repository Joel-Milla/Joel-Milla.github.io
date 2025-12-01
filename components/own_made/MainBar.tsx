"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MainBarProps {
  userName: string;
  navItems: string[];
}

export function MainBar({ userName, navItems }: MainBarProps) {
  const pathname = usePathname();

  // Function to check if a nav item is active
  const isActive = (item: string) => {
    const itemPath =
      item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`;
    return pathname === itemPath;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 w-full flex items-center justify-between px-8 py-4 bg-white/80 shadow-sm rounded-b-2xl backdrop-blur-sm z-50">
      <Link href="/">
        <Button
          variant="ghost"
          className="font-bold text-xl p-0 hover:bg-transparent cursor-pointer"
        >
          {userName}
        </Button>
      </Link>
      <div className="flex gap-2 sm:gap-4 items-center">
        {navItems.map((item) => {
          const href =
            item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`;
          const active = isActive(item);

          return (
            <Link key={item} href={href}>
              <Button
                variant={active ? "secondary" : "ghost"}
                className={
                  active
                    ? "rounded-xl font-medium px-4 py-2 shadow-none bg-muted text-foreground cursor-pointer"
                    : "font-medium px-4 py-2 shadow-none text-muted-foreground cursor-pointer"
                }
              >
                {item}
              </Button>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
