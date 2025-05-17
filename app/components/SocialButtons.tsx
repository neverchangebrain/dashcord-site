import GithubIcon from "@/app/components/icons/GithubIcon";
import DiscordIcon from "@/app/components/icons/DiscordIcon";
import { DISCORD_URL, GITHUB_URL } from "@/lib/constants";
import SocialButton from "@/app/components/ui/SocialButton";

export default function SocialButtons() {
  return (
    <div className="mt-[105px] flex gap-[30px]">
      <SocialButton
        href={GITHUB_URL}
        icon={<GithubIcon />}
        label="Github"
        textColor="#24292f"
        ml={31}
      />
      <SocialButton
        href={DISCORD_URL}
        icon={<DiscordIcon />}
        label="Discord"
        textColor="#5865f2"
        ml={28}
      />
    </div>
  );
}
