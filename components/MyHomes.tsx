import Image from "next/image";
import "flowbite";
import Link from "next/link";
import React from "react";
import "~/styles/themetoogle.css";
import localFont from "@next/font/local";
import {
  CategoryCard,
  FeaturedCard,
  CarouselCard,
} from ".";
import { type Product } from "@prisma/client";
import { categoriesexp } from "~/assets/data";

const helloFont = localFont({
  src: "../assets/fonts/Open_Sans/static/OpenSans-ExtraBold.ttf",
  display: "fallback",
});

const headFont = localFont({
  src: "../assets/fonts/Saira/static/Saira-Medium.ttf",
  display: "fallback",
});

const featuredProduct: Product = {
  id: "wewrfa",
  title: "Executive Casio Edifice Chronograph Watch",
  description:
    "Day, date, and time calendar watch Water-resistant Perfect chronographs Anti-fade Strong metallic straps",
  slug: "wewrfa",
  price: "15,499",
  old_price: "25,000",
  image_url: "/img/items/hbl-auto-1.jpeg",
  serialno: "wewrfa",
  category: "wewrfa",
  created_at: "wewrfa",
  warranty: "2",
  brand: "sony",
  tags: ["wewrfa"],
};

function MyHome() {
  return (
    <div className={``}>
      <div className="">
        <div className="">
          <section className=" flex h-full items-center gap-4">
            <div className="md:2/4 mx-2 grow px-2">
              <CarouselCard />
            </div>
            <div className="w-full rounded py-4 md:w-1/4">
              <FeaturedCard product={featuredProduct} />
            </div>
          </section>
          <section className=" w-full ">
            {categoriesexp.map((category, index) => (
              <div
                className={`  py-4 ${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                }`}
              >
                <div className="container mx-auto">
                  <CategoryCard category={category} />
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}

export default MyHome;
