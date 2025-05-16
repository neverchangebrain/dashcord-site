import Image from "next/image";

export default function RightSection() {
  return (
    <div className="w-full lg:max-w-[378px] flex flex-col">
      <div className="relative w-full aspect-[378/335] rounded-[15px] overflow-hidden">
        <Image
          src="/cat.png"
          alt="Dashcord preview image"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      <div className="mt-[5px] w-full max-w-[341px]">
        <span
          className="block text-[#54546d] font-jost font-extrabold text-[13px] leading-[1.2]"
          style={{ fontFamily: "Jost, sans-serif" }}
        >
          Dashcord — ироничный Discord-кликер про жизнь СНГ-серверов,
          реализованный как Web Activity и open source.
        </span>
      </div>
    </div>
  );
}
