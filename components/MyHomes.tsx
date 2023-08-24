import Image from "next/image";
import Link from "next/link";
import React from "react";
import { tools1, tools2 } from "~/assets/homedata";
import "~/styles/themetoogle.css";
import pinnedProjects from "~/assets/pinnedProjects2.json";
import localFont from "@next/font/local";
import { CategoryCard, Contact, PinnedCard, ProductCard } from ".";
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
  title: "wewrfa",
  description: "wewrfa",
  slug: "wewrfa",
  price: "wewrfa",
  old_price: "wewrfa",
  image_url: "/img/items/hbl-auto-1.jpeg",
  serialno: "wewrfa",
  category: "wewrfa",
  created_at: "wewrfa",
};

const categoriesexp = [{
  id: "",
  title: "New Arrivals",
  description: "",
  slug: "new-arrivals",
  image_url: "https://img.icons8.com/ios-glyphs/30/FFFFFF/plus-math.png",
  created_at: "",
}];


function MyHome() {
  return (
    <div className={``}>
      <div className="">
        <div className=" mx-auto">
          <section className="flex items-center h-full flex-wra gap-4">
            <div className="grow mx-2 md:2/4 px-2">
            <div
              id="default-carousel"
              className="relative w-full border "
              data-carousel="slide"
            >
              <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <Image
                    src="/img/carousel/gaming-accessories.jpg"
                    width={450}
                    height={40}
                    className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
                    alt="..."
                  />
                </div>

                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <Image
                    src="/img/carousel/gaming-accessories.jpg"
                    width={450}
                    height={40}
                    className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
                    alt="..."
                  />
                </div>
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <Image
                    src="/img/carousel/gaming-accessories.jpg"
                    width={450}
                    height={40}
                    className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
                    alt="..."
                  />
                </div>
              </div>
              <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3">
                <button
                  type="button"
                  className="h-3 w-3 rounded-full"
                  aria-current="true"
                  aria-label="Slide 1"
                  data-carousel-slide-to="0"
                ></button>
                <button
                  type="button"
                  className="h-3 w-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 2"
                  data-carousel-slide-to="1"
                ></button>
                <button
                  type="button"
                  className="h-3 w-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 3"
                  data-carousel-slide-to="2"
                ></button>
                <button
                  type="button"
                  className="h-3 w-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 4"
                  data-carousel-slide-to="3"
                ></button>
                <button
                  type="button"
                  className="h-3 w-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 5"
                  data-carousel-slide-to="4"
                ></button>
              </div>

              <button
                type="button"
                className="group absolute left-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
                data-carousel-prev
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
                  <svg
                    className="h-4 w-4 text-white dark:text-gray-800"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 1 1 5l4 4"
                    />
                  </svg>
                  <span className="sr-only">Previous</span>
                </span>
              </button>
              <button
                type="button"
                className="group absolute right-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
                data-carousel-next
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
                  <svg
                    className="h-4 w-4 text-white dark:text-gray-800"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span className="sr-only">Next</span>
                </span>
              </button>
              </div>
            </div>
            <div className="md:w-1/3 w-full bg-gray-800 py-4">
              <div className="px-4">

                <h1 className="">Deal of the day</h1>
                <h2 className="font-bold text-xl text-gray-500">00:20:20</h2>
              </div>
              <ProductCard product={featuredProduct} />
            </div>
          </section>
          <section className="">
            {categoriesexp.map((category, index) => (
              <div className="bg-gray-200">
                <CategoryCard category={category} />
              </div>
            ))}

          </section>

        </div>
      </div>
    </div>
  );
}

export default MyHome;
