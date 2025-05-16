import DashboardHeader from "@/app/components/DashboardHeader";
import StartHere from "@/app/components/StartHere";
import SocialButtons from "@/app/components/SocialButtons";

export default function LeftSection() {
  return (
    <div className="w-full lg:max-w-[400px] flex flex-col">
      <DashboardHeader />
      <StartHere />
      <SocialButtons />
    </div>
  );
}
