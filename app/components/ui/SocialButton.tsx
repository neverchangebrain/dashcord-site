import { ReactNode } from "react";

interface SocialButtonProps {
  href: string;
  icon: ReactNode;
  label: string;
  textColor: string;
  ml: number;
}

export default function SocialButton({
  href,
  icon,
  label,
  textColor,
  ml,
}: SocialButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex items-center w-[85px] h-[30px] rounded-[10px] bg-white shadow-[0_1px_2px_0_rgba(0,0,0,0.04)]"
    >
      <span className="absolute left-[6px]">{icon}</span>
      <span
        className="font-overpass font-black text-[14px] leading-[1.4] h-[18px]"
        style={{
          color: textColor,
          fontFamily: "Overpass, sans-serif",
          marginLeft: ml,
          position: "relative",
        }}
      >
        {label}
      </span>
    </a>
  );
}
