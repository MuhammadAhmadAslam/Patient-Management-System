"use client";

export default function Loader() {
  return (
    <div className="flex items-center justify-center bg-white mt-12">
      <div className="relative w-[80px] h-[80px]">
        <div
          className="absolute top-0 left-0 w-full h-full border-4 border-[#207DFF] rounded-full animate-spin border-t-[#F87171]"
        ></div>
        <div className="absolute top-2 left-2 w-12 h-12 bg-white rounded-full flex items-center justify-center">
        </div>
      </div>
    </div>
  );
}
