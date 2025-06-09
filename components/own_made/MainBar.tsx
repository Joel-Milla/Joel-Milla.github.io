import { Button } from "@/components/ui/button";

interface MainBarProps {
  userName: string;
  navItems: string[];
}

export function MainBar({ userName, navItems }: MainBarProps) {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 bg-white/80 dark:bg-black/60 backdrop-blur-md shadow-sm rounded-b-2xl">
      <span className="font-bold text-xl">{userName}</span>
      <div className="flex gap-2 sm:gap-4 items-center">
        {navItems.map((item, idx) => (
          <Button
            key={item}
            variant={idx === 0 ? "secondary" : "ghost"}
            className={
              idx === 0
                ? "rounded-xl font-medium px-4 py-2 shadow-none bg-muted text-foreground"
                : "font-medium px-4 py-2 shadow-none text-muted-foreground"
            }
          >
            {item}
          </Button>
        ))}
      </div>
    </nav>
  );
}
