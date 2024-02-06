import React from "react";
import Image from "next/image";
import enjoy from "@/public/enjoy.png";

export default function Enjoy() {
  return (
    <section className="px-[6%] -mt-[20%]">
      <div>
        <Image src={enjoy} alt="enjoying the view" className="w-full" />
      </div>
    </section>
  );
}
