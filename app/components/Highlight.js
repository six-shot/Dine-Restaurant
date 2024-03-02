import React from "react";
import Image from "next/image";
import line from "@/public/line.png";
import fillet from "@/public/fillet.png";
import salmon1 from "@/public/salmon1.png";
import migron from "@/public/mignon.png";
import mousse from "@/public/mousse.jpeg";
export default function Highlight() {
  return (
    <section className="bg-[#111111] w-full">
      <div className="max-w-[1440px] mx-auto">
        <div className="md:hidden flex">
          <div className="bg-[#111111] pt-5 pb-12 text-white">
            <div className="flex flex-col justify-center items-center mt-14 px-[6%]">
              <Image src={line} alt="enjoying the view" />
              <h4 className="font-league font-bold text-[30px] text-center leading-[40px] mb-4 mt-8">
                A few highlights from <br /> our menu
              </h4>
              <p className="text-center font-league mb-24">
                We cater for all dietary requirements, but here’s a glimpse at
                some of our diner’s favourites. Our menu is revamped every
                season.
              </p>
            </div>
            <div className="px-[6%]">
              <div className="border-b-[1px] border-[rgba(255,255,255,0.14)]">
                <Image
                  src={fillet}
                  className="w-full"
                  alt="enjoying the view"
                />
                <h4 className="font-league font-bold text-[22px] text-center leading-[40px] mb-2 mt-8">
                  Seared Salmon Fillet
                </h4>
                <p className="text-center font-league pb-12">
                  Our locally sourced salmon served with a refreshing buckwheat
                  summer salad.
                </p>
              </div>
              <div className="border-b-[1px] border-[rgba(255,255,255,0.14)] pt-[8%]">
                <Image
                  src={migron}
                  className="w-full"
                  alt="enjoying the view"
                />
                <h4 className="font-league font-bold text-[22px] text-center leading-[40px] mb-2 mt-8">
                  Rosemary Filet Migno
                </h4>
                <p className="text-center font-league pb-12">
                  Our prime beef served to your taste with a delicious choice of
                  seasonal sides.
                </p>
              </div>
              <div className="pt-[8%]">
                <Image
                  src={mousse}
                  className="w-full"
                  alt="enjoying the view"
                />
                <h4 className="font-league font-bold text-[22px] text-center leading-[40px] mb-2 mt-8">
                  Summer Fruit Chocolate Mousse
                </h4>
                <p className="text-center font-league pb-12">
                  Creamy mousse combined with summer fruits and dark chocolate
                  shavings.
                </p>
              </div>
            </div>
          </div>{" "}
        </div>
        <div className="md:flex hidden">
          <div className="bg-[#111111] py-[10%] w-full">
            <div className="px-[11.5%] flex lg:flex-row md:flex-col justify-between">
              <div className="flex flex-col flex-1">
                {" "}
                <Image src={line} alt="enjoying the view" />
                <h4 className="font-league font-bold text-[48px]  leading-[48px] text-white mb-4 mt-14">
                  Enjoyable place <br /> for all the family
                </h4>
                <p className=" font-league text-white font-normal text-[20px] w-[445px]">
                  Our relaxed surroundings make dining with us a great
                  experience for everyone. We can even arrange a tour of the
                  farm before your meal.
                </p>
              </div>
              <div className="flex flex-1 flex-col">
                <div className="flex items-center border-b-[1px] pb-6 border-[rgba(255,255,255,0.14)] mt-14 gap-12">
                  <div className="lg:w-[20%] w-[30%]">
                    <Image
                      src={fillet}
                      className="w-full"
                      alt="enjoying the view"
                    />
                  </div>

                  <div className="flex flex-col">
                    <h4 className="font-league font-bold text-[20px] text-white">
                      Seared Salmon Fillet
                    </h4>
                    <p className="text-white font-league w-[350px]">
                      Our locally sourced salmon served with a refreshing
                      buckwheat summer salad.
                    </p>
                  </div>
                </div>
                <div className="flex items-center border-b-[1px] pb-6 pt-6 border-[rgba(255,255,255,0.14)]  gap-12">
                  <div className="lg:w-[20%] w-[30%]">
                    <Image
                      src={migron}
                      className="w-full"
                      alt="enjoying the view"
                    />
                  </div>

                  <div className="flex flex-col">
                    <h4 className="font-league font-bold text-[20px] text-white">
                      Seared Salmon Fillet
                    </h4>
                    <p className="text-white font-league w-[350px]">
                      Our locally sourced salmon served with a refreshing
                      buckwheat summer salad.
                    </p>
                  </div>
                </div>
                <div className="flex items-center   pt-6  gap-12">
                  <div className="lg:w-[20%] w-[30%]">
                    <Image
                      src={mousse}
                      className="w-full"
                      alt="enjoying the view"
                    />
                  </div>

                  <div className="flex flex-col">
                    <h4 className="font-league font-bold text-[20px] text-white">
                      Seared Salmon Fillet
                    </h4>
                    <p className="text-white font-league w-[350px]">
                      Our locally sourced salmon served with a refreshing
                      buckwheat summer salad.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
