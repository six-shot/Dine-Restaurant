import React from "react";
import Image from "next/image";
import family from "@/public/family.png";
import family1 from "@/public/family1.png";
export default function Event() {
  return (
    <section>
      <div className="sm:hidden flex">
        <div className=" px-[6%] py-20">
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
              We love catering for entire families. So please bring everyone
              along for a special meal with your loved ones. We’ll provide a
              memorable experience for all..
            </p>
            <button className="uppercase font-league mt-14 w-[245px] h-[60px] flex justify-center items-center bg-black text-white font-semibold text-base tracking-[2.5px]">
              book a table
            </button>
          </div>
        </div>
      </div>
      <div className="sm:flex hidden">
        <div className=" py-[10%] w-full">
          <div className="px-[11.5%] flex gap-24  justify-between">
            <div className="flex flex-col flex-1">
              <Image
                src={family1}
                alt="family"
                className="w-full shadow-[0_75px_100px_-50px_#38425580]"
              />
            </div>
            <div className="flex   flex-1 flex-col">
              <h4 className="font-league font-bold text-[48px]  leading-[48px] text-[#242B37] mb-4 mt-14">
                Enjoyable place <br /> for all the family
              </h4>
              <p className=" font-league text-[#242B37] font-normal text-[20px] w-[445px]">
                Our relaxed surroundings make dining with us a great experience
                for everyone. We can even arrange a tour of the farm before your
                meal.
              </p>
              <button className="uppercase font-league mt-14 w-[245px] h-[60px] flex justify-center items-center bg-black text-white font-semibold text-base tracking-[2.5px]">
                book a table
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
