import React from "react";
import Image from "next/image";
import hero from "@/public/mobile.png";
import heror from "@/public/heror.png";
import herobig from "@/public/herobig.png";
import Logo from "./logo";
export default function Hero() {
  return (
    <section className="h-screen">
      <div className="sm:hidden flex">
        <div className="w-full h-screen bg-[#111111]  ">
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
      </div>

      <div className="sm:flex hidden">
        <div
          className="w-full h-[95vh]   bg-[#111111]"
          style={{
            // use the src property of the image object
            backgroundImage: `url(${heror.src})`,
            // other styles
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "95vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          {" "}
          <div className="  w-full h-full">
            <div className="flex items-center h-[95vh] pl-[11.5%] ">
              <div>
                <h3 className="font-league text-white text-[70px] font-light  leading-[70px]">
                  Exquisite dining <br /> since 1989
                </h3>
                <p className="font-league text-white text-[20px] w-[445px] font-normal leading-[26px] mt-5 ">
                  Experience our seasonal menu in beautiful country
                  surroundings. Eat the freshest produce from the comfort of our
                  farmhouse.
                </p>
                <button className="uppercase font-league mt-8 mb-12 w-[245px] h-[60px] flex justify-center items-center border border-white text-white font-semibold text-base tracking-[2.5px]">
                  book a table
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
