import Image from "next/image";
import "flowbite";
import Link from "next/link";
import React from "react";
import { tools1, tools2 } from "~/assets/homedata";
import "~/styles/themetoogle.css";
import pinnedProjects from "~/assets/pinnedProjects2.json";
import localFont from "@next/font/local";
import {
  CategoryCard,
  Contact,
  FeaturedCard,
  CarouselCard,
  PinnedCard,
  ProductCard,
} from ".";
import { type Product } from "@prisma/client";

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
};

const categoriesexp = [
  {
    id: "",
    title: "New Arrivals",
    description: "",
    slug: "new-arrivals",
    image_url: "/icons/new-arrivals.png",
    created_at: "",
  },
  {
    id: "",
    title: "On Sale",
    description: "",
    slug: "new-arrivals",
    image_url: "/icons/onsale.png",
    created_at: "",
  },
];

function MyHome() {
  return (
    <div className={``}>
      <div className="">
        <div className="">
          <section className="container mx-auto flex h-full items-center gap-4">
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
