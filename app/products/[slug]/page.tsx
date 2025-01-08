// app/products/[slug]/page.tsx
import { notFound, redirect } from "next/navigation"

import { FadeIn } from "@/components/cult/fade-in"
import { getProductById } from "@/app/actions/get-product-by-id"

import { ProductDetails } from "./details"

const ProductIdPage = async ({ params }: { params: { slug: string } }) => {
  const data = await getProductById(params.slug)

  // if (!data) {
  //   notFound()
  //   // redirect("/")
  // }

  return (
    <>
      <div className="z-10">
        <div className=" py-4 w-full relative  mx-auto max-w-6xl">
          {/* <FadeIn>{data ? <ProductDetails product={data[0]} /> : null}</FadeIn> */}
        </div>
      </div>
    </>
  )
}

export default ProductIdPage
