"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
  useGSAP(() => {
    gsap.to(".box", {
      x: "100vw",
      scrollTrigger: {
        trigger: ".box",
        start: "top 80%",
        end: "bottom 10%",
        markers: true,
        scrub: 0.5,
      },
    });
  });

  return (
    <div className="mt-[70vh] h-screen">
      <div className="size-full flex items-center  bg-slate-300">
        <div className="box w-40 h-40 bg-red-700 flex flex-col items-center justify-center text-white font-bold cursor-pointer">
          <p>box1</p>
        </div>
      </div>
      <div className="size-full flex items-center justify-center bg-rose-300">
        <h2 className="text-3xl font-bold">Section2</h2>
      </div>
      <div className="size-full flex items-center justify-center bg-sky-300">
        <h2 className="text-3xl font-bold">Section3</h2>
      </div>
    </div>
  );
}
