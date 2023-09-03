import React from "react";
import type { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }: { product: Product }) => {
  const date = new Date(product.created_at);
  const deal = () => {
    const diff = parseInt(product.old_price) - parseInt(product.price);
    const percent = (diff / parseInt(product.old_price)) * 100;
    return percent.toFixed(0);
  };
  return (
    <div className=" rdark:bg-gray-900 flex h-full flex-col  rounded-lg bg-gray-50 shadow-md  drop-shadow-sm hover:shadow-xl md:max-w-xl">
      <div className="relative">
        <Image
          width={600}
          height={200}
          className="cover h-30 w-full "
          src={product.image_url}
          style={{ objectFit: "cover", justifyContent: "start" }}
          alt="Product Cover Image"
        />
        <span className="over:bg-blue-800 absolute left-1 top-4 mr-2 inline-flex items-center rounded-full bg-[#FF0000] px-1 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300">
          -{deal()}%
        </span>
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
        <h2 className=" rdark:text-gray-100 text-lg font-semibold text-gray-800 hover:underline">
          {product.title}
        </h2>
        <div className="flex flex-row justify-between gap-2 font-bold">
          <p className="text-gray-400 line-through">KSH {product.old_price}</p>
          <p className="text-red-700">KSH {product.price}</p>
        </div>
        <div className="fle mt-2 items-center justify-between font-bold">
          <button
            type="button"
            className="rdark:bg-green-600 rdark:hover:bg-green-700 rdark:focus:ring-green-800  mb-2 mr-2 flex rounded-full bg-green-400 px-5 py-2.5 text-center text-sm text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300"
          >
            Buy via WhatsApp
            <Image
              width={80}
              height={80}
              className="mr-1 h-5 w-5  rounded-sm"
              src="/icons/greater-than.png"
              alt=""
            />
          </button>

          <button
            type="button"
            className="rdark:border-gray-700 rdark:hover:bg-gray-700 rdark:focus:ring-gray-700 mb-2 mr-2 flex rounded-full bg-gray-800  px-5 py-2.5 text-sm text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300"
          >
            Add to cart
            <Image
              width={80}
              height={80}
              className="mr-1 h-5 w-5  rounded-sm"
              src="/icons/greater-than.png"
              alt=""
            />
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
