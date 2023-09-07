import { appRouter } from "@/server/api/root";
import { prisma } from "@/server/db";
import "flowbite";
import React from "react";
import "~/styles/themetoogle.css";
import { categories } from "~/assets/data";
import { ProductCard } from "~/components";
import { type Product } from "@prisma/client";

async function MyHome({
  params: { category },
}: {
  params: { category: string };
}) {
  const caller = appRouter.createCaller({
    session: null,
    prisma: prisma,
  });

  const categoriesSlugs: string[] = [];

  const curentCategory = "";

  // categories.find((cat) => {
  //   if (cat.slug === category) {
  //     curentCategory = cat.title;
  //     categoriesSlugs.push(cat.slug);
  //     const subcats = cat.subcategories.find(
  //       (subcat) => subcat.slug === category
  //     );
  //     if (subcats) {
  //       categoriesSlugs.push(subcats.slug);
  //       curentCategory = subcats.title;
  //     }
  //   }
  // });

  const currentcategory = categories.find((cat) => {
    if (cat.slug === category) {
      return cat;
    }
    const subcat = cat.subcategories.find((subcat) => subcat.slug === category);
    return subcat;
  });

  // const data = await caller.product.getAllCategory(categoriesSlugs || ["bugs"]);
  const datas: Product[] = [];

  const catdata = await caller.product.getAllCategories(
    currentcategory?.slug || "bugs"
  );
  datas.concat(catdata);
  currentcategory?.subcategories.map(async (cat) => {
    const data = await caller.product.getAllCategories(cat.slug || "bugs");
    datas.concat(data);
  });

  console.log(datas);

  return (
    <div className={``}>
      <div className="">
        <h1 className="text-xl font-bold">{curentCategory}</h1>
        <section className=" w-full ">
          <div className="flex gap-4">
            {datas.map((product, index) => (
              <div className="" key={index}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default MyHome;
