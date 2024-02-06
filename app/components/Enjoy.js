import React from "react";
import Image from "next/image";
import enjoy from "@/public/enjoy.png";
import line from "@/public/line.png";
export default function Enjoy() {
  return (
    <section className="px-[6%] -mt-[20%]">
      <div>
        <Image
          src={enjoy}
          alt="enjoying the view"
          className="w-full shadow-[0_75px_100px_-50px_#38425580]"
        />
      </div>
      <div className="flex flex-col justify-center items-center mt-14">
        <Image src={line} alt="enjoying the view" />
        <h4 className="font-league font-bold text-[28px] mt-8">
          Enjoyable place for
        </h4>
        <p className="text-center font-league">
          Our relaxed surroundings make dining with us a great experience for
          everyone. We can even arrange a tour of the farm before your meal.
        </p>
      </div>
    </section>
  );
}
