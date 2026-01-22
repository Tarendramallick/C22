'use client';

import Image from 'next/image';
import Link from 'next/link';
import SelectUnderline from './reusableComponents/SelectUnderline';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select";


export default function Hero() {
  return (
    <section className="bg-white py-6">
      {/* Hero Wrapper */}
      <div className="relative mx-[10px] rounded-[32px] overflow-hidden">

        {/* Background Image */}
        <Image
          src="/herodark.png"
          alt="Hero background"
          width={1920}
          height={1080}
          priority
          className="w-full h-full object-cover"
        />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col">

          {/* Top Bar */}
          <div className="flex items-center justify-between px-8 pt-7">

            {/* Logo (Home Link) */}
            <Link href="/" aria-label="Go to homepage">
              <Image
                src="/herologo.png"
                alt="C22 Logo"
                width={120}
                height={70}
                priority
                className="object-contain relative cursor-pointer -top-6"
              />
            </Link>

            {/* Globe Icon */}
            <div className="relative">
              <Select defaultValue="en">
                <SelectTrigger
                  className="w-10 h-10 border-none bg-transparent shadow-none p-0 focus:ring-0"
                >
                  <Image
                    src="/Frame.svg"
                    alt="Language"
                    width={38}
                    height={38}
                    className="object-contain relative cursor-pointer -top-4 left-2"
                  />
                </SelectTrigger>

                <SelectContent align="end" className="
              absolute
                bg-white
                border-b border-[#FE5A1D]
                rounded-2xl
                p-3
                w-[130px]
                h-[160px]
                -top-10
                text-white
                shadow-xl
              ">
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="ja">日本語</SelectItem>
                  <SelectItem value="hi">हिंदी</SelectItem>
                </SelectContent>
              </Select>
            </div>


          </div>

          {/* Center Content */}
          <div className="flex flex-1 items-center justify-center -mt-[150px] px-8 md:px-20">
            <div className="max-w-7xl">

              <h1 className="text-white font-black italic text-4xl md:text-[80px] leading-none">
                MARKETING <span className="font-normal italic">FOR</span>{' '}
                <span className="font-black">BRANDS.</span>
              </h1>

              <h2 className="mt-2 text-white font-normal text-4xl md:text-[80px] italic leading-none">
                WHO <span className="font-black italic">WANT</span> TO{' '}
                <span className="text-[#FE5A1D] underline font-black">
                  WIN
                </span>.
              </h2>

              {/* CTA */}
              <button className="relative mt-4 inline-flex items-center w-[263px] h-[60px] gap-3 border border-white rounded-[15px] pr-4">
                <span className="bg-[#FE5A1D] h-full w-[30%] flex items-center justify-center rounded-l-[15px]">
                  <Image
                    src="/arrow.png"
                    alt="arrow"
                    width={32}
                    height={32}
                  />
                </span>

                <p className="text-lg font-bold text-white italic">
                  Scale Your Brand
                </p>

                <SelectUnderline
                  className="absolute top-2 left-20"
                  width={154}
                  waves={24}
                  strokeWidth={23}
                />
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
