import React from "react";
import Image from "next/image";
import hero from "@/public/mobile.png";
import logo from "@/public/logo mobile.png";
import Logo from "./logo";
export default function Hero() {
  return (
    <section className="">
      <div className="w-full h-screen bg-[#111111] ">
        <Image src={hero} alt="hero" className="w-full " />
        <div className="flex flex-col w-full items-center justify-center my-5">
          <div>
          <Logo/>
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
    </section>
  );
}
