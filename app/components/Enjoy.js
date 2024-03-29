import React from "react";
import Image from "next/image";
import enjoy from "@/public/enjoy.png";
import enjoytab from "@/public/enjoytab.png";
import locally from "@/public/locally.png";
import localtab from "@/public/localtab.png";
import line from "@/public/line.png";
import enjoyhero from "@/public/enjoyhero.png";
import enjoy2 from "@/public/enjoy2.png";
export default function Enjoy() {
  return (
    <section className=" lg:pl-[11.5%] pl-0  w-full bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="lg:hidden flex">
          <div className="px-[6%] md:px-[10%]  -mt-[20%]">
            <div className="mb-28">
              <div>
                <Image
                  src={enjoy}
                  alt="enjoying the view"
                  className="w-full md:hidden flex shadow-[0_75px_100px_-50px_#38425580]"
                />
                <Image
                  src={enjoytab}
                  alt="enjoying the view"
                  className="w-full md:flex hidden shadow-[0_75px_100px_-50px_#38425580]"
                />
              </div>
              <div className="flex flex-col justify-center items-center mt-14">
                <Image src={line} alt="enjoying the view" />
                <h4 className="font-league font-bold text-[30px] md:text-[48px] text-center leading-[40px] md:leading-[48px] mb-4 mt-8">
                  Enjoyable place <br /> for all the family
                </h4>
                <p className="text-center text-base md:text-[20px] font-league">
                  Our relaxed surroundings make dining with us a great
                  experience for everyone. We can even arrange a tour of the
                  farm before your meal.
                </p>
              </div>
            </div>
            <div className="mb-28">
              <div>
                <Image
                  src={locally}
                  alt="enjoying the view"
                  className="w-full md:hidden flex shadow-[0_75px_100px_-50px_#38425580]"
                />
                <Image
                  src={localtab}
                  alt="enjoying the view"
                  className="w-full md:flex hidden shadow-[0_75px_100px_-50px_#38425580]"
                />
              </div>
              <div className="flex flex-col justify-center items-center mt-14">
                <Image src={line} alt="enjoying the view" />
                <h4 className="font-league font-bold text-[30px] md:text-[48px] text-center leading-[40px] mb-4 mt-8">
                  The most locally <br /> sourced food
                </h4>
                <p className="text-center text-base md:text-[20px] font-league">
                  All our ingredients come directly from our farm or local
                  fishery. So you can be sure that you’re eating the freshest,
                  most sustainable food.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex flex-col hidden">
          <div className="grid grid-cols-12 w-full py-[10%]">
            <div className="col-span-7 bg-[#f2f3f5] w-full h-[320px] rounded-tr-[100px] relative">
              <Image
                src={enjoyhero}
                alt="enjoying the view"
                className=" -mt-[30%] shadow-[0_75px_100px_-50px_#38425580]"
              />
            </div>
            <div className="col-span-5 w-full relative -top-[22%] -left-[12%]">
              <Image src={line} alt="enjoying the view" />
              <h4 className="font-league font-bold text-[48px]  leading-[48px] text-[#242B37] mb-4 mt-14">
                Enjoyable place <br /> for all the family
              </h4>
              <p className=" font-league text-[#242B37] font-normal text-[20px] w-[445px]">
                Our relaxed surroundings make dining with us a great experience
                for everyone. We can even arrange a tour of the farm before your
                meal.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12 w-full pt-[30%] pb-[14%] pr-[11.5%]">
            <div className="col-span-7 order-last grid justify-end bg-[#f2f3f5] w-full h-[320px] rounded-tl-[100px] relative">
              <Image
                src={enjoy2}
                alt="enjoying the view"
                className=" -mt-[30%] shadow-[0_75px_100px_-50px_#38425580]"
              />
            </div>
            <div className="col-span-5 w-full relative ">
              <Image src={line} alt="enjoying the view" />
              <h4 className="font-league font-bold text-[48px]  leading-[48px] text-[#242B37] mb-4 mt-14">
                Enjoyable place <br /> for all the family
              </h4>
              <p className=" font-league text-[#242B37] font-normal text-[20px] w-[445px]">
                Our relaxed surroundings make dining with us a great experience
                for everyone. We can even arrange a tour of the farm before your
                meal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
