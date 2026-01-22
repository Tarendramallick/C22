import Image from "next/image"
import SwingUnderline from "./reusableComponents/SwingUnderline"

export default function Quote() {
  return (
    <section className="bg-black h-screen">
      <div className="w-full mx-auto">
        <h2 className="text-[180px] font-bold italic leading-tight">

          <span className="block text-white">
            “WE DRIVE
          </span>

          <span className="block text-white text-right mr-30">
            YOUR
          </span>

          <span className="block">
            <span className="ml-35 font-extrabold text-[#FE5A1D]">BRAND</span>
            <span className="ml-16 text-white">FWRD"</span>
              <SwingUnderline className="flex relative mt-2 -top-18 left-[950px]" width={390} />

            {/* FWRD IMAGE */}
            {/* <span className="inline-block ml-6 align-middle">
              <Image
                src="/FWRD.png"
                alt="FWRD"
                width={500}
                height={200}
                className="object-contain"
                priority
              />
            </span> */}
          </span>

        </h2>
      </div>
    </section>
  )
}
