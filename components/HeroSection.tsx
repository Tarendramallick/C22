'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-white py-6">

      {/* Hero Wrapper (10px side margin) */}
      <div className="flex mx-[10px] rounded-[32px] overflow-hidden">

        {/* Background Image */}
        <Image
          src="/herodark.png"
          alt="Hero background"
          width={1920}
          height={1080}
          priority
          className="min-w-full h-full mt-2 object-cover"
        />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col">

          {/* Top Bar */}
          <div className="flex items-center justify-between px-8 pt-7">

            {/* Logo Image (Left) */}
            <Image
              src="/herologo.png"
              alt="C22 Logo"
              width={130}
              height={75}
              priority
              className="object-contain w-[130px] h-[75px]"
            />

            {/* Globe Image (Right) */}
            <div className="w-10 h-10  border border-white flex items-center pt-4 justify-center">
              <Image
                src="/Frame.svg"
                alt="Globe"
                width={48}
                height={48}
                className="object-contain "
              />
            </div>

          </div>

          {/* Center Content */}
          <div className="flex flex-1 items-center justify-center mt-[-150px] px-8 md:px-20">
            <div className="max-w-8xl">

              <h1 className="text-white font-black italic text-4xl md:text-[80px] leading-none">
                MARKETING <span className="italic font-normal">FOR</span>{' '}
                <span className="font-black">BRANDS.</span>
              </h1>

              <h2 className="mt-2 text-white font-normal text-4xl md:text-[80px] italic leading-none">
                WHO <span className="font-black italic">WANT</span> TO{' '}
                <span className="text-[#FE5A1D] underline font-black">
                  WIN
                </span>.
              </h2>

              {/* CTA Button */}
              <button className="group mt-2 inline-flex items-center w-[263px] h-[60px] gap-3 border border-white border-1 rounded-[15px] pr-4">
                <span className="bg-[#FE5A1D]  h-full w-[30%] items-center rounded-l-[15px]">
                  {/* <ArrowRight className="text-black w-4 h-4" /> */}
                  <Image
                  src="/arrow.png"
                  alt="arrow"
                  width={48}
                  height={48}
                  className='ml-2 mt-1'
                />
                </span>
                <Image
                src="/btn.png"
                alt="Scale Your Brand"
                width={171}
                height={100}
              />

              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
