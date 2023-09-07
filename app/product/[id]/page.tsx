import { appRouter } from "@/server/api/root";
import { prisma } from "@/server/db";
import type { Metadata, ResolvingMetadata } from "next";
import type { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "~/components";

const product: Product = {
  id: "wewrfa",
  title: "Executive Casio Edifice Chronograph Watch",
  description:
    "Day, date, and time calendar watch Water-resistant Perfect chronographs Anti-fade Strong metallic straps",
  slug: "wewrfa",
  price: "14,000",
  old_price: "21,000",
  image_url: "/img/items/hbl-auto-1.jpeg",
  serialno: "wewrfa",
  category: "wewrfa",
  created_at: "wewrfa",
  warranty: "2",
  brand: "sony",
  tags: ["wewrfa"],
};

const relatedProducts = [1, 2, 3, 4];

export async function generateMetadata(
  {
    params: { id },
  }: {
    params: { id: string };
  },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const caller = appRouter.createCaller({
    session: null,
    prisma: prisma,
  });

  // const data = await caller.product.getById(id || "621dd16f2eece6ce9587cb0d");
  // const product = data[0] as Product;

  const previousImages = (await parent)?.openGraph?.images || [];

  return {
    title: product.title,
    openGraph: {
      images: [product.image_url, ...previousImages],
    },
    authors: [
      {
        name: "Collins Ruto",
        url: "https://collinsruto.netlify.app/",
      },
    ],
    keywords: ["learnhq", product.title],
    twitter: { creator: "@ruto_collins_" },
  };
}

export default async function ProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const caller = appRouter.createCaller({
    session: null,
    prisma: prisma,
  });

  // const data = await caller.product.getById(id || "621dd16f2eece6ce9587cb0d");
  // const related = await caller.product.getById(id || "621dd16f2eece6ce9587cb0d");
  // const product = data[0] as Product;
  // console.log("product", data);

  return (
    <div className="w-screen p-4 text-black md:w-full">
      <div className="flex-co mx-auto  mb-4 flex justify-center">
        <div className="relative w-1/3">
          <Image
            width={400}
            height={600}
            className="cover h-120 w-[24rem] "
            src={product.image_url}
            style={{ objectFit: "cover", justifyContent: "start" }}
            alt="Product Cover Image"
          />
          <span className="over:bg-blue-800 absolute left-1 top-4 mr-2 inline-flex items-center rounded-full bg-red-700 p-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300">
            -33%
          </span>
        </div>
        <div className="flex w-1/3 flex-col gap-4">
          <span className="text-xl font-bold">{product.title}</span>
          <span className="text-red-700">{product.price}</span>
          <div className="flex flex-row justify-around gap-2 font-bold">
            <span className="text-gray-400 line-through">
              KSH {product.old_price}
            </span>
            <span className="text-red-700">KSH {product.price}</span>
          </div>
          <div className="flex">
            <div className=""></div>
            {/* <button
              type="button"
              className="rdark:bg-green-600 rdark:hover:bg-green-700  rdark:focus:ring-green-800 mb-2 mr-2 rounded-full bg-green-400 px-5 py-2.5 text-center text-sm text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300"
            >
              Buy now
            </button> */}
          </div>
          <button
            type="button"
            className="rdark:bg-green-600 rdark:hover:bg-green-700  rdark:focus:ring-green-800 mb-2 mr-2 rounded-full bg-green-400 px-5 py-2.5 text-center text-sm text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300"
          >
            Buy via WhatsApp
          </button>

          <button
            type="button"
            className="rdark:border-gray-700 rdark:hover:bg-gray-700 rdark:focus:ring-gray-700 mb-2 mr-2 rounded-full bg-gray-800  px-5 py-2.5 text-sm text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300"
          >
            Add to cart
          </button>

          <span className="">{product.description}</span>
          <span className="">{product.warranty} Year Waranty</span>
          <span className="rounded-lg  border-2 border-red-500 px-4 text-black">
            Call to order: 0716527700
          </span>
          <span className="">{product.brand}</span>
          <div className="">
            <span className="">Share this product</span>
            <div className="">
              <Link
                href="https://twitter.com/ruto_collins_"
                type="button"
                aria-label="collins ruto twitter"
                className="m-1 h-10 w-10 rounded-full border-2 border-white bg-black bg-opacity-80 uppercase leading-normal text-white transition-all duration-150 ease-in-out hover:h-10 hover:w-10 hover:border-none hover:border-gray-500 hover:bg-pink-600 focus:outline-none focus:ring-0"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto h-full w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </Link>
              <Link
                href="https://twitter.com/ruto_collins_"
                type="button"
                aria-label="collins ruto twitter"
                className="m-1 h-10 w-10 rounded-full border-2 border-white bg-black bg-opacity-80 uppercase leading-normal text-white transition-all duration-150 ease-in-out hover:h-10 hover:w-10 hover:border-none hover:border-gray-500 hover:bg-pink-600 focus:outline-none focus:ring-0"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto h-full w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </Link>

              <Link
                href="https://instagram.com/learn.hq"
                type="button"
                aria-label="learnhq instagram"
                className="m-1 h-10 w-10 rounded-full border-2 border-white bg-black bg-opacity-80 uppercase leading-normal text-white transition-all duration-150 ease-in-out hover:h-10 hover:w-10 hover:border-none hover:border-gray-500 hover:bg-pink-600 focus:outline-none focus:ring-0"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto h-full w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className=""></div>
      <div className="">
        <span className="">You may also like...</span>
        <div className="flex gap-4">
          {relatedProducts.map((_, index) => (
            <div className="" key={index}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
