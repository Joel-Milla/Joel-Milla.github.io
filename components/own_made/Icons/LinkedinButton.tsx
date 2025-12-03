import { Button } from "@/components/ui/button";
import Image from "next/image";

export function LinkedinButton({ size }: { size: number }) {
  return (
    <Button
      variant={"outline"}
      size={"icon"}
      onClick={() =>
        window.open("https://www.linkedin.com/in/joelmilla/", "_blank")
      }
    >
      <Image src="/linkedin.svg" alt="Linkedin" width={size} height={size} />
    </Button>
  );
}
