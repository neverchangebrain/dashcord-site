import GithubIcon from "@/app/components/icons/GithubIcon";
import DiscordIcon from "@/app/components/icons/DiscordIcon";
import { DISCORD_URL, GITHUB_URL } from "@/lib/constants";

export default function SocialButtons() {
  return (
    <div className="mt-[105px] flex gap-[30px]">
      <a
        href={GITHUB_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center w-[83px] h-[30px] rounded-[10px] bg-white shadow-[0_1px_2px_0_rgba(0,0,0,0.04)]"
      >
        <span className="absolute left-[6px] top-[4px]">
          <GithubIcon />
        </span>
        <span
          className="ml-[31px] text-[#24292f] font-overpass font-black text-[15px] leading-[1.4] absolute h-[18px]"
          style={{ fontFamily: "Overpass, sans-serif" }}
        >
          Github
        </span>
      </a>
      <a
        href={DISCORD_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center w-[85px] h-[30px] rounded-[10px] bg-white shadow-[0_1px_2px_0_rgba(0,0,0,0.04)]"
      >
        <span className="absolute left-[6px] top-[6px]">
          <DiscordIcon />
        </span>
        <span
          className="ml-[28px] text-[#5865f2] font-overpass font-black text-[14px] leading-[1.4] absolute h-[18px]"
          style={{ fontFamily: "Overpass, sans-serif" }}
        >
          Discord
        </span>
      </a>
    </div>
  );
}
