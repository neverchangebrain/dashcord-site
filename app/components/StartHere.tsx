export default function StartHere() {
  return (
    <div className="mt-[74px]">
      <div className="w-full max-w-[290px] h-[56px]">
        <span
          className="text-white font-overpass font-black text-[46px] leading-[56px]"
          style={{ fontFamily: "Overpass, sans-serif" }}
        >
          Старт здесь!
        </span>
      </div>
      <div className="mt-[5px] w-full max-w-[400px] h-auto">
        <span
          className="text-[#54546d] font-overpass font-black text-[15px] leading-[1.2] absolute w-[400px] h-[55px]"
          style={{ fontFamily: "Overpass, sans-serif" }}
        >
          Этот сайт служит changelog-центром проекта, источником обновлений,
          идеями для блога и просто местом жизни и веселья.
        </span>
      </div>
    </div>
  );
}
