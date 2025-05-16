import Image from "next/image";

export default function DashboardHeader() {
  return (
    <div className="flex items-start">
      <div className="relative w-[66px] h-[66px]">
        <Image src="/base.png" alt="Dashboard Icon" width={66} height={66} />
      </div>
      <div className="relative ml-[10px] flex flex-col">
        <span
          className="text-white font-overpass font-extrabold text-[25px] leading-[30px]"
          style={{ fontFamily: "Overpass, sans-serif" }}
        >
          Dashcord
        </span>
        <div className="relative w-[75px] h-[20px] flex items-center justify-center">
          <div className="absolute inset-0 bg-[#4756a2] rounded-[17px]" />
          <span
            className="relative text-white font-redhat font-extrabold text-[12px] leading-[15px] flex items-center justify-center"
            style={{
              fontFamily: "Red Hat Display, sans-serif",
            }}
          >
            LEGACY
          </span>
        </div>
      </div>
    </div>
  );
}
