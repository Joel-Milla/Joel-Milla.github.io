import { Button } from "@/components/ui/button";
import Image from "next/image";

interface GithubButtonProps {
  url: string;
  size?: number;
}
export function GithubButton({ url, size = 24 }: GithubButtonProps) {
  return (
    <Button
      variant={"outline"}
      size={"icon"}
      onClick={() => window.open(url, "_blank")}
    >
      <Image src="/github-mark.svg" alt="GitHub" width={size} height={size} />
    </Button>
  );
}
