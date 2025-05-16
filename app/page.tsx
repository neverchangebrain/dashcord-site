import LeftSection from "@/app/components/LeftSection";
import RightSection from "@/app/components/RightSection";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#111115] flex items-center justify-center p-4 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-16 max-w-[1121px] w-full">
        <LeftSection />
        <RightSection />
      </div>
    </div>
  );
}
