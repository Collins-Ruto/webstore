import Image from "next/image";
import React from "react";
import { categories } from "~/assets/data";

function Dropdown() {
  return (
    <div>
      <div className="flex w-full items-center justify-center">
        <div className="group inline-block relative cursor-pointer ">
          <div className="flex items-center justify-between">
            <a
              className="menu-hover text-lg  font-bold text-black lg:mx-4"
              // onClick=""
            >
              SHOP BY CATEGORIES
            </a>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </div>
          <div className="invisible absolute z-50 flex w-full flex-col bg-gray-100 p-4 px-4 py-1 text-gray-800 shadow-xl group-hover:visible">
            {categories.map((category, index) =>
              category.subcategories ? (
                <div className="">
                  <div className="flex w-full">
                    <div className="group/item relative w-full cursor-pointer ">
                      <div className="flex items-center w-full justify-between">
                        <a
                          className="menu-hover text-lg pl-2 py-2 font-bold text-black "
                          // onClick=""
                        >
                          {category.title}
                        </a>
                        <span>
                          <Image
                            width={80}
                            height={80}
                            className="mr-1 h-5 w-5  rounded-sm"
                            src="/icons/greater-than-b.png"
                            alt=""
                          />
                        </span>
                      </div>

                      <div className="group-hover:visible left-56 invisible absolute z-50 flex w-full flex-col bg-gray-100 p-4 px-4 py-1 text-gray-800 shadow-xl">
                        {category.subcategories.map((category, index) => (
                          <div className="p-2" key={index}>
                            {category.title}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-2" key={index}>
                  {category.title}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
