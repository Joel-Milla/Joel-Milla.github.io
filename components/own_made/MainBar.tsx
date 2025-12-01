"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface MainBarProps {
  userName: string;
  navItems: string[];
}

export function MainBar({ userName, navItems }: MainBarProps) {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) =>
        document.getElementById(item.toLowerCase())
      );

      // Find which section is currently in view
      // We check from top to bottom and activate the first section whose top is above the middle of the screen
      const scrollPosition = window.scrollY + 100; // Offset for navbar

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    // Call once on mount
    handleScroll();

    // Listen to scroll events
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  // Function to check if a nav item is active
  const isActive = (item: string) => {
    return activeSection === item.toLowerCase();
  };

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 w-full flex items-center justify-between px-8 py-4 bg-white/80 shadow-sm rounded-b-2xl backdrop-blur-sm z-50">
      <button
        onClick={() => scrollToSection("home")}
        className="font-bold text-xl p-0 hover:bg-transparent cursor-pointer bg-transparent border-none"
      >
        {userName}
      </button>
      <div className="flex gap-2 sm:gap-4 items-center">
        {navItems.map((item) => {
          const sectionId = item.toLowerCase();
          const active = isActive(item);

          return (
            <Button
              key={item}
              onClick={() => scrollToSection(sectionId)}
              variant={active ? "secondary" : "ghost"}
              className={
                active
                  ? "rounded-xl font-medium px-4 py-2 shadow-none bg-muted text-foreground cursor-pointer"
                  : "font-medium px-4 py-2 shadow-none text-muted-foreground cursor-pointer"
              }
            >
              {item}
            </Button>
          );
        })}
      </div>
    </nav>
  );
}
