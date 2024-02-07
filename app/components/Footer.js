import React from "react";
import foot from "@/public/foot.png";
import Logo from "./logo";

export default function Footer() {
  return (
    <section>
      <div className="">
        <div
          style={{
            // use the src property of the image object
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${foot.src})`,
            // other styles
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "328px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h4 className="font-league font-bold text-[34px] text-center text-white mb-2 mt-8">
            Ready to make a reservation?
          </h4>
          <button className="uppercase font-league mt-1 w-[245px] h-[60px] flex justify-center items-center border border-white text-white font-semibold text-base tracking-[2.5px]">
            book a table
          </button>
        </div>
      </div>
      <div className="bg-[#111111] py-20 flex justify-center  flex-col items-center">
        <Logo />
        <div className="flex  items-center gap-3 flex-col mt-10">
          <h5
            className="
        font-league text-white uppercase text-sm tracking-[2px]"
          >
            Marthwaite, Sedbergh
          </h5>
          <h5
            className="
         font-league text-white uppercase text-sm tracking-[2px]"
          >
            Cumbria
          </h5>
          <h5
            className="
            font-league text-white uppercase text-sm tracking-[2px]"
          >
            +00 44 123 4567
          </h5>
        </div>
        <div className="flex  items-center gap-3 flex-col mt-10">
          <h5
            className="
         font-league text-white uppercase text-sm tracking-[2px]"
          >
            OPEN TIMES
          </h5>
          <h5
            className="
     font-league text-white uppercase text-sm tracking-[2px]"
          >
            MON - FRI: 09:00 AM - 10:00 PM
          </h5>
          <h5
            className="
          font-league text-white uppercase text-sm tracking-[2px]"
          >
            SAT - SUN: 09:00 AM - 11:30 PM
          </h5>
        </div>
      </div>
    </section>
  );
}
