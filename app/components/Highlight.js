import React from "react";
import Image from "next/image";
import line from "@/public/line.png";
import fillet from "@/public/fillet.png";
export default function Highlight() {
  return (
    <section className="bg-[#111111] pt-5 text-white">
      <div className="flex flex-col justify-center items-center mt-14 px-[6%]">
        <Image src={line} alt="enjoying the view" />
        <h4 className="font-league font-bold text-[30px] text-center leading-[40px] mb-4 mt-8">
          A few highlights from <br /> our menu
        </h4>
        <p className="text-center font-league mb-24">
          We cater for all dietary requirements, but here’s a glimpse at some of
          our diner’s favourites. Our menu is revamped every season.
        </p>
      </div>
      <div className="px-[6%]">
        <div>
          <Image src={fillet} className="w-full" alt="enjoying the view" />
        </div>
      </div>
    </section>
  );
}
