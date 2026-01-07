import Image from "next/image"

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
            <span className="ml-35 text-[#FE5A1D]">BRAND</span>

            {/* FWRD IMAGE */}
            <span className="inline-block ml-6 align-middle">
              <Image
                src="/FWRD.png"
                alt="FWRD"
                width={500}
                height={200}
                className="object-contain"
                priority
              />
            </span>

            <span className="italic text-white">”</span>
          </span>

        </h2>
      </div>
    </section>
  )
}
