import React from "react";
import Image from "next/image";
import line from "@/public/line.png";
import fillet from "@/public/fillet.png";
import migron from "@/public/mignon.png";
import mousse from "@/public/mousse.jpeg";
export default function Highlight() {
  return (
    <section className="bg-[#111111] pt-5 pb-12 text-white sm:hidden flex">
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
        <div className="border-b-[1px] border-[rgba(255,255,255,0.14)]">
          <Image src={fillet} className="w-full" alt="enjoying the view" />
          <h4 className="font-league font-bold text-[22px] text-center leading-[40px] mb-2 mt-8">
            Seared Salmon Fillet
          </h4>
          <p className="text-center font-league pb-12">
            Our locally sourced salmon served with a refreshing buckwheat summer
            salad.
          </p>
        </div>
        <div className="border-b-[1px] border-[rgba(255,255,255,0.14)] pt-[8%]">
          <Image src={migron} className="w-full" alt="enjoying the view" />
          <h4 className="font-league font-bold text-[22px] text-center leading-[40px] mb-2 mt-8">
            Rosemary Filet Migno
          </h4>
          <p className="text-center font-league pb-12">
            Our prime beef served to your taste with a delicious choice of
            seasonal sides.
          </p>
        </div>
        <div className="pt-[8%]">
          <Image src={mousse} className="w-full" alt="enjoying the view" />
          <h4 className="font-league font-bold text-[22px] text-center leading-[40px] mb-2 mt-8">
            Summer Fruit Chocolate Mousse
          </h4>
          <p className="text-center font-league pb-12">
            Creamy mousse combined with summer fruits and dark chocolate
            shavings.
          </p>
        </div>
      </div>
    </section>
  );
}
