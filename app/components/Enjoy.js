import React from "react";
import Image from "next/image";
import enjoy from "@/public/enjoy.png";
import locally from "@/public/locally.png";
import line from "@/public/line.png";
export default function Enjoy() {
  return (
    <section className="">
      <div className="sm:hidden flex">
        <div className="px-[6%]  -mt-[20%]">
          <div className="mb-28">
            <div>
              <Image
                src={enjoy}
                alt="enjoying the view"
                className="w-full shadow-[0_75px_100px_-50px_#38425580]"
              />
            </div>
            <div className="flex flex-col justify-center items-center mt-14">
              <Image src={line} alt="enjoying the view" />
              <h4 className="font-league font-bold text-[30px] text-center leading-[40px] mb-4 mt-8">
                Enjoyable place <br /> for all the family
              </h4>
              <p className="text-center font-league">
                Our relaxed surroundings make dining with us a great experience
                for everyone. We can even arrange a tour of the farm before your
                meal.
              </p>
            </div>
          </div>
          <div className="mb-28">
            <div>
              <Image
                src={locally}
                alt="enjoying the view"
                className="w-full shadow-[0_75px_100px_-50px_#38425580]"
              />
            </div>
            <div className="flex flex-col justify-center items-center mt-14">
              <Image src={line} alt="enjoying the view" />
              <h4 className="font-league font-bold text-[30px] text-center leading-[40px] mb-4 mt-8">
                The most locally <br /> sourced food
              </h4>
              <p className="text-center font-league">
                All our ingredients come directly from our farm or local
                fishery. So you can be sure that you’re eating the freshest,
                most sustainable food.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:flex hidden">
        <div className="flex">
          <div className="w-[895px] h-[320px] bg-[#5C6779]">yyyyyy</div>
        </div>
      </div>
    </section>
  );
}
