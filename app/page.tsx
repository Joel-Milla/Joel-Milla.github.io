import { MainBar } from "@/components/own_made/MainBar";
import { Presentation } from "@/components/sections/Presentation";

export default function Home() {
  return (
    <div>
      <MainBar
        userName="Joel Milla"
        navItems={[
          "Home",
          "About",
          "Experience",
          "Projects",
          "Blog",
          "Contact",
        ]}
      />
      <Presentation />
    </div>
  );
}
