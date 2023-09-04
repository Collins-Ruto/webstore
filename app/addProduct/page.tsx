"use client";
import React, { useState } from "react";
import { Button, Editor, StatusMsg } from "~/components";
import type { Product } from "@prisma/client";
import { api } from "@/utils/api";
// import { Subjects } from "~/types/types";
import { categories } from "~/assets/data";

interface IndexedProduct extends Product {
  [key: string]: string | Date | boolean | string[];
}

function CreateProduct() {
  const [product, setProduct] = useState<Product | undefined>();
  const [file, setFile] = useState<File>();
  const [submit, setSubmit] = useState(false);
  const [status, setStatus] = useState({ message: "", type: "" });
  const [validInput, setValidInput] = useState("");

  // const { data: streams, isLoading } = api.stream.getAll.useQuery();

  const handleInput = (event: React.SyntheticEvent) => {
    setValidInput("");
    const target = event.target as HTMLInputElement;
    const name = target.name;
    const value = target.value;

    setProduct((prevProduct) => {
      if (!prevProduct) {
        // if (target.name === "subject") {
        //   return {
        //     subject: {
        //       slug: value,
        //       name:
        //         Subjects.find((subject) => subject.slug === value)?.name || "",
        //     },
        //   } as unknown as Product;
        // }
        return {
          [name]: value,
        } as unknown as Product; // or some default value if you have one
      }
      // if (target.name === "subject") {
      //   return {
      //     ...prevProduct,
      //     [name]: value,
      //     subject: {
      //       slug: value,
      //       name:
      //         Subjects.find((subject) => subject.slug === value)?.name || "",
      //     },
      //   };
      // }

      const updatedProduct = {
        ...prevProduct,
        [name]: value,
        posted: new Date().toDateString(),
      };

      console.log(updatedProduct);

      return updatedProduct;
    });
  };

  const inputValidate = (action: string) => {
    const fields = [
      "name",
      "description",
      "due",
      "subject",
      "streamId",
      "teacherId",
    ];
    const inputProduct = product as IndexedProduct;
    let message = "Please fill: ";
    if (action === "clear") {
      setProduct(() => {
        let newInput = {} as unknown as Product;
        fields.forEach((field) => {
          newInput = { ...newInput, [field]: "" };
        });
        return newInput;
      });
    }
    fields.forEach((field) => {
      if (inputProduct?.[field] === "" || inputProduct?.[field] === undefined) {
        message += `${field}, `;
        setValidInput(message);
      }
    });
    if (message === "Please fill: ") {
      return true;
    } else {
      return false;
    }
  };

  const handleQuillChange = (content: string) => {
    const jsonContent: string = JSON.stringify(content);

    setProduct((prevProduct) => {
      if (!prevProduct) {
        return {
          description: jsonContent,
        } as unknown as Product; // or some default value if you have one
      }
      const updatedProduct = {
        ...prevProduct,
        description: jsonContent,
      };

      console.log(updatedProduct);

      return updatedProduct;
    });
  };

  const handleFileInput = (event: React.SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    const file = target.files !== null ? target?.files[0] : undefined;

    setFile(file);
  };

  console.log("product", product);

  const addProductMutation = api.product.addProduct.useMutation();

  console.log("file", file);

  const fileSubmit = async (): Promise<Product> => {
    const formdata = new FormData();

    formdata.append("file", file as Blob);
    formdata.append("cloud_name", "dhlbhtrym");
    formdata.append("upload_preset", "learnhqdoc");

    console.log("formdata", formdata);

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dhlbhtrym/auto/upload",
      {
        method: "post",
        mode: "cors",
        body: formdata,
      }
    );

    const json = (await res.json()) as { secure_url: string };
    console.log(json);
    console.log(JSON.stringify(json.secure_url));

    const updatedProduct = {
      ...product,
      // asset_id: json.asset_id ?? "",
      // file: json.original_filename ?? "",
      // original_filename: json.original_filename ?? "",
      image_url: json.secure_url ?? "",
    } as Product;

    return updatedProduct;
  };

  async function handleSubmit() {
    if (inputValidate("") === false) {
      return;
    }
    setSubmit(true);

    const newProduct = {
      ...product,
      asset_id: "",
      file: "",
      original_filename: "",
      secure_url: "",
    } as Product;

    const fileProduct = file ? await fileSubmit() : newProduct;

    console.log("fileProduct product", fileProduct);
    console.log("new product", newProduct);

    try {
      addProductMutation.mutate(fileProduct, {
        onSuccess: () => {
          setSubmit(false);
          setStatus({
            type: "success",
            message: `succesfully added ${
              fileProduct?.title ?? ""
            } as a product`,
          });
          setTimeout(() => {
            inputValidate("clear");
          }, 2000);
        },
      });
    } catch (error) {
      setSubmit(false);
      setStatus({ type: "error", message: "error check your input" });
    }
  }

  return (
    <div>
      {<StatusMsg status={status} />}
      <div className="p-2 text-2xl font-semibold text-black md:p-4">
        <h3>Add Products</h3>
      </div>
      {/* {isLoading && <Loader />} */}
      <div className="m-4 rounded-xl bg-[#F7F6FB] p-4 text-black md:p-6">
        <form>
          <div className="flex grid-cols-3 flex-col gap-2 gap-y-4 md:grid md:gap-y-8">
            <div>
              <label>
                Product Name <span className="text-red-500">*</span>
              </label>
              <input
                onChange={(e) => {
                  handleInput(e);
                }}
                value={product?.title}
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-3 leading-tight text-gray-700 shadow focus:outline-none"
                type="text"
                placeholder="eg. Assignmets 1"
                name="title"
              />
            </div>
            <div>
              <label>
                Old Price <span className="text-red-500">*</span>
              </label>
              <input
                onChange={(e) => {
                  handleInput(e);
                }}
                value={product?.old_price}
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-3 leading-tight text-gray-700 shadow focus:outline-none"
                type="text"
                placeholder="eg. 12,000"
                name="old_price"
              />
            </div>
            <div>
              <label>
                Current price <span className="text-red-500">*</span>
              </label>
              <input
                onChange={(e) => {
                  handleInput(e);
                }}
                value={product?.price}
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-3 leading-tight text-gray-700 shadow focus:outline-none"
                type="text"
                placeholder="eg. 10,000"
                name="price"
              />
            </div>
            <div>
              <label>
                Serial Number <span className="text-red-500">*</span>
              </label>
              <input
                onChange={(e) => {
                  handleInput(e);
                }}
                value={product?.serialno}
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-3 leading-tight text-gray-700 shadow focus:outline-none"
                type="text"
                placeholder="eg. 123H393U89DH923"
                name="serialno"
              />
            </div>
            <div>
              <label>
                Warrany in years <span className="text-red-500">*</span>
              </label>
              <input
                onChange={(e) => {
                  handleInput(e);
                }}
                value={product?.warranty}
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-3 leading-tight text-gray-700 shadow focus:outline-none"
                type="text"
                placeholder="eg. 2"
                name="warranty"
              />
            </div>
            <div>
              <label>
                Product Brand <span className="text-red-500">*</span>
              </label>
              <input
                onChange={(e) => {
                  handleInput(e);
                }}
                value={product?.brand}
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-3 leading-tight text-gray-700 shadow focus:outline-none"
                type="text"
                placeholder="eg. Sony"
                name="brand"
              />
            </div>
            <div>
              <label>
                Product Tags <span className="text-red-500">*</span>
              </label>
              <input
                onChange={(e) => {
                  handleInput(e);
                }}
                value={product?.tags}
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-3 leading-tight text-gray-700 shadow focus:outline-none"
                type="text"
                placeholder="eg. speaker"
                name="tags"
              />
            </div>

            <div className="relative inline-block items-center">
              <label>
                Category <span className="text-red-500">*</span>
              </label>
              <div className="flex cursor-pointer items-center">
                <select
                  onChange={(e) => {
                    handleInput(e);
                  }}
                  name="category"
                  value={product?.categories}
                  className="focus:shadow-outline block w-full appearance-none rounded border border-gray-400 bg-white px-4 py-3 pr-8 leading-tight shadow hover:border-gray-500 focus:outline-none"
                >
                  <option>Select Category</option>
                  {categories.map((category, index) =>
                    category.subcategories ? (
                      category.subcategories.map((subcategory, index2) => (
                        <option
                          value={[category.slug, subcategory.slug]}
                          className=""
                          key={index2}
                        >
                          {category.title + " - " + subcategory.title}
                        </option>
                      ))
                    ) : (
                      <option value={category.slug} key={index}>
                        {category.title}
                      </option>
                    )
                  )}
                </select>
                <div className="pointer-events-none absolute right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* <div>
              <label>
                Teacher Username <span className="text-red-500">*</span>
              </label>
              <input
                onChange={(e) => {
                  handleInput(e);
                }}
                value={product?.teacherId}
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-3 leading-tight text-gray-700 shadow focus:outline-none"
                type="text"
                placeholder="eg. 456erick"
                name="teacherId"
              />
            </div> */}
            {/* <div>
              <label>
                Price <span className="text-red-500">*</span>
              </label>
              <input
                onChange={(e) => {
                  handleInput(e);
                }}
                value={product?.price}
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-3 leading-tight text-gray-700 shadow focus:outline-none"
                type="date"
                name="price"
              />
            </div> */}
          </div>
          <div className="py-4 md:pt-8">
            <label>
              Product Description <span className="text-red-500">*</span>
            </label>
            <Editor handleQuillChange={handleQuillChange} />
          </div>
          <div>
            <label className="mb-2 block font-medium" htmlFor="file_input">
              Upload file
            </label>
            <input
              onChange={(e) => {
                handleFileInput(e);
              }}
              className="block w-fit cursor-pointer rounded bg-gray-500 text-lg leading-loose text-gray-900 focus:outline-none"
              type="file"
              name="file"
              id="file_input"
            />
            <p className="mt-1 text-sm text-gray-600" id="file_input_help">
              SVG, PNG, JPG or Any Document Type.
            </p>
          </div>
          <div className="mt-2">
            <div className="opacity80 rounded text-sm text-red-500">
              <span className="">{validInput}</span>
              <span className="text-transparent">.</span>
            </div>
          </div>
          <div className=" my-2">
            <div>
              {submit ? (
                <Button />
              ) : (
                <div
                  onClick={() => void handleSubmit()}
                  className="w-fit cursor-pointer rounded bg-blue-500  px-10 py-2 font-bold text-white hover:bg-blue-700"
                >
                  Submit
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateProduct;
