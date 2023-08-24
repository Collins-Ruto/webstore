"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";

export default function SlidingInterval() {
  return (
    <Carousel slideInterval={5000}>
      <Image width={400} height={200} alt="..." src="/img/carousel/gaming-accessories.jpg" />
      <Image width={400} height={200} alt="..." src="/img/carousel/Security-CCTV.jpg" />
      <Image width={400} height={200} alt="..." src="/img/carousel/watch.jpg" />
    </Carousel>
  );
}
