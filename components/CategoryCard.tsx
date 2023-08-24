import React from "react";
import type { Category, Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "./ProductCard";

const featuredProduct: Product = {
  id: "wewrfa",
  title: "Executive Casio Edifice Chronograph Watch",
  description: "Day, date, and time calendar watch Water-resistant Perfect chronographs Anti-fade Strong metallic straps",
  slug: "wewrfa",
  price: "14,000",
  old_price: "21,000",
  image_url: "/img/items/hbl-auto-1.jpeg",
  serialno: "wewrfa",
  category: "wewrfa",
  created_at: "wewrfa",
};

const maps = [1, 2, 3, 4, 5];

const CategoryCard = ({ category }: { category: Category }) => {
  return (
    <div>
      <div className="px-6 py-4">
        <div className="flex py-2 justify-between">
          <div className="flex items-center">
            <Image
              width={80}
              height={80}
              className="mr-1 h-8 w-8  rounded-sm"
              src={category.image_url}
              alt={category.title}
            />

            <h1 className="text-2xl font-bold text-black">{category.title}</h1>
          </div>
          <button
            type="button"
            className="rdark:border-blue-500 rdark:text-blue-500 rdark:hover:bg-blue-500 rdark:hover:text-white rdark:focus:ring-blue-800 mr-2 inline-flex items-center rounded-lg border border-orange-600 p-2.5 text-center text-sm font-medium text-orange-600 hover:bg-orange-600 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            view more
          </button>
        </div>
        <div className="flex gap-4">
          {maps.map((product, index) => (
            <div className="" key={index}>
              <ProductCard product={featuredProduct} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
