"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
  useGSAP(() => {
    // 各画像に対して個別にpinを設定
    const images = gsap.utils.toArray<HTMLElement>(".pin-image");

    images.forEach((image, index) => {
      const remainingImages = images.length - (index + 1);

      ScrollTrigger.create({
        trigger: image,
        start: `center 40%+=${index * 10}`,
        end:
          remainingImages > 0
            ? `+=${remainingImages * window.innerHeight}`
            : "+=0",
        pin: true,
        pinSpacing: false,
        scrub: 0.5,
        markers: true,
      });
    });
  });

  return (
    <div>
      <div className="h-screen w-full bg-gray-300 flex items-center justify-center">
        <p className="text-4xl font-bold text-center">
          GSAP animation
          <br />
          <br /> ↓<br />↓<br /> ↓<br />
          <br />
          scrool
        </p>
      </div>
      <div>
        {Array.from({ length: 4 }, (_, i) => (
          <div
            key={i}
            className="h-screen w-full flex items-center justify-center pin-image"
          >
            <div
              className={`image-inner relative h-[40vh] w-[80vw] bg-white rounded-lg shadow-2xl mt-[${i * 20}px]`}
            >
              <Image
                src={`/img_${i + 1}.jpg`}
                fill
                className="object-cover rounded-lg"
                alt={`画像${i + 1}`}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="h-screen w-full bg-gray-300 flex items-center justify-center">
        <p className="text-4xl font-bold text-center">End</p>
      </div>
    </div>
  );
}
