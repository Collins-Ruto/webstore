import React from "react";
import type { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }: { product: Product }) => {
  const date = new Date(product.created_at);
  return (
    <div className=" flex h-full flex-col rounded-lg border border-gray-200 bg-gray-50 shadow-md drop-shadow-sm  hover:shadow-xl rdark:border-gray-700 rdark:bg-gray-900 md:max-w-xl">
      <div className="relative">
        <Image
          width={600}
          height={200}
          className="cover h-30 w-full "
          src={product.image_url}
          style={{ objectFit: "cover", justifyContent: "start" }}
          alt="Product Cover Image"
        />
        <button
          type="button"
          className="absolute left-1 top-4 mr-2 inline-flex items-center rounded-full bg-red-700 p-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 rdark:bg-blue-600 rdark:hover:bg-blue-700 rdark:focus:ring-blue-800"
        >
          <Image
            width={60}
            height={20}
            className="cover h-6 w-full  "
            src="https://img.icons8.com/ios-glyphs/30/FFFFFF/plus-math.png"
            style={{ objectFit: "cover", justifyContent: "start" }}
            alt="Product Cover Image"
          />
          <span className="sr-only">Icon description</span>
        </button>
        
      </div>
      <Link
        href={`/products/product/${product.slug}`}
        className="flex h-full flex-col justify-between px-4"
      >
        {/* <div className="justify-betwee flex">
          <div className="ml-2 flex flex-wrap text-sm text-gray-600 rdark:text-gray-400">
            <span className="hidden md:block">Created at:&nbsp; </span>
            <span className="font-semibold">{date.toDateString()}</span>
          </div>
        </div> */}
        <h2 className=" text-2xl font-semibold text-gray-800 hover:underline rdark:text-gray-100">
          {product.title}
        </h2>
        <div className="flex flex-row justify-between gap-2">
          <p className="text-gray-400 ">KSH {product.old_price}</p>
          <p className="text-red-800">KSH {product.price}</p>
        </div>
        <div className="mt-2 font-bold fle items-center justify-between">
          <button
            type="button"
            className="mb-2 mr-2  rounded-full bg-green-500 px-5 py-2.5 text-center text-sm text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 rdark:bg-green-600 rdark:hover:bg-green-700 rdark:focus:ring-green-800"
          >
            Buy via WhatsApp
          </button>
          
          <button
            type="button"
            className="mb-2 mr-2 rounded-full bg-gray-800 px-5 py-2.5 text-sm  text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rdark:border-gray-700 rdark:hover:bg-gray-700 rdark:focus:ring-gray-700"
          >
            Add to cart
          </button>
          
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
