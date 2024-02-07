import React from "react";
import Image from "next/image";
import hero from "@/public/mobile.png";
import herobig from "@/public/herobig.png";
import Logo from "./logo";
export default function Hero() {
  return (
    <section>
      <div className="w-full h-screen bg-[#111111] sm:hidden flex ">
        <Image src={hero} alt="hero" className="w-full " />
        <div className="flex flex-col w-full items-center justify-center my-5">
          <div>
            <Logo />
          </div>
          <div className="px-[6%]">
            <h3 className="font-league text-white text-[32px] font-light text-center leading-10 mt-10">
              Exquisite dining <br /> since 1989
            </h3>
            <p className="font-league text-white text-base font-normal leading-[26px] mt-5 text-center">
              Experience our seasonal menu in beautiful country surroundings.
              Eat the freshest produce from the comfort of our farmhouse.
            </p>
          </div>
          <button className="uppercase font-league mt-14 w-[245px] h-[60px] flex justify-center items-center border border-white text-white font-semibold text-base tracking-[2.5px]">
            book a table
          </button>
        </div>
      </div>

      <div className="w-full h-[95vh]  bg-[#111111]">
        <div className="grid grid-cols-12">
          <div className="col-span-4 relative left-[35%] mt-[10%] w-full h-full">
            <div>
              <Logo />
              <h3 className="font-league text-white text-[70px] font-light  leading-[70px] mt-[30%]">
                Exquisite dining <br /> since 1989
              </h3>
              <p className="font-league text-white text-[20px] w-[445px] font-normal leading-[26px] mt-5 ">
                Experience our seasonal menu in beautiful country surroundings.
                Eat the freshest produce from the comfort of our farmhouse.
              </p>
              <button className="uppercase font-league mt-8 w-[245px] h-[60px] flex justify-center items-center border border-white text-white font-semibold text-base tracking-[2.5px]">
                book a table
              </button>
            </div>
          </div>
          <div className="col-span-8">
            <Image
              src={herobig}
              className="w-full h-[95vh] object-cover"
              alt="heroboig"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
