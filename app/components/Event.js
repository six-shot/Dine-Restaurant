import React from "react";
import Image from "next/image";
import family from "@/public/family.png";
export default function Event() {
  return (
    <section>
      <div className="px-[6%] py-20">
        <Image
          src={family}
          alt="family"
          className="w-full shadow-[0_75px_100px_-50px_#38425580]"
        />
        <div className="flex flex-col justify-center items-center mt-14">
          <h4 className="font-league font-bold text-[34px] text-center leading-[40px] mb-2 mt-8">
            Family Gathering
          </h4>
          <p className="text-center font-league">
            We love catering for entire families. So please bring everyone along
            for a special meal with your loved ones. We’ll provide a memorable
            experience for all..
          </p>
          <button className="uppercase font-league mt-14 w-[245px] h-[60px] flex justify-center items-center bg-black text-white font-semibold text-base tracking-[2.5px]">
            book a table
          </button>
        </div>
      </div>
    </section>
  );
}
