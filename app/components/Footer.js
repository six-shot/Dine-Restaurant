import React from "react";
import foot from "@/public/foot.png";

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
    </section>
  );
}
